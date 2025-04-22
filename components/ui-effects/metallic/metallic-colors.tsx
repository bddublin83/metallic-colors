"use client"

import { useState } from "react"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MetallicColors() {
  const [copiedTeal, setCopiedTeal] = useState(false)
  const [copiedSilver, setCopiedSilver] = useState(false)

  const colors = {
    teal: {
      name: "Metallic Teal Chrome",
      description: "A deep teal with metallic chrome finish",
      hex: "#0ABAB5",
      rgb: "rgb(10, 186, 181)",
      hsl: "hsl(178, 90%, 38%)",
      gradient: "linear-gradient(135deg, #0ABAB5 0%, #2DFFF9 50%, #0ABAB5 100%)",
    },
    silver: {
      name: "Metallic Silver Chrome",
      description: "A shiny silver metallic chrome finish",
      hex: "#C0C0C0",
      rgb: "rgb(192, 192, 192)",
      hsl: "hsl(0, 0%, 75%)",
      gradient: "linear-gradient(135deg, #A8A8A8 0%, #E8E8E8 50%, #A8A8A8 100%)",
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
      <h1 className="text-3xl font-bold text-center mb-8">Metallic Chrome Colors</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Teal Chrome Color */}
        <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
          <div
            className="h-48 w-full"
            style={{
              background: colors.teal.gradient,
              boxShadow: "inset 0 0 20px rgba(255,255,255,0.4)",
            }}
          ></div>
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">{colors.teal.name}</h2>
            <p className="text-gray-600 dark:text-gray-400">{colors.teal.description}</p>

            <Tabs defaultValue="hex">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="hex">HEX</TabsTrigger>
                <TabsTrigger value="rgb">RGB</TabsTrigger>
                <TabsTrigger value="hsl">HSL</TabsTrigger>
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
              <TabsContent value="hsl" className="flex items-center justify-between mt-2">
                <code className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">{colors.teal.hsl}</code>
                <Button variant="ghost" size="sm" onClick={() => copyToClipboard(colors.teal.hsl, "teal")}>
                  {copiedTeal ? "Copied!" : <Copy className="h-4 w-4" />}
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Silver Chrome Color */}
        <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
          <div
            className="h-48 w-full"
            style={{
              background: colors.silver.gradient,
              boxShadow: "inset 0 0 20px rgba(255,255,255,0.4)",
            }}
          ></div>
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">{colors.silver.name}</h2>
            <p className="text-gray-600 dark:text-gray-400">{colors.silver.description}</p>

            <Tabs defaultValue="hex">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="hex">HEX</TabsTrigger>
                <TabsTrigger value="rgb">RGB</TabsTrigger>
                <TabsTrigger value="hsl">HSL</TabsTrigger>
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
              <TabsContent value="hsl" className="flex items-center justify-between mt-2">
                <code className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">{colors.silver.hsl}</code>
                <Button variant="ghost" size="sm" onClick={() => copyToClipboard(colors.silver.hsl, "silver")}>
                  {copiedSilver ? "Copied!" : <Copy className="h-4 w-4" />}
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Creating Metallic Effects on the Web</h3>
        <p className="mb-4">
          To create a more realistic metallic/chrome effect on your website, consider these techniques:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use gradients instead of flat colors to simulate the light reflection on metallic surfaces</li>
          <li>Add subtle shadows and highlights with CSS</li>
          <li>Consider using CSS filters like brightness and contrast</li>
          <li>For advanced effects, explore CSS variables to create dynamic color changes on hover/scroll</li>
        </ul>
      </div>
    </div>
  )
}

