"use client"

export default function SimpleMetallicHero() {
  return (
    <section className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-10">
          {/* Main heading with simple metallic teal styling */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="simple-metallic-teal">Enhance Your Brain Performance</span>
          </h1>

          {/* Subheading with simple metallic silver styling */}
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl font-medium leading-relaxed">
            <span className="simple-metallic-silver">
              Discover the science-backed method that optimizes your brain energy, helping you maintain focus,
              motivation, and drive to achieve your goals
            </span>
          </p>

          {/* Optional CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="px-8 py-3 rounded-full bg-[#0ABAB5] text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-full bg-transparent border-2 border-[#C0C0C0] text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Simple CSS for metallic styling */}
      <style jsx global>{`
        /* Simple Metallic Teal Text */
        .simple-metallic-teal {
          background: linear-gradient(
            to bottom,
            #0ABAB5 0%,
            #2DFFF9 50%,
            #0ABAB5 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          position: relative;
          display: inline-block;
        }
        
        /* Simple shine effect */
        .simple-metallic-teal::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.8) 50%,
            transparent 100%
          );
          animation: simple-shine 3s infinite;
          animation-timing-function: ease-in-out;
        }
        
        /* Simple Metallic Silver Text */
        .simple-metallic-silver {
          background: linear-gradient(
            to bottom,
            #A8A8A8 0%,
            #E8E8E8 50%,
            #A8A8A8 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
          position: relative;
          display: inline-block;
        }
        
        /* Simple shine effect */
        .simple-metallic-silver::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.8) 50%,
            transparent 100%
          );
          animation: simple-shine 3s infinite;
          animation-delay: 1s;
          animation-timing-function: ease-in-out;
        }
        
        @keyframes simple-shine {
          0% {
            left: -100%;
          }
          100% {
            left: 200%;
          }
        }
      `}</style>
    </section>
  )
}

