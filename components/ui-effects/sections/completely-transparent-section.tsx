import { Calendar, MessageSquare, BookOpen } from "lucide-react"

export function CompletelyTransparentSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 classic-metallic-teal">
          Complete Healthcare Platform
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Virtual Consultation Card - Completely Transparent */}
          <div className="rounded-xl p-8 border border-gray-800 hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-transparent border border-teal-500 flex items-center justify-center mr-4">
                <Calendar className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold classic-metallic-teal">Virtual Consultations</h3>
            </div>
            <p className="text-white mb-6">
              Schedule one-on-one sessions or join group lectures with our expert physician. Get personalized guidance
              from anywhere in the world.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 border border-gray-700 rounded-full text-xs text-teal-400">
                One-on-One Sessions
              </span>
              <span className="px-3 py-1 border border-gray-700 rounded-full text-xs text-teal-400">
                Group Lectures
              </span>
              <span className="px-3 py-1 border border-gray-700 rounded-full text-xs text-teal-400">Secure Video</span>
            </div>
            <a href="#" className="text-teal-400 font-medium flex items-center hover:text-teal-300 transition-colors">
              Book a Consultation <span className="ml-2">→</span>
            </a>
          </div>

          {/* Community Forum Card - Completely Transparent */}
          <div className="rounded-xl p-8 border border-gray-800 hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-transparent border border-teal-500 flex items-center justify-center mr-4">
                <MessageSquare className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold classic-metallic-teal">Community Forum</h3>
            </div>
            <p className="text-white mb-6">
              Connect with others on the same journey. Share experiences, ask questions, and get support from both peers
              and professionals.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 border border-gray-700 rounded-full text-xs text-teal-400">Live Chat</span>
              <span className="px-3 py-1 border border-gray-700 rounded-full text-xs text-teal-400">
                Discussion Boards
              </span>
              <span className="px-3 py-1 border border-gray-700 rounded-full text-xs text-teal-400">AI Moderated</span>
            </div>
            <a href="#" className="text-teal-400 font-medium flex items-center hover:text-teal-300 transition-colors">
              Join the Community <span className="ml-2">→</span>
            </a>
          </div>

          {/* Educational Courses Card - Completely Transparent */}
          <div className="rounded-xl p-8 border border-gray-800 hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-transparent border border-teal-500 flex items-center justify-center mr-4">
                <BookOpen className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold classic-metallic-teal">Educational Courses</h3>
            </div>
            <p className="text-white mb-6">
              Structured learning paths designed by medical professionals. Master the science and practice of optimizing
              your brain performance.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 border border-gray-700 rounded-full text-xs text-teal-400">Self-Paced</span>
              <span className="px-3 py-1 border border-gray-700 rounded-full text-xs text-teal-400">Certification</span>
              <span className="px-3 py-1 border border-gray-700 rounded-full text-xs text-teal-400">
                Progress Tracking
              </span>
            </div>
            <a href="#" className="text-teal-400 font-medium flex items-center hover:text-teal-300 transition-colors">
              Explore Courses <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

