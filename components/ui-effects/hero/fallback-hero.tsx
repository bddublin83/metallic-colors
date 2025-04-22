export default function FallbackHero() {
  return (
    <section className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-10">
          {/* Main heading with simpler fallback styling */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
            style={{
              color: "#0ABAB5",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Enhance Your Brain Performance
          </h1>

          {/* Subheading with simpler fallback styling */}
          <p
            className="text-lg sm:text-xl md:text-2xl max-w-3xl font-medium leading-relaxed"
            style={{
              color: "#C0C0C0",
              textShadow: "0 1px 2px rgba(0,0,0,0.3)",
            }}
          >
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
    </section>
  )
}

