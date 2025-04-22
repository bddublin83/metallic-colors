"use client"

import { useEffect, useState, useRef } from "react"

export default function SvgMetallicText() {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 600 })
  const containerRef = useRef<HTMLDivElement>(null)

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  return (
    <section className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div ref={containerRef} className="container mx-auto max-w-5xl relative">
        {/* SVG for metallic text effects */}
        <div className="flex flex-col items-center text-center">
          <div className="w-full overflow-hidden">
            <svg
              width={dimensions.width}
              height="auto"
              viewBox={`0 0 ${dimensions.width} 300`}
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Definitions for gradients and filters */}
              <defs>
                {/* Teal Chrome Gradient */}
                <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#034e4c" />
                  <stop offset="15%" stopColor="#057773" />
                  <stop offset="30%" stopColor="#0ABAB5" />
                  <stop offset="50%" stopColor="#2DFFF9" />
                  <stop offset="70%" stopColor="#0ABAB5" />
                  <stop offset="85%" stopColor="#057773" />
                  <stop offset="100%" stopColor="#034e4c" />

                  {/* Animate the gradient */}
                  <animate attributeName="x1" from="0%" to="100%" dur="5s" repeatCount="indefinite" />
                  <animate attributeName="y1" from="0%" to="100%" dur="5s" repeatCount="indefinite" />
                  <animate attributeName="x2" from="100%" to="0%" dur="5s" repeatCount="indefinite" />
                  <animate attributeName="y2" from="100%" to="0%" dur="5s" repeatCount="indefinite" />
                </linearGradient>

                {/* Teal Chrome Highlight */}
                <linearGradient id="tealHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="40%" stopColor="transparent" />
                  <stop offset="45%" stopColor="rgba(255,255,255,0.7)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.9)" />
                  <stop offset="55%" stopColor="rgba(255,255,255,0.7)" />
                  <stop offset="60%" stopColor="transparent" />
                  <stop offset="100%" stopColor="transparent" />

                  {/* Animate the highlight */}
                  <animate attributeName="x1" from="-100%" to="200%" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="x2" from="0%" to="300%" dur="3s" repeatCount="indefinite" />
                </linearGradient>

                {/* Silver Chrome Gradient */}
                <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#777777" />
                  <stop offset="15%" stopColor="#888888" />
                  <stop offset="30%" stopColor="#C0C0C0" />
                  <stop offset="50%" stopColor="#F8F8F8" />
                  <stop offset="70%" stopColor="#C0C0C0" />
                  <stop offset="85%" stopColor="#888888" />
                  <stop offset="100%" stopColor="#777777" />

                  {/* Animate the gradient */}
                  <animate attributeName="x1" from="0%" to="100%" dur="5s" repeatCount="indefinite" />
                  <animate attributeName="y1" from="0%" to="100%" dur="5s" repeatCount="indefinite" />
                  <animate attributeName="x2" from="100%" to="0%" dur="5s" repeatCount="indefinite" />
                  <animate attributeName="y2" from="100%" to="0%" dur="5s" repeatCount="indefinite" />
                </linearGradient>

                {/* Silver Chrome Highlight */}
                <linearGradient id="silverHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="40%" stopColor="transparent" />
                  <stop offset="45%" stopColor="rgba(255,255,255,0.7)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.9)" />
                  <stop offset="55%" stopColor="rgba(255,255,255,0.7)" />
                  <stop offset="60%" stopColor="transparent" />
                  <stop offset="100%" stopColor="transparent" />

                  {/* Animate the highlight with delay */}
                  <animate attributeName="x1" from="-100%" to="200%" dur="4s" repeatCount="indefinite" begin="1s" />
                  <animate attributeName="x2" from="0%" to="300%" dur="4s" repeatCount="indefinite" begin="1s" />
                </linearGradient>

                {/* Metallic filter effects */}
                <filter id="metallicFilter" x="-10%" y="-10%" width="120%" height="120%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
                  <feSpecularLighting
                    in="blur"
                    surfaceScale="5"
                    specularConstant="0.75"
                    specularExponent="20"
                    lightingColor="#FFFFFF"
                    result="specular"
                  >
                    <fePointLight x="50%" y="50%" z="200" />
                  </feSpecularLighting>
                  <feComposite in="specular" in2="SourceAlpha" operator="in" result="specular2" />
                  <feComposite
                    in="SourceGraphic"
                    in2="specular2"
                    operator="arithmetic"
                    k1="0"
                    k2="1"
                    k3="1"
                    k4="0"
                    result="out"
                  />
                  <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.3" />
                </filter>
              </defs>

              {/* Main heading with teal metallic effect */}
              <text
                x="50%"
                y="120"
                textAnchor="middle"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
                style={{
                  fontSize: "3.5rem",
                  fontWeight: "bold",
                  filter: "url(#metallicFilter)",
                }}
                fill="url(#tealGradient)"
              >
                Enhance Your Brain Performance
              </text>

              {/* Highlight overlay for teal text */}
              <text
                x="50%"
                y="120"
                textAnchor="middle"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
                style={{
                  fontSize: "3.5rem",
                  fontWeight: "bold",
                  mixBlendMode: "overlay",
                }}
                fill="url(#tealHighlight)"
                opacity="0.7"
              >
                Enhance Your Brain Performance
              </text>

              {/* Subheading with silver metallic effect - first line */}
              <text
                x="50%"
                y="180"
                textAnchor="middle"
                className="text-lg sm:text-xl md:text-2xl font-medium"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "500",
                  filter: "url(#metallicFilter)",
                }}
                fill="url(#silverGradient)"
              >
                Discover the science-backed method that optimizes your brain energy,
              </text>

              {/* Subheading with silver metallic effect - second line */}
              <text
                x="50%"
                y="210"
                textAnchor="middle"
                className="text-lg sm:text-xl md:text-2xl font-medium"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "500",
                  filter: "url(#metallicFilter)",
                }}
                fill="url(#silverGradient)"
              >
                helping you maintain focus, motivation, and drive to achieve your goals
              </text>

              {/* Highlight overlay for silver text - first line */}
              <text
                x="50%"
                y="180"
                textAnchor="middle"
                className="text-lg sm:text-xl md:text-2xl font-medium"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "500",
                  mixBlendMode: "overlay",
                }}
                fill="url(#silverHighlight)"
                opacity="0.7"
              >
                Discover the science-backed method that optimizes your brain energy,
              </text>

              {/* Highlight overlay for silver text - second line */}
              <text
                x="50%"
                y="210"
                textAnchor="middle"
                className="text-lg sm:text-xl md:text-2xl font-medium"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "500",
                  mixBlendMode: "overlay",
                }}
                fill="url(#silverHighlight)"
                opacity="0.7"
              >
                helping you maintain focus, motivation, and drive to achieve your goals
              </text>
            </svg>
          </div>

          {/* Optional CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-16">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#057773] via-[#0ABAB5] to-[#2DFFF9] text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-full bg-transparent border-2 border-[#C0C0C0] text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
