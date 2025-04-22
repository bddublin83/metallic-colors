"use client"

export default function CssMetallicText() {
  return (
    <section className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-10">
          {/* Main heading with direct metallic styling */}
          <div className="relative">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              <span className="metallic-teal">Enhance Your Brain Performance</span>
            </h1>
          </div>

          {/* Subheading with direct metallic styling */}
          <div className="relative">
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl font-medium leading-relaxed">
              <span className="metallic-silver">
                Discover the science-backed method that optimizes your brain energy, helping you maintain focus,
                motivation, and drive to achieve your goals
              </span>
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

      {/* CSS for direct metallic styling */}
      <style jsx global>{`
        /* Metallic Teal Text */
        .metallic-teal {
          display: inline-block;
          background: linear-gradient(
            to bottom,
            #034e4c 0%,
            #057773 10%,
            #0ABAB5 20%,
            #2DFFF9 50%,
            #0ABAB5 80%,
            #057773 90%,
            #034e4c 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
          position: relative;
        }
        
        /* Add a shine effect */
        .metallic-teal::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, 0.6) 50%,
            rgba(255, 255, 255, 0) 60%,
            transparent 100%
          );
          background-size: 200% 100%;
          mix-blend-mode: overlay;
          animation: shine 3s infinite linear;
        }
        
        /* Metallic Silver Text */
        .metallic-silver {
          display: inline-block;
          background: linear-gradient(
            to bottom,
            #777777 0%,
            #888888 10%,
            #C0C0C0 20%,
            #F8F8F8 50%,
            #C0C0C0 80%,
            #888888 90%,
            #777777 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.3));
          position: relative;
        }
        
        /* Add a shine effect */
        .metallic-silver::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, 0.6) 50%,
            rgba(255, 255, 255, 0) 60%,
            transparent 100%
          );
          background-size: 200% 100%;
          mix-blend-mode: overlay;
          animation: shine 4s infinite linear;
          animation-delay: 1s;
        }
        
        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </section>
  )
}
