"use client"

import { useState, useEffect } from "react"

export default function ClassicMetallicHero() {
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
    <section className="w-full min-h-[100vh] flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Bubble Nebula Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://esahubble.org/media/archives/images/large/heic1608a.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)",
        }}
      ></div>

      {/* Dark overlay to improve text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Content */}
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-16">
          {/* Main heading with classic metallic teal styling */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight classic-metallic-teal">
            Enhance Your Brain Performance
          </h1>

          {/* Subheading with classic metallic silver styling */}
          <p className="text-2xl sm:text-3xl md:text-4xl max-w-4xl font-bold leading-relaxed classic-metallic-silver">
            Discover the science-backed method that optimizes your brain energy, helping you maintain focus, motivation,
            and drive to achieve your goals
          </p>

          {/* Buttons with classic metallic styling */}
          <div className="flex flex-col sm:flex-row gap-6 mt-12">
            <button className="classic-metallic-teal-button px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started
            </button>
            <button className="classic-metallic-silver-button px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Image Attribution */}
          <div className="absolute bottom-4 right-4 text-xs text-white opacity-70">
            Background: Bubble Nebula NGC7635 | Credit: ESA/Hubble
          </div>
        </div>
      </div>

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
        
        /* Classic Metallic Teal Text */
        .classic-metallic-teal {
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
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.5),
            0 0 10px rgba(10, 186, 181, 0.5);
          filter: drop-shadow(0 5px 15px rgba(10, 186, 181, 0.4));
        }
        
        /* Classic Metallic Silver Text */
        .classic-metallic-silver {
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
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.5),
            0 0 10px rgba(192, 192, 192, 0.5);
          filter: drop-shadow(0 5px 15px rgba(192, 192, 192, 0.4));
        }
        
        /* Classic Metallic Teal Button */
        .classic-metallic-teal-button {
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
          color: white;
          box-shadow: 
            0 5px 15px rgba(10, 186, 181, 0.4),
            inset 0 0 20px rgba(255, 255, 255, 0.5);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
          border: none;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .classic-metallic-teal-button:hover {
          transform: translateY(-3px);
          box-shadow: 
            0 8px 25px rgba(10, 186, 181, 0.6),
            inset 0 0 20px rgba(255, 255, 255, 0.5);
        }
        
        .classic-metallic-teal-button:active {
          transform: translateY(1px);
          box-shadow: 
            0 2px 10px rgba(10, 186, 181, 0.4),
            inset 0 0 20px rgba(255, 255, 255, 0.5);
        }
        
        /* Classic Metallic Silver Button */
        .classic-metallic-silver-button {
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
          color: #333;
          box-shadow: 
            0 5px 15px rgba(192, 192, 192, 0.6),
            inset 0 0 20px rgba(255, 255, 255, 0.7);
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
          border: none;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .classic-metallic-silver-button:hover {
          transform: translateY(-3px);
          box-shadow: 
            0 8px 25px rgba(192, 192, 192, 0.8),
            inset 0 0 20px rgba(255, 255, 255, 0.7);
        }
        
        .classic-metallic-silver-button:active {
          transform: translateY(1px);
          box-shadow: 
            0 2px 10px rgba(192, 192, 192, 0.6),
            inset 0 0 20px rgba(255, 255, 255, 0.7);
        }
        
        /* Metallic surface reflection effect */
        .metallic-surface {
          position: relative;
          overflow: hidden;
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
    </section>
  )
}

