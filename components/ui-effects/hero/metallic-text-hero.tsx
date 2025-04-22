"use client"

export default function MetallicTextHero() {
  return (
    <section className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-10">
          {/* Main heading with direct metallic teal styling */}
          <h1 className="metallic-teal-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Enhance Your Brain Performance
          </h1>

          {/* Subheading with direct metallic silver styling */}
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

      {/* CSS for direct metallic text effects */}
      <style jsx global>{`
        /* Metallic Teal Heading */
        .metallic-teal-heading {
          position: relative;
          color: #0ABAB5;
          letter-spacing: -0.5px;
          text-shadow: 
            0 0 5px rgba(10, 186, 181, 0.5),
            0 0 10px rgba(10, 186, 181, 0.2),
            0 2px 2px rgba(0, 0, 0, 0.5);
        }
        
        /* Create the metallic effect with a pseudo-element */
        .metallic-teal-heading::before {
          content: "Enhance Your Brain Performance";
          position: absolute;
          left: 0;
          top: 0;
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
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          animation: teal-gradient-shift 5s linear infinite;
          z-index: 1;
        }
        
        /* Create the moving highlight with another pseudo-element */
        .metallic-teal-heading::after {
          content: "Enhance Your Brain Performance";
          position: absolute;
          left: 0;
          top: 0;
          background-image: linear-gradient(
            90deg,
            transparent 0%,
            transparent 40%,
            rgba(255, 255, 255, 0.8) 45%,
            rgba(255, 255, 255, 0.9) 50%,
            rgba(255, 255, 255, 0.8) 55%,
            transparent 60%,
            transparent 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          animation: shine-effect 3s linear infinite;
          z-index: 2;
        }
        
        /* Metallic Silver Text */
        .metallic-silver-text {
          position: relative;
          color: #C0C0C0;
          text-shadow: 
            0 0 5px rgba(192, 192, 192, 0.5),
            0 0 10px rgba(192, 192, 192, 0.2),
            0 1px 2px rgba(0, 0, 0, 0.5);
        }
        
        /* Create the metallic effect with a pseudo-element */
        .metallic-silver-text::before {
          content: "Discover the science-backed method that optimizes your brain energy, helping you maintain focus, motivation, and drive to achieve your goals";
          position: absolute;
          left: 0;
          top: 0;
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
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          animation: silver-gradient-shift 5s linear infinite;
          z-index: 1;
        }
        
        /* Create the moving highlight with another pseudo-element */
        .metallic-silver-text::after {
          content: "Discover the science-backed method that optimizes your brain energy, helping you maintain focus, motivation, and drive to achieve your goals";
          position: absolute;
          left: 0;
          top: 0;
          background-image: linear-gradient(
            90deg,
            transparent 0%,
            transparent 40%,
            rgba(255, 255, 255, 0.7) 45%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0.7) 55%,
            transparent 60%,
            transparent 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          animation: shine-effect 4s linear infinite;
          animation-delay: 1s;
          z-index: 2;
        }
        
        /* Animation for the shine effect */
        @keyframes shine-effect {
          0% {
            background-position: -100% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        
        /* Animation for the teal gradient shift */
        @keyframes teal-gradient-shift {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        
        /* Animation for the silver gradient shift */
        @keyframes silver-gradient-shift {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </section>
  )
}

