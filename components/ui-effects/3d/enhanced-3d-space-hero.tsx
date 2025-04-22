"use client"

export default function Enhanced3DSpaceHero() {
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
          {/* Enhanced 3D Teal Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight">
            <span className="enhanced-3d-teal">Enhance Your Brain Performance</span>
          </h1>

          {/* Enhanced 3D Silver Subheading */}
          <p className="text-2xl sm:text-3xl md:text-4xl max-w-4xl font-bold leading-relaxed">
            <span className="enhanced-3d-silver">
              Discover the science-backed method that optimizes your brain energy, helping you maintain focus,
              motivation, and drive to achieve your goals
            </span>
          </p>

          {/* 3D Buttons matching the text colors */}
          <div className="flex flex-col sm:flex-row gap-6 mt-12">
            <button className="enhanced-3d-teal-button px-10 py-4 rounded-full text-xl font-bold">Get Started</button>
            <button className="enhanced-3d-silver-button px-10 py-4 rounded-full text-xl font-bold">Learn More</button>
          </div>

          {/* Image Attribution */}
          <div className="absolute bottom-4 right-4 text-xs text-white opacity-70">
            Background: Bubble Nebula NGC7635 | Credit: ESA/Hubble
          </div>
        </div>
      </div>

      {/* CSS for enhanced 3D text effects */}
      <style jsx global>{`
        /* Enhanced 3D Teal Text */
        .enhanced-3d-teal {
          display: inline-block;
          color: #00C5C0;
          text-shadow:
            0 1px 0 #00b8b3,
            0 2px 0 #00aba6,
            0 3px 0 #009e99,
            0 4px 0 #00918c,
            0 5px 0 #00847f,
            0 6px 0 #00777d,
            0 7px 0 #006a70,
            0 8px 0 #005d63,
            0 9px 0 #005056,
            0 10px 20px rgba(0, 0, 0, 0.9);
          transform: perspective(500px) rotateX(15deg);
          transform-origin: center bottom;
          position: relative;
          z-index: 1;
          background: linear-gradient(
            to bottom,
            #40FFF9 0%,
            #00D8D3 30%,
            #00C5C0 70%,
            #00B2AD 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .enhanced-3d-teal::after {
          content: "Enhance Your Brain Performance";
          position: absolute;
          left: 0;
          top: 0;
          z-index: 2;
          background: linear-gradient(
            45deg,
            transparent 0%,
            transparent 40%,
            rgba(255, 255, 255, 0.9) 50%,
            transparent 60%,
            transparent 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: enhanced-shine 3s infinite;
          animation-timing-function: ease-in-out;
        }
        
        /* Enhanced 3D Silver Text */
        .enhanced-3d-silver {
          display: inline-block;
          color: #D0D0D0;
          text-shadow:
            0 1px 0 #c6c6c6,
            0 2px 0 #bcbcbc,
            0 3px 0 #b2b2b2,
            0 4px 0 #a8a8a8,
            0 5px 0 #9e9e9e,
            0 6px 0 #949494,
            0 7px 0 #8a8a8a,
            0 8px 0 #808080,
            0 9px 0 #767676,
            0 10px 20px rgba(0, 0, 0, 0.9);
          transform: perspective(500px) rotateX(10deg);
          transform-origin: center bottom;
          position: relative;
          z-index: 1;
          background: linear-gradient(
            to bottom,
            #FFFFFF 0%,
            #F0F0F0 30%,
            #D0D0D0 70%,
            #B8B8B8 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .enhanced-3d-silver::after {
          content: "Discover the science-backed method that optimizes your brain energy, helping you maintain focus, motivation, and drive to achieve your goals";
          position: absolute;
          left: 0;
          top: 0;
          z-index: 2;
          background: linear-gradient(
            45deg,
            transparent 0%,
            transparent 40%,
            rgba(255, 255, 255, 0.9) 50%,
            transparent 60%,
            transparent 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: enhanced-shine 3s infinite;
          animation-timing-function: ease-in-out;
          animation-delay: 1s;
        }
        
        /* Enhanced 3D Teal Button */
        .enhanced-3d-teal-button {
          background: linear-gradient(
            to bottom,
            #00D8D3 0%,
            #00C5C0 50%,
            #00B2AD 100%
          );
          color: white;
          position: relative;
          transform: perspective(500px) rotateX(15deg);
          transform-origin: center bottom;
          transition: all 0.3s ease;
          border: none;
          box-shadow:
            0 1px 0 #00b8b3,
            0 2px 0 #00aba6,
            0 3px 0 #009e99,
            0 4px 0 #00918c,
            0 5px 0 #00847f,
            0 6px 0 #00777d,
            0 7px 0 #006a70,
            0 8px 0 #005d63,
            0 9px 0 #005056,
            0 10px 20px rgba(0, 0, 0, 0.5);
        }
        
        .enhanced-3d-teal-button:hover {
          transform: perspective(500px) rotateX(15deg) translateY(-5px);
        }
        
        .enhanced-3d-teal-button:active {
          transform: perspective(500px) rotateX(15deg) translateY(2px);
          box-shadow:
            0 1px 0 #00b8b3,
            0 2px 0 #00aba6,
            0 3px 0 #009e99,
            0 4px 20px rgba(0, 0, 0, 0.3);
        }
        
        /* Enhanced 3D Silver Button */
        .enhanced-3d-silver-button {
          background: linear-gradient(
            to bottom,
            #F0F0F0 0%,
            #D0D0D0 50%,
            #B8B8B8 100%
          );
          color: #333;
          position: relative;
          transform: perspective(500px) rotateX(15deg);
          transform-origin: center bottom;
          transition: all 0.3s ease;
          border: none;
          box-shadow:
            0 1px 0 #c6c6c6,
            0 2px 0 #bcbcbc,
            0 3px 0 #b2b2b2,
            0 4px 0 #a8a8a8,
            0 5px 0 #9e9e9e,
            0 6px 0 #949494,
            0 7px 0 #8a8a8a,
            0 8px 0 #808080,
            0 9px 0 #767676,
            0 10px 20px rgba(0, 0, 0, 0.5);
        }
        
        .enhanced-3d-silver-button:hover {
          transform: perspective(500px) rotateX(15deg) translateY(-5px);
        }
        
        .enhanced-3d-silver-button:active {
          transform: perspective(500px) rotateX(15deg) translateY(2px);
          box-shadow:
            0 1px 0 #c6c6c6,
            0 2px 0 #bcbcbc,
            0 3px 0 #b2b2b2,
            0 4px 20px rgba(0, 0, 0, 0.3);
        }
        
        @keyframes enhanced-shine {
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
