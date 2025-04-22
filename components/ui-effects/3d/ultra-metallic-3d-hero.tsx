"use client"

export default function UltraMetallic3DHero() {
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
          {/* Ultra Metallic 3D Teal Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight">
            <span className="ultra-metallic-teal">Enhance Your Brain Performance</span>
          </h1>

          {/* Ultra Metallic 3D Silver Subheading */}
          <p className="text-2xl sm:text-3xl md:text-4xl max-w-4xl font-bold leading-relaxed">
            <span className="ultra-metallic-silver">
              Discover the science-backed method that optimizes your brain energy, helping you maintain focus,
              motivation, and drive to achieve your goals
            </span>
          </p>

          {/* Ultra Metallic 3D Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mt-12">
            <button className="ultra-metallic-teal-button px-10 py-4 rounded-full text-xl font-bold">
              Get Started
            </button>
            <button className="ultra-metallic-silver-button px-10 py-4 rounded-full text-xl font-bold">
              Learn More
            </button>
          </div>

          {/* Image Attribution */}
          <div className="absolute bottom-4 right-4 text-xs text-white opacity-70">
            Background: Bubble Nebula NGC7635 | Credit: ESA/Hubble
          </div>
        </div>
      </div>

      {/* CSS for ultra metallic 3D text effects */}
      <style jsx global>{`
        /* Ultra Metallic Teal Text */
        .ultra-metallic-teal {
          display: inline-block;
          position: relative;
          color: transparent;
          transform: perspective(800px) rotateX(20deg);
          transform-origin: center bottom;
          text-shadow:
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
            0 20px 30px rgba(0, 0, 0, 0.7);
          letter-spacing: -1px;
        }
        
        /* Base metallic gradient */
        .ultra-metallic-teal::before {
          content: "Enhance Your Brain Performance";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
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
          z-index: 1;
        }
        
        /* Edge highlight */
        .ultra-metallic-teal::after {
          content: "Enhance Your Brain Performance";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
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
          z-index: 2;
          opacity: 0.8;
          animation: ultra-shine 4s infinite;
          animation-timing-function: ease-in-out;
        }
        
        /* Additional ambient reflection */
        .ultra-metallic-teal::before {
          content: "Enhance Your Brain Performance";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: 
            linear-gradient(
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
          z-index: 1;
          filter: drop-shadow(0 0 5px rgba(0, 197, 192, 0.5));
        }
        
        /* Ultra Metallic Silver Text */
        .ultra-metallic-silver {
          display: inline-block;
          position: relative;
          color: transparent;
          transform: perspective(800px) rotateX(15deg);
          transform-origin: center bottom;
          text-shadow:
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
            0 20px 30px rgba(0, 0, 0, 0.7);
          letter-spacing: -0.5px;
        }
        
        /* Base metallic gradient */
        .ultra-metallic-silver::before {
          content: "Discover the science-backed method that optimizes your brain energy, helping you maintain focus, motivation, and drive to achieve your goals";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
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
          z-index: 1;
        }
        
        /* Edge highlight */
        .ultra-metallic-silver::after {
          content: "Discover the science-backed method that optimizes your brain energy, helping you maintain focus, motivation, and drive to achieve your goals";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
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
          z-index: 2;
          opacity: 0.8;
          animation: ultra-shine 4s infinite;
          animation-timing-function: ease-in-out;
          animation-delay: 1s;
        }
        
        /* Additional ambient reflection */
        .ultra-metallic-silver::before {
          content: "Discover the science-backed method that optimizes your brain energy, helping you maintain focus, motivation, and drive to achieve your goals";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: 
            linear-gradient(
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
          z-index: 1;
          filter: drop-shadow(0 0 5px rgba(192, 192, 192, 0.5));
        }
        
        /* Ultra Metallic Teal Button */
        .ultra-metallic-teal-button {
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
          transform: perspective(800px) rotateX(20deg);
          transform-origin: center bottom;
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
        
        .ultra-metallic-teal-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.4) 0%,
            rgba(255, 255, 255, 0.1) 100%
          );
          border-radius: 9999px 9999px 0 0;
          pointer-events: none;
        }
        
        .ultra-metallic-teal-button:hover {
          transform: perspective(800px) rotateX(20deg) translateY(-5px);
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
        
        .ultra-metallic-teal-button:active {
          transform: perspective(800px) rotateX(20deg) translateY(3px);
          box-shadow:
            0 1px 0 #00d8d3,
            0 2px 0 #00cbc6,
            0 3px 0 #00beb9,
            0 4px 0 #00b1ac,
            0 5px 0 #00a49f,
            0 10px 10px rgba(0, 0, 0, 0.4);
        }
        
        /* Ultra Metallic Silver Button */
        .ultra-metallic-silver-button {
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
          transform: perspective(800px) rotateX(20deg);
          transform-origin: center bottom;
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
        
        .ultra-metallic-silver-button::before {
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
          border-radius: 9999px 9999px 0 0;
          pointer-events: none;
        }
        
        .ultra-metallic-silver-button:hover {
          transform: perspective(800px) rotateX(20deg) translateY(-5px);
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
        
        .ultra-metallic-silver-button:active {
          transform: perspective(800px) rotateX(20deg) translateY(3px);
          box-shadow:
            0 1px 0 #f0f0f0,
            0 2px 0 #e3e3e3,
            0 3px 0 #d6d6d6,
            0 4px 0 #c9c9c9,
            0 5px 0 #bcbcbc,
            0 10px 10px rgba(0, 0, 0, 0.4);
        }
        
        @keyframes ultra-shine {
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

