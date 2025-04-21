"use client"

export default function Chrome3DText() {
  return (
    <section className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Chrome 3D Teal Heading */}
          <h1 className="chrome-teal-3d text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Enhance Your Brain Performance
          </h1>

          {/* Chrome 3D Silver Subheading */}
          <p className="chrome-silver-3d text-lg sm:text-xl md:text-2xl max-w-3xl font-medium leading-relaxed">
            Discover the science-backed method that optimizes your brain energy, helping you maintain focus, motivation,
            and drive to achieve your goals
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

      {/* CSS for chrome 3D text effects */}
      <style jsx global>{`
        /* Chrome Teal 3D Text */
        .chrome-teal-3d {
          color: #057773;
          position: relative;
          text-shadow:
            0 1px 0 #046b67,
            0 2px 0 #035f5b,
            0 3px 0 #02534f,
            0 4px 0 #014743,
            0 5px 0 #003b37,
            0 6px 1px rgba(0,0,0,.1),
            0 0 5px rgba(0,0,0,.1),
            0 1px 3px rgba(0,0,0,.3),
            0 3px 5px rgba(0,0,0,.2),
            0 5px 10px rgba(0,0,0,.25),
            0 10px 10px rgba(0,0,0,.2),
            0 20px 20px rgba(0,0,0,.15);
          transform: perspective(500px) rotateX(10deg);
          transform-origin: center bottom;
        }
        
        /* Chrome effect with multiple layers */
        .chrome-teal-3d::before {
          content: "Enhance Your Brain Performance";
          position: absolute;
          left: 0;
          top: 0;
          background: linear-gradient(
            to bottom,
            #2DFFF9 0%,
            #0ABAB5 30%,
            #057773 70%,
            #034e4c 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          z-index: 1;
        }
        
        /* Chrome highlight effect */
        .chrome-teal-3d::after {
          content: "Enhance Your Brain Performance";
          position: absolute;
          left: 0;
          top: 0;
          background: 
            linear-gradient(
              45deg,
              transparent 0%,
              transparent 40%,
              rgba(255, 255, 255, 0.8) 50%,
              transparent 60%,
              transparent 100%
            );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          z-index: 2;
          animation: chrome-shine 3s infinite;
          animation-timing-function: ease-in-out;
        }
        
        /* Chrome Silver 3D Text */
        .chrome-silver-3d {
          color: #888888;
          position: relative;
          text-shadow:
            0 1px 0 #7e7e7e,
            0 2px 0 #747474,
            0 3px 0 #6a6a6a,
            0 4px 0 #606060,
            0 5px 0 #565656,
            0 6px 1px rgba(0,0,0,.1),
            0 0 5px rgba(0,0,0,.1),
            0 1px 3px rgba(0,0,0,.3),
            0 3px 5px rgba(0,0,0,.2),
            0 5px 10px rgba(0,0,0,.25),
            0 10px 10px rgba(0,0,0,.2),
            0 20px 20px rgba(0,0,0,.15);
          transform: perspective(500px) rotateX(5deg);
          transform-origin: center bottom;
        }
        
        /* Chrome effect with multiple layers */
        .chrome-silver-3d::before {
          content: "Discover the science-backed method that optimizes your brain energy, helping you maintain focus, motivation, and drive to achieve your goals";
          position: absolute;
          left: 0;
          top: 0;
          background: linear-gradient(
            to bottom,
            #F8F8F8 0%,
            #E8E8E8 30%,
            #C0C0C0 70%,
            #A8A8A8 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          z-index: 1;
        }
        
        /* Chrome highlight effect */
        .chrome-silver-3d::after {
          content: "Discover the science-backed method that optimizes your brain energy, helping you maintain focus, motivation, and drive to achieve your goals";
          position: absolute;
          left: 0;
          top: 0;
          background: 
            linear-gradient(
              45deg,
              transparent 0%,
              transparent 40%,
              rgba(255, 255, 255, 0.8) 50%,
              transparent 60%,
              transparent 100%
            );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          z-index: 2;
          animation: chrome-shine 3s infinite;
          animation-delay: 1s;
          animation-timing-function: ease-in-out;
        }
        
        @keyframes chrome-shine {
          0%, 100% {
            background-position: -100% 0;
          }
          50% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </section>
  )
}

