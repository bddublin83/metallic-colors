"use client"

export default function ThreeDMetallicText() {
  return (
    <section className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* 3D Metallic Teal Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight metallic-teal-3d">
            Enhance Your Brain Performance
          </h1>

          {/* 3D Metallic Silver Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl font-medium leading-relaxed metallic-silver-3d">
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

      {/* CSS for 3D metallic text effects */}
      <style jsx global>{`
        /* 3D Metallic Teal Text */
        .metallic-teal-3d {
          color: #0ABAB5;
          text-shadow:
            0 1px 0 #0aa9a5,
            0 2px 0 #09a19d,
            0 3px 0 #099995,
            0 4px 0 #08908c,
            0 5px 0 #078884,
            0 6px 0 #06807c,
            0 7px 0 #057773,
            0 8px 0 #046f6b,
            0 9px 0 #036763,
            0 10px 10px rgba(0, 0, 0, 0.4);
          position: relative;
          transform: perspective(500px) rotateX(10deg);
          transform-origin: center bottom;
        }
        
        /* Add metallic gradient overlay */
        .metallic-teal-3d::before {
          content: "Enhance Your Brain Performance";
          position: absolute;
          left: 0;
          top: 0;
          background: linear-gradient(
            to bottom,
            #2DFFF9 0%,
            #0ABAB5 50%,
            #057773 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          z-index: 1;
        }
        
        /* Add shine effect */
        .metallic-teal-3d::after {
          content: "Enhance Your Brain Performance";
          position: absolute;
          left: 0;
          top: 0;
          background: linear-gradient(
            45deg,
            transparent 0%,
            transparent 40%,
            rgba(255, 255, 255, 0.6) 50%,
            transparent 60%,
            transparent 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          z-index: 2;
          animation: shine-3d 3s infinite;
          animation-timing-function: ease-in-out;
        }
        
        /* 3D Metallic Silver Text */
        .metallic-silver-3d {
          color: #C0C0C0;
          text-shadow:
            0 1px 0 #b8b8b8,
            0 2px 0 #b0b0b0,
            0 3px 0 #a8a8a8,
            0 4px 0 #a0a0a0,
            0 5px 0 #989898,
            0 6px 0 #909090,
            0 7px 0 #888888,
            0 8px 5px rgba(0, 0, 0, 0.3);
          position: relative;
          transform: perspective(500px) rotateX(5deg);
          transform-origin: center bottom;
        }
        
        /* Add metallic gradient overlay */
        .metallic-silver-3d::before {
          content: "Discover the science-backed method that optimizes your brain energy, helping you maintain focus, motivation, and drive to achieve your goals";
          position: absolute;
          left: 0;
          top: 0;
          background: linear-gradient(
            to bottom,
            #F8F8F8 0%,
            #C0C0C0 50%,
            #888888 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          z-index: 1;
        }
        
        /* Add shine effect */
        .metallic-silver-3d::after {
          content: "Discover the science-backed method that optimizes your brain energy, helping you maintain focus, motivation, and drive to achieve your goals";
          position: absolute;
          left: 0;
          top: 0;
          background: linear-gradient(
            45deg,
            transparent 0%,
            transparent 40%,
            rgba(255, 255, 255, 0.6) 50%,
            transparent 60%,
            transparent 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          z-index: 2;
          animation: shine-3d 3s infinite;
          animation-delay: 1s;
          animation-timing-function: ease-in-out;
        }
        
        @keyframes shine-3d {
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

