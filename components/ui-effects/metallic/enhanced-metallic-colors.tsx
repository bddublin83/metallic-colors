"use client"

import { useState, useEffect } from "react"
import { Copy, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function EnhancedMetallicColors() {
  const [copiedTeal, setCopiedTeal] = useState(false)
  const [copiedSilver, setCopiedSilver] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Track mouse position for dynamic lighting effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const colors = {
    teal: {
      name: "Enhanced Metallic Teal Chrome",
      description: "A deep teal with advanced metallic chrome finish",
      hex: "#0ABAB5",
      rgb: "rgb(10, 186, 181)",
      hsl: "hsl(178, 90%, 38%)",
      // More complex gradient with multiple color stops
      gradient: `
        linear-gradient(
          135deg, 
          #057773 0%, 
          #0ABAB5 20%, 
          #2DFFF9 50%, 
          #0ABAB5 80%, 
          #057773 100%
        )
      `,
      // CSS for the animated version
      animatedCSS: `
        background: linear-gradient(
          135deg, 
          #057773 0%, 
          #0ABAB5 20%, 
          #2DFFF9 50%, 
          #0ABAB5 80%, 
          #057773 100%
        );
        background-size: 200% 200%;
        animation: shine 3s ease infinite;
        box-shadow: 
          0 5px 15px rgba(10, 186, 181, 0.4),
          inset 0 0 20px rgba(255, 255, 255, 0.5);
      `,
    },
    silver: {
      name: "Enhanced Metallic Silver Chrome",
      description: "A highly reflective silver metallic chrome finish",
      hex: "#C0C0C0",
      rgb: "rgb(192, 192, 192)",
      hsl: "hsl(0, 0%, 75%)",
      // More complex gradient with multiple color stops
      gradient: `
        linear-gradient(
          135deg, 
          #888888 0%, 
          #C0C0C0 20%, 
          #F8F8F8 50%, 
          #C0C0C0 80%, 
          #888888 100%
        )
      `,
      // CSS for the animated version
      animatedCSS: `
        background: linear-gradient(
          135deg, 
          #888888 0%, 
          #C0C0C0 20%, 
          #F8F8F8 50%, 
          #C0C0C0 80%, 
          #888888 100%
        );
        background-size: 200% 200%;
        animation: shine 3s ease infinite;
        box-shadow: 
          0 5px 15px rgba(192, 192, 192, 0.6),
          inset 0 0 20px rgba(255, 255, 255, 0.7);
      `,
    },
  }

  const copyToClipboard = (text: string, color: "teal" | "silver") => {
    navigator.clipboard.writeText(text)
    if (color === "teal") {
      setCopiedTeal(true)
      setTimeout(() => setCopiedTeal(false), 2000)
    } else {
      setCopiedSilver(true)
      setTimeout(() => setCopiedSilver(false), 2000)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">Enhanced Metallic Chrome Effects</h1>

      <style jsx global>{`
        @keyframes shine {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
        
        .metallic-surface {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
        }
        
        .metallic-surface::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 0) 60%
          );
          pointer-events: none;
        }
        
        .metallic-surface::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(
              45deg,
              transparent 40%,
              rgba(255, 255, 255, 0.2) 45%,
              rgba(255, 255, 255, 0.4) 50%,
              rgba(255, 255, 255, 0.2) 55%,
              transparent 60%
            );
          background-size: 200% 200%;
          animation: shine 4s linear infinite;
          pointer-events: none;
        }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Enhanced Teal Chrome Color */}
        <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
          <Tabs defaultValue="static">
            <TabsList className="w-full">
              <TabsTrigger value="static">Static</TabsTrigger>
              <TabsTrigger value="animated">Animated</TabsTrigger>
              <TabsTrigger value="interactive">Interactive</TabsTrigger>
            </TabsList>
            <TabsContent value="static">
              <div
                className="h-48 w-full"
                style={{
                  background: colors.teal.gradient,
                  boxShadow: "inset 0 0 20px rgba(255,255,255,0.4), 0 5px 15px rgba(10, 186, 181, 0.3)",
                }}
              ></div>
            </TabsContent>
            <TabsContent value="animated">
              <div
                className="h-48 w-full"
                style={{
                  backgroundSize: "200% 200%",
                  animation: "shine 3s ease infinite",
                  background: colors.teal.gradient,
                  boxShadow: "inset 0 0 20px rgba(255,255,255,0.4), 0 5px 15px rgba(10, 186, 181, 0.3)",
                }}
              ></div>
            </TabsContent>
            <TabsContent value="interactive">
              <div
                className="h-48 w-full metallic-surface"
                style={{
                  background: colors.teal.gradient,
                  boxShadow: "inset 0 0 20px rgba(255,255,255,0.4), 0 5px 15px rgba(10, 186, 181, 0.3)",
                }}
              ></div>
            </TabsContent>
          </Tabs>

          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">{colors.teal.name}</h2>
            <p className="text-gray-600 dark:text-gray-400">{colors.teal.description}</p>

            <Tabs defaultValue="hex">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="hex">HEX</TabsTrigger>
                <TabsTrigger value="rgb">RGB</TabsTrigger>
                <TabsTrigger value="css">CSS</TabsTrigger>
              </TabsList>
              <TabsContent value="hex" className="flex items-center justify-between mt-2">
                <code className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">{colors.teal.hex}</code>
                <Button variant="ghost" size="sm" onClick={() => copyToClipboard(colors.teal.hex, "teal")}>
                  {copiedTeal ? "Copied!" : <Copy className="h-4 w-4" />}
                </Button>
              </TabsContent>
              <TabsContent value="rgb" className="flex items-center justify-between mt-2">
                <code className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">{colors.teal.rgb}</code>
                <Button variant="ghost" size="sm" onClick={() => copyToClipboard(colors.teal.rgb, "teal")}>
                  {copiedTeal ? "Copied!" : <Copy className="h-4 w-4" />}
                </Button>
              </TabsContent>
              <TabsContent value="css" className="mt-2">
                <div className="relative">
                  <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs overflow-x-auto">
                    {colors.teal.animatedCSS}
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(colors.teal.animatedCSS, "teal")}
                  >
                    {copiedTeal ? "Copied!" : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Enhanced Silver Chrome Color */}
        <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
          <Tabs defaultValue="static">
            <TabsList className="w-full">
              <TabsTrigger value="static">Static</TabsTrigger>
              <TabsTrigger value="animated">Animated</TabsTrigger>
              <TabsTrigger value="interactive">Interactive</TabsTrigger>
            </TabsList>
            <TabsContent value="static">
              <div
                className="h-48 w-full"
                style={{
                  background: colors.silver.gradient,
                  boxShadow: "inset 0 0 20px rgba(255,255,255,0.6), 0 5px 15px rgba(192, 192, 192, 0.4)",
                }}
              ></div>
            </TabsContent>
            <TabsContent value="animated">
              <div
                className="h-48 w-full"
                style={{
                  backgroundSize: "200% 200%",
                  animation: "shine 3s ease infinite",
                  background: colors.silver.gradient,
                  boxShadow: "inset 0 0 20px rgba(255,255,255,0.6), 0 5px 15px rgba(192, 192, 192, 0.4)",
                }}
              ></div>
            </TabsContent>
            <TabsContent value="interactive">
              <div
                className="h-48 w-full metallic-surface"
                style={{
                  background: colors.silver.gradient,
                  boxShadow: "inset 0 0 20px rgba(255,255,255,0.6), 0 5px 15px rgba(192, 192, 192, 0.4)",
                }}
              ></div>
            </TabsContent>
          </Tabs>

          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">{colors.silver.name}</h2>
            <p className="text-gray-600 dark:text-gray-400">{colors.silver.description}</p>

            <Tabs defaultValue="hex">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="hex">HEX</TabsTrigger>
                <TabsTrigger value="rgb">RGB</TabsTrigger>
                <TabsTrigger value="css">CSS</TabsTrigger>
              </TabsList>
              <TabsContent value="hex" className="flex items-center justify-between mt-2">
                <code className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">{colors.silver.hex}</code>
                <Button variant="ghost" size="sm" onClick={() => copyToClipboard(colors.silver.hex, "silver")}>
                  {copiedSilver ? "Copied!" : <Copy className="h-4 w-4" />}
                </Button>
              </TabsContent>
              <TabsContent value="rgb" className="flex items-center justify-between mt-2">
                <code className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">{colors.silver.rgb}</code>
                <Button variant="ghost" size="sm" onClick={() => copyToClipboard(colors.silver.rgb, "silver")}>
                  {copiedSilver ? "Copied!" : <Copy className="h-4 w-4" />}
                </Button>
              </TabsContent>
              <TabsContent value="css" className="mt-2">
                <div className="relative">
                  <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs overflow-x-auto">
                    {colors.silver.animatedCSS}
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(colors.silver.animatedCSS, "silver")}
                  >
                    {copiedSilver ? "Copied!" : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-xl font-semibold">Advanced Metallic Effects</h3>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-gray-500" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">These techniques create the illusion of metallic surfaces on the web</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <p className="mb-4">I've enhanced the metallic appearance using these techniques:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Complex multi-stop gradients that mimic light reflection on metal</li>
          <li>CSS animations that simulate light moving across the surface</li>
          <li>Interactive light reflection that follows your mouse movement</li>
          <li>Layered shadow effects (both inset and drop shadows)</li>
          <li>Pseudo-elements with additional gradient overlays</li>
        </ul>

        <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950 rounded border border-amber-200 dark:border-amber-800">
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <Info className="h-4 w-4" /> Implementation Note
          </h4>
          <p className="text-sm">
            For the best metallic effect on your website, combine these CSS techniques with subtle animations. The
            "Interactive" tab demonstrates a more realistic chrome effect by tracking mouse movement to simulate how
            light reflects off a curved metallic surface.
          </p>
        </div>
      </div>
    </div>
  )
}

