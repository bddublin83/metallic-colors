import { Brain, MessageSquare, Calendar, Users } from "lucide-react"

export function TransparentAISection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* AI Assistant - Completely Transparent */}
          <div className="p-8 rounded-2xl border border-gray-800">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-transparent border border-teal-500 flex items-center justify-center mr-5">
                <Brain className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-3xl font-bold classic-metallic-teal">AI Assistant</h3>
            </div>

            <p className="text-white text-lg mb-6">
              Get instant answers to your questions from our AI assistant, programmed with physician knowledge to help
              you implement and maintain optimal brain performance.
            </p>

            <div className="rounded-xl p-6 mb-6 border border-gray-700">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 rounded-full bg-transparent border border-gray-700 flex items-center justify-center mr-3 mt-1">
                  <span className="text-teal-400 font-bold">Q</span>
                </div>
                <p className="text-white">How do I know if I'm in a high ketone state?</p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-transparent border border-teal-500 flex items-center justify-center mr-3 mt-1">
                  <span className="text-teal-400 font-bold">A</span>
                </div>
                <p className="text-white">
                  You can measure blood ketone levels using a ketone meter. Optimal levels for brain performance are
                  between 1.5-3.0 mmol/L. You may also notice increased mental clarity, sustained energy, and reduced
                  hunger.
                </p>
              </div>
            </div>

            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold hover:from-teal-500 hover:to-teal-400 transition-all duration-300">
              Ask the AI Assistant
            </button>
          </div>

          {/* Mobile App - Completely Transparent */}
          <div className="p-8 rounded-2xl border border-gray-800">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-transparent border border-teal-500 flex items-center justify-center mr-5">
                <Brain className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-3xl font-bold classic-metallic-teal">Mobile App</h3>
            </div>

            <p className="text-white text-lg mb-6">
              Take your brain optimization journey anywhere with our mobile app. Get personalized guidance, track your
              progress, and stay connected with your physician.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl p-4 border border-gray-700">
                <MessageSquare className="w-6 h-6 text-teal-400 mb-2" />
                <h4 className="font-bold text-white mb-1">Secure Messaging</h4>
                <p className="text-white text-opacity-80 text-sm">Direct communication with your physician</p>
              </div>

              <div className="rounded-xl p-4 border border-gray-700">
                <Calendar className="w-6 h-6 text-teal-400 mb-2" />
                <h4 className="font-bold text-white mb-1">Appointment Booking</h4>
                <p className="text-white text-opacity-80 text-sm">Schedule sessions on the go</p>
              </div>

              <div className="rounded-xl p-4 border border-gray-700">
                <Users className="w-6 h-6 text-teal-400 mb-2" />
                <h4 className="font-bold text-white mb-1">Community Access</h4>
                <p className="text-white text-opacity-80 text-sm">Connect with peers anytime</p>
              </div>

              <div className="rounded-xl p-4 border border-gray-700">
                <Brain className="w-6 h-6 text-teal-400 mb-2" />
                <h4 className="font-bold text-white mb-1">Progress Tracking</h4>
                <p className="text-white text-opacity-80 text-sm">Monitor your brain optimization</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 py-4 rounded-xl text-white font-bold border border-gray-700 hover:border-teal-500 transition-all duration-300 flex items-center justify-center">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5,12.5c0-0.9,0.5-1.7,1.3-2.2c-0.5-0.7-1.2-1.3-2.1-1.6c-0.9-0.3-1.7-0.4-2.5-0.2c-1.1,0.2-2,0.8-2.4,0.8 c-0.5,0-1.3-0.6-2.2-0.6c-1.1,0-2.2,0.6-2.8,1.7c-1.2,2.1-0.3,5.3,0.9,7c0.6,0.9,1.3,1.8,2.2,1.8c0.9,0,1.2-0.6,2.3-0.6 c1.1,0,1.3,0.6,2.2,0.5c0.9,0,1.5-0.8,2.1-1.7c0.4-0.6,0.7-1.3,0.9-2C18.2,14.4,17.5,13.5,17.5,12.5z M15.1,7.2 c0.7-0.8,0.6-2,0.5-2.5c-0.5,0-1.2,0.3-1.6,0.8c-0.7,0.8-0.6,1.9-0.5,2.4C14,8,14.7,7.7,15.1,7.2z" />
                </svg>
                App Store
              </button>
              <button className="flex-1 py-4 rounded-xl text-white font-bold border border-gray-700 hover:border-teal-500 transition-all duration-300 flex items-center justify-center">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.5,20.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.5,1-1v-1c0-0.6-0.5-1-1-1h-1c-0.6,0-1,0.5-1,1V20.5z M3.5,16.5 c0,0.6,0.5,1,1,1h1c0.6,0,1-0.5,1-1v-1c0-0.6-0.5-1-1-1h-1c-0.6,0-1,0.5-1,1V16.5z M7.5,20.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.5,1-1 v-1c0-0.6-0.5-1-1-1h-1c-0.6,0-1,0.5-1,1V20.5z M7.5,16.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.5,1-1v-1c0-0.6-0.5-1-1-1h-1 c-0.6,0-1,0.5-1,1V16.5z M7.5,12.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.5,1-1v-1c0-0.6-0.5-1-1-1h-1c-0.6,0-1,0.5-1,1V12.5z M11.5,20.5 c0,0.6,0.5,1,1,1h1c0.6,0,1-0.5,1-1v-1c0-0.6-0.5-1-1-1h-1c-0.6,0-1,0.5-1,1V20.5z M11.5,16.5c0,0.6,0.5,1,1,1h1 c0.6,0,1-0.5,1-1v-1c0-0.6-0.5-1-1-1h-1c-0.6,0-1,0.5-1,1V16.5z M11.5,12.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.5,1-1v-1 c0-0.6-0.5-1-1-1h-1c-0.6,0-1,0.5-1,1V12.5z M11.5,8.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.5,1-1v-1c0-0.6-0.5-1-1-1h-1 c-0.6,0-1,0.5-1,1V8.5z M15.5,20.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.5,1-1v-1c0-0.6-0.5-1-1-1h-1c-0.6,0-1,0.5-1,1V20.5z M15.5,16.5 c0,0.6,0.5,1,1,1h1c0.6,0,1-0.5,1-1v-1c0-0.6-0.5-1-1-1h-1c-0.6,0-1,0.5-1,1V16.5z M15.5,12.5c0,0.6,0.5,1,1,1h1 c0.6,0,1-0.5,1-1v-1c0-0.6-0.5-1-1-1h-1c-0.6,0-1,0.5-1,1V12.5z M15.5,8.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.5,1-1v-1 c0-0.6-0.5-1-1-1h-1c-0.6,0-1,0.5-1,1V8.5z M15.5,4.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.5,1-1v-1c0-0.6-0.5-1-1-1h-1 c-0.6,0-1,0.5-1,1V4.5z M19.5,20.5c0,0.6,0.5,1,1,1h1c0.6,0,1-0.5,1-1v-1c0-0.6-0.5-1-1-1h-1c-0.6,0-1,0.5-1,1V20.5z M19.5,16.5 c0,0.6,0.5,1,1,1h1c0.6,0,1-0.5,1-1v-5c0-0.6-0.5-1-1-1h-1c-0.6,0-1,0.5-1,1V16.5z M18.5,7c0-0.6-0.5-1-1-1h-11 c-0.6,0-1,0.5-1,1v1c0,0.6,0.5,1,1,1h11c0.6,0,1-0.5,1-1V7z" />
                </svg>
                Google Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

