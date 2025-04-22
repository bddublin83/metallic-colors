"use client"

import { useEffect, useState, useRef } from "react"

export default function EnhancedHeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  // Track mouse position for dynamic lighting effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setMousePosition({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div ref={containerRef} className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-10">
          {/* Main heading with enhanced teal metallic effect */}
          <div className="relative">
            {/* Base layer */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Enhance Your Brain Performance
            </h1>

            {/* Metallic teal overlay */}
            <h1
              className="absolute top-0 left-0 right-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight enhanced-metallic-teal"
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
              }}
            >
              Enhance Your Brain Performance
            </h1>

            {/* Highlight overlay */}
            <h1
              className="absolute top-0 left-0 right-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight teal-highlight"
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
                opacity: 0.7,
              }}
            >
              Enhance Your Brain Performance
            </h1>
          </div>

          {/* Subheading with enhanced silver metallic effect */}
          <div className="relative">
            {/* Base layer */}
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl font-medium leading-relaxed">
              Discover the science-backed method that optimizes your brain energy, helping you maintain focus,
              motivation, and drive to achieve your goals
            </p>

            {/* Metallic silver overlay */}
            <p
              className="absolute top-0 left-0 right-0 text-lg sm:text-xl md:text-2xl max-w-3xl font-medium leading-relaxed enhanced-metallic-silver"
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
              }}
            >
              Discover the science-backed method that optimizes your brain energy, helping you maintain focus,
              motivation, and drive to achieve your goals
            </p>

            {/* Highlight overlay */}
            <p
              className="absolute top-0 left-0 right-0 text-lg sm:text-xl md:text-2xl max-w-3xl font-medium leading-relaxed silver-highlight"
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
                opacity: 0.7,
              }}
            >
              Discover the science-backed method that optimizes your brain energy, helping you maintain focus,
              motivation, and drive to achieve your goals
            </p>
          </div>

          {/* Optional CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#057773] via-[#0ABAB5] to-[#2DFFF9] text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-full bg-transparent border-2 border-[#C0C0C0] text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* CSS for enhanced metallic text effects */}
      <style jsx global>{`
        /* Enhanced Teal metallic text effect */
        .enhanced-metallic-teal {
          background-image: linear-gradient(
            135deg, 
            #034e4c 0%, 
            #057773 15%, 
            #0ABAB5 30%, 
            #2DFFF9 50%, 
            #0ABAB5 70%, 
            #057773 85%, 
            #034e4c 100%
          );
          text-shadow: 
            0 0 1px rgba(45, 255, 249, 0.5),
            0 0 2px rgba(10, 186, 181, 0.3),
            0 1px 1px rgba(0, 0, 0, 0.5),
            0 2px 2px rgba(0, 0, 0, 0.3);
          filter: drop-shadow(0 0 2px rgba(10, 186, 181, 0.4));
        }
        
        .teal-highlight {
          background-image: linear-gradient(
            45deg,
            transparent 0%,
            transparent 40%,
            rgba(255, 255, 255, 0.8) 45%,
            rgba(255, 255, 255, 0.9) 50%,
            rgba(255, 255, 255, 0.8) 55%,
            transparent 60%,
            transparent 100%
          );
          background-size: 250% 100%;
          animation: shine-effect 3s linear infinite;
        }
        
        /* Enhanced Silver metallic text effect */
        .enhanced-metallic-silver {
          background-image: linear-gradient(
            135deg, 
            #777777 0%, 
            #888888 15%, 
            #C0C0C0 30%, 
            #F8F8F8 50%, 
            #C0C0C0 70%, 
            #888888 85%, 
            #777777 100%
          );
          text-shadow: 
            0 0 1px rgba(248, 248, 248, 0.5),
            0 0 2px rgba(192, 192, 192, 0.3),
            0 1px 1px rgba(0, 0, 0, 0.5),
            0 1px 2px rgba(0, 0, 0, 0.3);
          filter: drop-shadow(0 0 2px rgba(192, 192, 192, 0.4));
        }
        
        .silver-highlight {
          background-image: linear-gradient(
            45deg,
            transparent 0%,
            transparent 40%,
            rgba(255, 255, 255, 0.7) 45%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0.7) 55%,
            transparent 60%,
            transparent 100%
          );
          background-size: 250% 100%;
          animation: shine-effect 4s linear infinite;
          animation-delay: 1s;
        }
        
        /* Animation for the shine effect */
        @keyframes shine-effect {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 250% center;
          }
        }
        
        /* Ensure the base text is hidden but maintains layout */
        h1, p {
          color: transparent;
        }
      `}</style>
    </section>
  )
}

