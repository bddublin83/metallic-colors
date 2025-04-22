"use client"

export default function SpaceChrome3DText() {
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
          {/* Enhanced Chrome 3D Teal Heading */}
          <h1 className="space-chrome-teal-3d text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight">
            Enhance Your Brain Performance
          </h1>

          {/* Enhanced Chrome 3D Silver Subheading */}
          <p className="space-chrome-silver-3d text-2xl sm:text-3xl md:text-4xl max-w-4xl font-bold leading-relaxed">
            Discover the science-backed method that optimizes your brain energy, helping you maintain focus, motivation,
            and drive to achieve your goals
          </p>

          {/* 3D Buttons matching the text colors */}
          <div className="flex flex-col sm:flex-row gap-6 mt-12">
            <button className="space-chrome-teal-button px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started
            </button>
            <button className="space-chrome-silver-button px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Image Attribution */}
          <div className="absolute bottom-4 right-4 text-xs text-white opacity-70">
            Background: Bubble Nebula NGC7635 | Credit: ESA/Hubble
          </div>
        </div>
      </div>

      {/* CSS for space chrome 3D text effects */}
      <style jsx global>{`
        /* Space Chrome Teal 3D Text */
        .space-chrome-teal-3d {
          color: #00C5C0;
          position: relative;
          text-shadow:
            0 1px 0 #00b8b3,
            0 2px 0 #00aba6,
            0 3px 0 #009e99,
            0 4px 0 #00918c,
            0 5px 0 #00847f,
            0 6px 1px rgba(0,0,0,.1),
            0 0 5px rgba(0,0,0,.1),
            0 1px 3px rgba(0,0,0,.3),
            0 3px 5px rgba(0,0,0,.2),
            0 5px 10px rgba(0,0,0,.25),
            0 10px 10px rgba(0,0,0,.2),
            0 20px 20px rgba(0,0,0,.15);
          transform: perspective(500px) rotateX(10deg);
          transform-origin: center bottom;
          letter-spacing: -1px;
        }
        
        /* Chrome effect with multiple layers */
        .space-chrome-teal-3d::before {
          content: "Enhance Your Brain Performance";
          position: absolute;
          left: 0;
          top: 0;
          background: linear-gradient(
            to bottom,
            #40FFF9 0%,
            #00D8D3 30%,
            #00C5C0 70%,
            #00B2AD 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          z-index: 1;
        }
        
        /* Chrome highlight effect */
        .space-chrome-teal-3d::after {
          content: "Enhance Your Brain Performance";
          position: absolute;
          left: 0;
          top: 0;
          background: 
            linear-gradient(
              45deg,
              transparent 0%,
              transparent 40%,
              rgba(255, 255, 255, 0.9) 50%,
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
        
        /* Space Chrome Silver 3D Text */
        .space-chrome-silver-3d {
          color: #D0D0D0;
          position: relative;
          text-shadow:
            0 1px 0 #c6c6c6,
            0 2px 0 #bcbcbc,
            0 3px 0 #b2b2b2,
            0 4px 0 #a8a8a8,
            0 5px 0 #9e9e9e,
            0 6px 1px rgba(0,0,0,.1),
            0 0 5px rgba(0,0,0,.1),
            0 1px 3px rgba(0,0,0,.3),
            0 3px 5px rgba(0,0,0,.2),
            0 5px 10px rgba(0,0,0,.25),
            0 10px 10px rgba(0,0,0,.2),
            0 20px 20px rgba(0,0,0,.15);
          transform: perspective(500px) rotateX(5deg);
          transform-origin: center bottom;
          letter-spacing: -0.5px;
        }
        
        /* Chrome effect with multiple layers */
        .space-chrome-silver-3d::before {
          content: "Discover the science-backed method that optimizes your brain energy, helping you maintain focus, motivation, and drive to achieve your goals";
          position: absolute;
          left: 0;
          top: 0;
          background: linear-gradient(
            to bottom,
            #FFFFFF 0%,
            #F0F0F0 30%,
            #D0D0D0 70%,
            #B8B8B8 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          z-index: 1;
        }
        
        /* Chrome highlight effect */
        .space-chrome-silver-3d::after {
          content: "Discover the science-backed method that optimizes your brain energy, helping you maintain focus, motivation, and drive to achieve your goals";
          position: absolute;
          left: 0;
          top: 0;
          background: 
            linear-gradient(
              45deg,
              transparent 0%,
              transparent 40%,
              rgba(255, 255, 255, 0.9) 50%,
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
        
        /* 3D Chrome Teal Button */
        .space-chrome-teal-button {
          background: linear-gradient(
            to bottom,
            #00D8D3 0%,
            #00C5C0 50%,
            #00B2AD 100%
          );
          color: white;
          position: relative;
          transform: perspective(500px) rotateX(5deg);
          transform-origin: center bottom;
          transition: all 0.3s ease;
          border: none;
          box-shadow:
            0 1px 0 #00b8b3,
            0 2px 0 #00aba6,
            0 3px 0 #009e99,
            0 4px 0 #00918c,
            0 5px 0 #00847f,
            0 6px 1px rgba(0,0,0,.1),
            0 0 5px rgba(0,0,0,.1),
            0 1px 3px rgba(0,0,0,.3),
            0 3px 5px rgba(0,0,0,.2),
            0 5px 10px rgba(0,0,0,.25);
        }
        
        .space-chrome-teal-button:hover {
          transform: perspective(500px) rotateX(5deg) translateY(-2px);
          box-shadow:
            0 1px 0 #00b8b3,
            0 2px 0 #00aba6,
            0 3px 0 #009e99,
            0 4px 0 #00918c,
            0 5px 0 #00847f,
            0 6px 0 #007a75,
            0 7px 0 #006d68,
            0 8px 1px rgba(0,0,0,.1),
            0 0 5px rgba(0,0,0,.1),
            0 1px 3px rgba(0,0,0,.3),
            0 3px 5px rgba(0,0,0,.2),
            0 5px 10px rgba(0,0,0,.25),
            0 10px 10px rgba(0,0,0,.2);
        }
        
        .space-chrome-teal-button:active {
          transform: perspective(500px) rotateX(5deg) translateY(2px);
          box-shadow:
            0 1px 0 #00b8b3,
            0 2px 0 #00aba6,
            0 3px 1px rgba(0,0,0,.1),
            0 0 5px rgba(0,0,0,.1),
            0 1px 3px rgba(0,0,0,.3);
        }
        
        /* 3D Chrome Silver Button */
        .space-chrome-silver-button {
          background: linear-gradient(
            to bottom,
            #F0F0F0 0%,
            #D0D0D0 50%,
            #B8B8B8 100%
          );
          color: #333;
          position: relative;
          transform: perspective(500px) rotateX(5deg);
          transform-origin: center bottom;
          transition: all 0.3s ease;
          border: none;
          box-shadow:
            0 1px 0 #c6c6c6,
            0 2px 0 #bcbcbc,
            0 3px 0 #b2b2b2,
            0 4px 0 #a8a8a8,
            0 5px 0 #9e9e9e,
            0 6px 1px rgba(0,0,0,.1),
            0 0 5px rgba(0,0,0,.1),
            0 1px 3px rgba(0,0,0,.3),
            0 3px 5px rgba(0,0,0,.2),
            0 5px 10px rgba(0,0,0,.25);
        }
        
        .space-chrome-silver-button:hover {
          transform: perspective(500px) rotateX(5deg) translateY(-2px);
          box-shadow:
            0 1px 0 #c6c6c6,
            0 2px 0 #bcbcbc,
            0 3px 0 #b2b2b2,
            0 4px 0 #a8a8a8,
            0 5px 0 #9e9e9e,
            0 6px 0 #949494,
            0 7px 0 #8a8a8a,
            0 8px 1px rgba(0,0,0,.1),
            0 0 5px rgba(0,0,0,.1),
            0 1px 3px rgba(0,0,0,.3),
            0 3px 5px rgba(0,0,0,.2),
            0 5px 10px rgba(0,0,0,.25),
            0 10px 10px rgba(0,0,0,.2);
        }
        
        .space-chrome-silver-button:active {
          transform: perspective(500px) rotateX(5deg) translateY(2px);
          box-shadow:
            0 1px 0 #c6c6c6,
            0 2px 0 #bcbcbc,
            0 3px 1px rgba(0,0,0,.1),
            0 0 5px rgba(0,0,0,.1),
            0 1px 3px rgba(0,0,0,.3);
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

