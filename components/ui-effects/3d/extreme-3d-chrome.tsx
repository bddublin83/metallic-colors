"use client"

export default function Extreme3DChrome() {
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
          {/* Extreme 3D Chrome Teal Heading */}
          <div className="extreme-3d-wrapper">
            <h1 className="extreme-chrome-teal text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight">
              Enhance Your Brain Performance
            </h1>
          </div>

          {/* Extreme 3D Chrome Silver Subheading */}
          <div className="extreme-3d-wrapper">
            <p className="extreme-chrome-silver text-2xl sm:text-3xl md:text-4xl max-w-4xl font-bold leading-relaxed">
              Discover the science-backed method that optimizes your brain energy, helping you maintain focus,
              motivation, and drive to achieve your goals
            </p>
          </div>

          {/* Extreme 3D Chrome Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mt-12">
            <div className="extreme-button-wrapper">
              <button className="extreme-chrome-teal-button px-10 py-4 rounded-full text-xl font-bold">
                Get Started
              </button>
            </div>
            <div className="extreme-button-wrapper">
              <button className="extreme-chrome-silver-button px-10 py-4 rounded-full text-xl font-bold">
                Learn More
              </button>
            </div>
          </div>

          {/* Image Attribution */}
          <div className="absolute bottom-4 right-4 text-xs text-white opacity-70">
            Background: Bubble Nebula NGC7635 | Credit: ESA/Hubble
          </div>
        </div>
      </div>

      {/* CSS for extreme 3D chrome effects */}
      <style jsx global>{`
        .extreme-3d-wrapper {
          position: relative;
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        
        /* Extreme Chrome Teal Text */
        .extreme-chrome-teal {
          position: relative;
          display: inline-block;
          color: transparent;
          transform: perspective(1000px) rotateX(25deg) translateZ(20px);
          transform-style: preserve-3d;
          letter-spacing: -1px;
        }
        
        .extreme-chrome-teal::before {
          content: "Enhance Your Brain Performance";
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            #80FFF9 0%,
            #40FFF9 10%,
            #00F5F0 20%,
            #00E6E1 30%,
            #00D8D3 40%,
            #00C5C0 50%,
            #00B2AD 60%,
            #009F9A 70%,
            #008C87 80%,
            #007974 90%,
            #00665F 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          transform: translateZ(0px);
          filter: drop-shadow(
            0 1px 0 #00d8d3)
            drop-shadow(0 2px 0 #00cbc6)
            drop-shadow(0 3px 0 #00beb9)
            drop-shadow(0 4px 0 #00b1ac)
            drop-shadow(0 5px 0 #00a49f)
            drop-shadow(0 6px 0 #009792)
            drop-shadow(0 7px 0 #008a85)
            drop-shadow(0 8px 0 #007d78)
            drop-shadow(0 9px 0 #00706b)
            drop-shadow(0 10px 0 #00635e)
            drop-shadow(0 11px 0 #005651)
            drop-shadow(0 12px 0 #004944)
            drop-shadow(0 20px 30px rgba(0, 0, 0, 0.7));
        }
        
        .extreme-chrome-teal::after {
          content: "Enhance Your Brain Performance";
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(
              45deg,
              transparent 0%,
              transparent 40%,
              rgba(255, 255, 255, 1) 49%,
              rgba(255, 255, 255, 1) 51%,
              transparent 60%,
              transparent 100%
            );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          transform: translateZ(10px);
          animation: extreme-shine 4s infinite;
          animation-timing-function: ease-in-out;
        }
        
        /* Extreme Chrome Silver Text */
        .extreme-chrome-silver {
          position: relative;
          display: inline-block;
          color: transparent;
          transform: perspective(1000px) rotateX(20deg) translateZ(15px);
          transform-style: preserve-3d;
          letter-spacing: -0.5px;
        }
        
        .extreme-chrome-silver::before {
          content: "Discover the science-backed method that optimizes your brain energy, helping you maintain focus, motivation, and drive to achieve your goals";
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            #FFFFFF 0%,
            #F8F8F8 10%,
            #F0F0F0 20%,
            #E0E0E0 30%,
            #D0D0D0 40%,
            #C0C0C0 50%,
            #B0B0B0 60%,
            #A0A0A0 70%,
            #909090 80%,
            #808080 90%,
            #707070 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          transform: translateZ(0px);
          filter: drop-shadow(
            0 1px 0 #f0f0f0)
            drop-shadow(0 2px 0 #e3e3e3)
            drop-shadow(0 3px 0 #d6d6d6)
            drop-shadow(0 4px 0 #c9c9c9)
            drop-shadow(0 5px 0 #bcbcbc)
            drop-shadow(0 6px 0 #afafaf)
            drop-shadow(0 7px 0 #a2a2a2)
            drop-shadow(0 8px 0 #959595)
            drop-shadow(0 9px 0 #888888)
            drop-shadow(0 10px 0 #7b7b7b)
            drop-shadow(0 11px 0 #6e6e6e)
            drop-shadow(0 12px 0 #616161)
            drop-shadow(0 20px 30px rgba(0, 0, 0, 0.7));
        }
        
        .extreme-chrome-silver::after {
          content: "Discover the science-backed method that optimizes your brain energy, helping you maintain focus, motivation, and drive to achieve your goals";
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(
              45deg,
              transparent 0%,
              transparent 40%,
              rgba(255, 255, 255, 1) 49%,
              rgba(255, 255, 255, 1) 51%,
              transparent 60%,
              transparent 100%
            );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          transform: translateZ(10px);
          animation: extreme-shine 4s infinite;
          animation-timing-function: ease-in-out;
          animation-delay: 1s;
        }
        
        /* Extreme Button Wrapper */
        .extreme-button-wrapper {
          position: relative;
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        
        /* Extreme Chrome Teal Button */
        .extreme-chrome-teal-button {
          position: relative;
          color: white;
          font-weight: 900;
          background: linear-gradient(
            to bottom,
            #00F5F0 0%,
            #00E6E1 20%,
            #00D8D3 40%,
            #00C5C0 60%,
            #00B2AD 80%,
            #009F9A 100%
          );
          border: none;
          transform: perspective(1000px) rotateX(25deg) translateZ(10px);
          transform-style: preserve-3d;
          transition: all 0.3s ease;
          box-shadow:
            0 1px 0 #00d8d3,
            0 2px 0 #00cbc6,
            0 3px 0 #00beb9,
            0 4px 0 #00b1ac,
            0 5px 0 #00a49f,
            0 6px 0 #009792,
            0 7px 0 #008a85,
            0 8px 0 #007d78,
            0 9px 0 #00706b,
            0 10px 0 #00635e,
            0 11px 0 #005651,
            0 12px 0 #004944,
            0 15px 15px rgba(0, 0, 0, 0.5);
          text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);
        }
        
        .extreme-chrome-teal-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.6) 0%,
            rgba(255, 255, 255, 0.2) 100%
          );
          border-radius: 9999px 9999px255,255,0.6) 0%,
            rgba(255,255,255,0.2) 100%
          );
          border-radius: 9999px 9999px 0 0;
          pointer-events: none;
        }
        
        .extreme-chrome-teal-button:hover {
          transform: perspective(1000px) rotateX(25deg) translateZ(15px) translateY(-5px);
          box-shadow:
            0 1px 0 #00d8d3,
            0 2px 0 #00cbc6,
            0 3px 0 #00beb9,
            0 4px 0 #00b1ac,
            0 5px 0 #00a49f,
            0 6px 0 #009792,
            0 7px 0 #008a85,
            0 8px 0 #007d78,
            0 9px 0 #00706b,
            0 10px 0 #00635e,
            0 11px 0 #005651,
            0 12px 0 #004944,
            0 13px 0 #003c37,
            0 14px 0 #002f2a,
            0 15px 0 #00221d,
            0 20px 20px rgba(0, 0, 0, 0.6);
        }
        
        .extreme-chrome-teal-button:active {
          transform: perspective(1000px) rotateX(25deg) translateZ(5px) translateY(3px);
          box-shadow:
            0 1px 0 #00d8d3,
            0 2px 0 #00cbc6,
            0 3px 0 #00beb9,
            0 4px 0 #00b1ac,
            0 5px 0 #00a49f,
            0 10px 10px rgba(0, 0, 0, 0.4);
        }
        
        /* Extreme Chrome Silver Button */
        .extreme-chrome-silver-button {
          position: relative;
          color: #333;
          font-weight: 900;
          background: linear-gradient(
            to bottom,
            #FFFFFF 0%,
            #F0F0F0 20%,
            #E0E0E0 40%,
            #D0D0D0 60%,
            #C0C0C0 80%,
            #B0B0B0 100%
          );
          border: none;
          transform: perspective(1000px) rotateX(25deg) translateZ(10px);
          transform-style: preserve-3d;
          transition: all 0.3s ease;
          box-shadow:
            0 1px 0 #f0f0f0,
            0 2px 0 #e3e3e3,
            0 3px 0 #d6d6d6,
            0 4px 0 #c9c9c9,
            0 5px 0 #bcbcbc,
            0 6px 0 #afafaf,
            0 7px 0 #a2a2a2,
            0 8px 0 #959595,
            0 9px 0 #888888,
            0 10px 0 #7b7b7b,
            0 11px 0 #6e6e6e,
            0 12px 0 #616161,
            0 15px 15px rgba(0, 0, 0, 0.5);
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
        }
        
        .extreme-chrome-silver-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0.3) 100%
          );
          border-radius: 9999px 9999px 0 0;
          pointer-events: none;
        }
        
        .extreme-chrome-silver-button:hover {
          transform: perspective(1000px) rotateX(25deg) translateZ(15px) translateY(-5px);
          box-shadow:
            0 1px 0 #f0f0f0,
            0 2px 0 #e3e3e3,
            0 3px 0 #d6d6d6,
            0 4px 0 #c9c9c9,
            0 5px 0 #bcbcbc,
            0 6px 0 #afafaf,
            0 7px 0 #a2a2a2,
            0 8px 0 #959595,
            0 9px 0 #888888,
            0 10px 0 #7b7b7b,
            0 11px 0 #6e6e6e,
            0 12px 0 #616161,
            0 13px 0 #545454,
            0 14px 0 #474747,
            0 15px 0 #3a3a3a,
            0 20px 20px rgba(0, 0, 0, 0.6);
        }
        
        .extreme-chrome-silver-button:active {
          transform: perspective(1000px) rotateX(25deg) translateZ(5px) translateY(3px);
          box-shadow:
            0 1px 0 #f0f0f0,
            0 2px 0 #e3e3e3,
            0 3px 0 #d6d6d6,
            0 4px 0 #c9c9c9,
            0 5px 0 #bcbcbc,
            0 10px 10px rgba(0, 0, 0, 0.4);
        }
        
        @keyframes extreme-shine {
          0%, 100% {
            background-position: -200% 0;
          }
          50% {
            background-position: 300% 0;
          }
        }
      `}</style>
    </section>
  )
}

