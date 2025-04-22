export default function LocalImageVersion() {
  return (
    <section className="w-full min-h-[100vh] flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* For local image usage */}
      <div className="absolute inset-0 bg-black z-0">
        {/* If you want to use a local image instead of the direct URL */}
        <img
          src="/images/bubble-nebula.jpg"
          alt="Bubble Nebula NGC7635"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Dark overlay to improve text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Rest of the content remains the same */}
      {/* ... */}
    </section>
  )
}

