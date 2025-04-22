"use client"

export default function EmbossedMetallicText() {
  return (
    <section className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Embossed Metallic Teal Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight embossed-teal">
            Enhance Your Brain Performance
          </h1>

          {/* Embossed Metallic Silver Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl font-medium leading-relaxed embossed-silver">
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

      {/* CSS for embossed metallic text effects */}
      <style jsx global>{`
        /* Embossed Metallic Teal */
        .embossed-teal {
          background: linear-gradient(to bottom, #0ABAB5, #057773);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 
            2px 2px 3px rgba(255,255,255,0.1),
            -2px -2px 3px rgba(0,0,0,0.5);
          position: relative;
        }
        
        /* Embossed Metallic Silver */
        .embossed-silver {
          background: linear-gradient(to bottom, #E8E8E8, #A8A8A8);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 
            1px 1px 2px rgba(255,255,255,0.1),
            -1px -1px 2px rgba(0,0,0,0.5);
          position: relative;
        }
      `}</style>
    </section>
  )
}
