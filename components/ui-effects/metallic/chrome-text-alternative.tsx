"use client"

export default function ChromeTextAlternative() {
  return (
    <section className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Chrome Teal Heading - Alternative Approach */}
          <h1 className="chrome-teal-alt text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Enhance Your Brain Performance
          </h1>

          {/* Chrome Silver Subheading - Alternative Approach */}
          <p className="chrome-silver-alt text-lg sm:text-xl md:text-2xl max-w-3xl font-medium leading-relaxed">
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

      {/* CSS for chrome text effects - alternative approach */}
      <style jsx global>{`
        /* Chrome Teal Text - Alternative */
        .chrome-teal-alt {
          background: #0ABAB5;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          position: relative;
          display: inline-block;
          letter-spacing: -0.5px;
        }
        
        .chrome-teal-alt::before {
          content: attr(data-text);
          content: "Enhance Your Brain Performance";
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(
              0deg,
              #034e4c 0%,
              #057773 15%,
              #0ABAB5 30%,
              #2DFFF9 50%,
              #0ABAB5 70%,
              #057773 85%,
              #034e4c 100%
            );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 
            3px 3px 6px rgba(0, 0, 0, 0.2),
            -1px -1px 1px rgba(255, 255, 255, 0.3);
          filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
        }
        
        .chrome-teal-alt::after {
          content: attr(data-text);
          content: "Enhance Your Brain Performance";
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(
              45deg,
              transparent 45%,
              rgba(255, 255, 255, 0.8) 50%,
              transparent 55%
            );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: chrome-alt-shine 3s ease-in-out infinite;
        }
        
        /* Chrome Silver Text - Alternative */
        .chrome-silver-alt {
          background: #C0C0C0;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          position: relative;
          display: inline-block;
        }
        
        .chrome-silver-alt::before {
          content: attr(data-text);
          content: "Discover the science-backed method that optimizes your brain energy, helping you maintain focus, motivation, and drive to achieve your goals";
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(
              0deg,
              #777777 0%,
              #888888 15%,
              #C0C0C0 30%,
              #F8F8F8 50%,
              #C0C0C0 70%,
              #888888 85%,
              #777777 100%
            );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 
            2px 2px 4px rgba(0, 0, 0, 0.2),
            -1px -1px 1px rgba(255, 255, 255, 0.3);
          filter: drop-shadow(1px 2px 3px rgba(0, 0, 0, 0.3));
        }
        
        .chrome-silver-alt::after {
          content: attr(data-text);
          content: "Discover the science-backed method that optimizes your brain energy, helping you maintain focus, motivation, and drive to achieve your goals";
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(
              45deg,
              transparent 45%,
              rgba(255, 255, 255, 0.8) 50%,
              transparent 55%
            );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: chrome-alt-shine 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        @keyframes chrome-alt-shine {
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
