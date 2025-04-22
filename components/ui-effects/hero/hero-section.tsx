"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
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

  return (
    <section className="w-full min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div
        className="absolute inset-0 z-0 bg-gray-50 dark:bg-gray-950"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(10, 186, 181, 0.05) 0%, transparent 60%)`,
        }}
      />

      {/* Animated light beam effect */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="light-beam"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Main heading with teal metallic effect */}
          <h1 className="metallic-teal-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Enhance Your Brain Performance
          </h1>

          {/* Subheading with silver metallic effect */}
          <p className="metallic-silver-text text-lg sm:text-xl md:text-2xl max-w-3xl font-medium leading-relaxed">
            Discover the science-backed method that optimizes your brain energy, helping you maintain focus, motivation,
            and drive to achieve your goals
          </p>

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

      {/* CSS for metallic text effects */}
      <style jsx global>{`
        /* Teal metallic text effect */
        .metallic-teal-text {
          background: linear-gradient(
            135deg, 
            #057773 0%, 
            #0ABAB5 25%, 
            #2DFFF9 50%, 
            #0ABAB5 75%, 
            #057773 100%
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          text-shadow: 
            0px 0px 1px rgba(10, 186, 181, 0.5),
            2px 2px 3px rgba(0, 0, 0, 0.2);
          animation: shine 3s linear infinite;
          position: relative;
        }
        
        .metallic-teal-text::after {
          content: "Enhance Your Brain Performance";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            transparent 45%,
            rgba(255, 255, 255, 0.8) 50%,
            transparent 55%
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shine 3s linear infinite;
          animation-delay: 0.5s;
        }
        
        /* Silver metallic text effect */
        .metallic-silver-text {
          background: linear-gradient(
            135deg, 
            #888888 0%, 
            #C0C0C0 25%, 
            #F8F8F8 50%, 
            #C0C0C0 75%, 
            #888888 100%
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          text-shadow: 
            0px 0px 1px rgba(192, 192, 192, 0.5),
            1px 1px 2px rgba(0, 0, 0, 0.2);
          animation: shine 4s linear infinite;
        }
        
        /* Animation for the metallic shine effect */
        @keyframes shine {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        
        /* Light beam animation */
        .light-beam {
          position: absolute;
          top: -100%;
          left: -100%;
          right: -100%;
          bottom: -100%;
          background: linear-gradient(
            45deg,
            transparent 0%,
            transparent 45%,
            rgba(255, 255, 255, 0.1) 49%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0.1) 51%,
            transparent 55%,
            transparent 100%
          );
          background-size: 200% 200%;
          animation: beam 8s linear infinite;
        }
        
        @keyframes beam {
          0% {
            background-position: 200% 200%;
          }
          100% {
            background-position: -200% -200%;
          }
        }
      `}</style>
    </section>
  )
}

