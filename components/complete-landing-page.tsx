"use client"

import { useState, useEffect } from "react"
import { Calendar, MessageSquare, BookOpen, ShoppingBag, Play, FileText, Brain, Smartphone, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CompleteLandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Track mouse position for dynamic lighting effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen text-white relative">
      {/* Full page Galaxy Cluster Background */}
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://esahubble.org/media/archives/images/large/heic0814c.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          // Remove the brightness filter to keep the image sharp
        }}
      ></div>

      {/* Dark overlay to improve text readability - make it less opaque */}
      <div className="fixed inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-20 bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold classic-metallic-teal">Tenacity</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-white hover:text-teal-400 transition-colors">
                Home
              </a>
              <a href="/schedule" className="text-white hover:text-teal-400 transition-colors">
                Schedule
              </a>
              <a href="/dashboard/appointments" className="text-white hover:text-teal-400 transition-colors">
                My Appointments
              </a>
              <a href="#" className="text-white hover:text-teal-400 transition-colors">
                Resources
              </a>
              <a href="#" className="text-white hover:text-teal-400 transition-colors">
                About
              </a>
            </nav>
            <div>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">Sign In</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Content Container - All content goes inside this relative container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="w-full min-h-[100vh] flex flex-col items-center justify-center px-4 py-20">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col items-center text-center space-y-16">
              {/* Main heading with classic metallic teal styling */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight classic-metallic-teal">
                Enhance Your Brain Performance
              </h1>

              {/* Subheading with classic metallic silver styling */}
              <p className="text-2xl sm:text-3xl md:text-4xl max-w-4xl font-bold leading-relaxed classic-metallic-silver">
                Discover the science-backed method that optimizes your brain energy, helping you maintain focus,
                motivation, and drive to achieve your goals
              </p>

              {/* Buttons with classic metallic styling */}
              <div className="flex flex-col sm:flex-row gap-6 mt-12">
                <button className="classic-metallic-teal-button px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started
                </button>
                <button className="classic-metallic-silver-button px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 classic-metallic-teal">
              Complete Healthcare Platform
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Virtual Consultation Card */}
              <div className="rounded-xl p-8 border border-gray-800 hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-teal-500 bg-opacity-20 flex items-center justify-center mr-4">
                    <Calendar className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold classic-metallic-teal">Virtual Consultations</h3>
                </div>
                <p className="text-white mb-6">
                  Schedule one-on-one sessions or join group lectures with our expert physician. Get personalized
                  guidance from anywhere in the world.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-teal-400">One-on-One Sessions</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-teal-400">Group Lectures</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-teal-400">Secure Video</span>
                </div>
                <a
                  href="#"
                  className="text-teal-400 font-medium flex items-center hover:text-teal-300 transition-colors"
                >
                  Book a Consultation <span className="ml-2">→</span>
                </a>
              </div>

              {/* Community Forum Card */}
              <div className="rounded-xl p-8 border border-gray-800 hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-teal-500 bg-opacity-20 flex items-center justify-center mr-4">
                    <MessageSquare className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold classic-metallic-teal">Community Forum</h3>
                </div>
                <p className="text-white mb-6">
                  Connect with others on the same journey. Share experiences, ask questions, and get support from both
                  peers and professionals.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-teal-400">Live Chat</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-teal-400">Discussion Boards</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-teal-400">AI Moderated</span>
                </div>
                <a
                  href="#"
                  className="text-teal-400 font-medium flex items-center hover:text-teal-300 transition-colors"
                >
                  Join the Community <span className="ml-2">→</span>
                </a>
              </div>

              {/* Educational Courses Card */}
              <div className="rounded-xl p-8 border border-gray-800 hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-teal-500 bg-opacity-20 flex items-center justify-center mr-4">
                    <BookOpen className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold classic-metallic-teal">Educational Courses</h3>
                </div>
                <p className="text-white mb-6">
                  Structured learning paths designed by medical professionals. Master the science and practice of
                  optimizing your brain performance.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-teal-400">Self-Paced</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-teal-400">Certification</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-teal-400">Progress Tracking</span>
                </div>
                <a
                  href="#"
                  className="text-teal-400 font-medium flex items-center hover:text-teal-300 transition-colors"
                >
                  Explore Courses <span className="ml-2">→</span>
                </a>
              </div>

              {/* Recommended Products Card */}
              <div className="rounded-xl p-8 border border-gray-800 hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-teal-500 bg-opacity-20 flex items-center justify-center mr-4">
                    <ShoppingBag className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold classic-metallic-teal">Recommended Products</h3>
                </div>
                <p className="text-white mb-6">
                  Physician-vetted supplements, devices, and tools that support your brain optimization journey. Only
                  products that meet our standards.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-teal-400">Supplements</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-teal-400">Monitoring Tools</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-teal-400">Books</span>
                </div>
                <a
                  href="#"
                  className="text-teal-400 font-medium flex items-center hover:text-teal-300 transition-colors"
                >
                  Shop Recommendations <span className="ml-2">→</span>
                </a>
              </div>

              {/* Video Content Card */}
              <div className="rounded-xl p-8 border border-gray-800 hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-teal-500 bg-opacity-20 flex items-center justify-center mr-4">
                    <Play className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold classic-metallic-teal">Video Library</h3>
                </div>
                <p className="text-white mb-6">
                  Watch expert demonstrations, explanations, and success stories. Visual learning to complement your
                  educational journey.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-teal-400">Tutorials</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-teal-400">Case Studies</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-teal-400">Expert Interviews</span>
                </div>
                <a
                  href="#"
                  className="text-teal-400 font-medium flex items-center hover:text-teal-300 transition-colors"
                >
                  Watch Videos <span className="ml-2">→</span>
                </a>
              </div>

              {/* Blog/Articles Card */}
              <div className="rounded-xl p-8 border border-gray-800 hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-teal-500 bg-opacity-20 flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold classic-metallic-teal">Blog & Articles</h3>
                </div>
                <p className="text-white mb-6">
                  Stay updated with the latest research, insights, and practical tips. In-depth articles written by
                  medical professionals.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-teal-400">Research</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-teal-400">Case Studies</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-teal-400">Practical Guides</span>
                </div>
                <a
                  href="#"
                  className="text-teal-400 font-medium flex items-center hover:text-teal-300 transition-colors"
                >
                  Read Articles <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* AI Assistant & Mobile App Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* AI Assistant */}
              <div className="p-8 rounded-2xl border border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-teal-500 bg-opacity-20 flex items-center justify-center mr-5">
                    <Brain className="w-8 h-8 text-teal-400" />
                  </div>
                  <h3 className="text-3xl font-bold classic-metallic-teal">AI Assistant</h3>
                </div>

                <p className="text-white mb-6">
                  Get instant answers to your questions from our AI assistant, programmed with physician knowledge to
                  help you implement and maintain optimal brain performance.
                </p>

                <div className="rounded-xl p-6 mb-6 border border-gray-700">
                  <div className="flex items-start mb-4">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-3 mt-1">
                      <span className="text-teal-400 font-bold">Q</span>
                    </div>
                    <p className="text-white">How do I know if I'm in a high ketone state?</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-teal-500 bg-opacity-20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-teal-400 font-bold">A</span>
                    </div>
                    <p className="text-white">
                      You can measure blood ketone levels using a ketone meter. Optimal levels for brain performance are
                      between 1.5-3.0 mmol/L. You may also notice increased mental clarity, sustained energy, and
                      reduced hunger.
                    </p>
                  </div>
                </div>

                <button className="w-full py-4 rounded-xl bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold hover:from-teal-500 hover:to-teal-400 transition-all duration-300">
                  Ask the AI Assistant
                </button>
              </div>

              {/* Mobile App */}
              <div className="p-8 rounded-2xl border border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-teal-500 bg-opacity-20 flex items-center justify-center mr-5">
                    <Smartphone className="w-8 h-8 text-teal-400" />
                  </div>
                  <h3 className="text-3xl font-bold classic-metallic-teal">Mobile App</h3>
                </div>

                <p className="text-white mb-6">
                  Take your brain optimization journey anywhere with our mobile app. Get personalized guidance, track
                  your progress, and stay connected with your physician.
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

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 classic-metallic-teal">
              Ready to Transform Your Brain Performance?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Join our community of high performers and discover the science-backed method to optimize your brain
              energy.
            </p>
            <button className="px-10 py-5 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white">
              Start Your Journey Today
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-800 bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 classic-metallic-teal">Tenacity</h3>
                <p className="text-gray-400">
                  A physician-led platform for optimizing brain energy and performance through science-backed methods.
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Platform</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                      Virtual Consultations
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                      Community Forum
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                      Educational Courses
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                      Recommended Products
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                      Video Library
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                      Blog & Articles
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                      AI Assistant
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                      Mobile App
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Connect</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500">© 2023 Tenacity. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
      @keyframes shine {
        0% {
          background-position: 0% 0%;
        }
        50% {
          background-position: 100% 100%;
        }
        100% {
          background-position: 0% 0%;
        }
      }
      
      /* Classic Metallic Teal Text - NO DIMMING */
      .classic-metallic-teal {
        background: linear-gradient(
          135deg, 
          #0ABAB5 0%, 
          #2DFFF9 50%, 
          #0ABAB5 100%
        );
        background-size: 200% 200%;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        text-shadow: 
          0 2px 4px rgba(0, 0, 0, 0.5),
          0 0 10px rgba(10, 186, 181, 0.5);
        filter: drop-shadow(0 5px 15px rgba(10, 186, 181, 0.4));
        position: relative;
      }

      .classic-metallic-teal::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          45deg,
          transparent 0%,
          transparent 40%,
          rgba(255, 255, 255, 0.8) 50%,
          transparent 60%,
          transparent 100%
        );
        background-size: 200% 200%;
        -webkit-background-clip: text;
        background-clip: text;
        animation: shine 3s linear infinite;
      }

      /* Classic Metallic Silver Text - NO DIMMING */
      .classic-metallic-silver {
        background: linear-gradient(
          135deg, 
          #C0C0C0 0%, 
          #F8F8F8 50%, 
          #C0C0C0 100%
        );
        background-size: 200% 200%;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        text-shadow: 
          0 2px 4px rgba(0, 0, 0, 0.5),
          0 0 10px rgba(192, 192, 192, 0.5);
        filter: drop-shadow(0 5px 15px rgba(192, 192, 192, 0.4));
        position: relative;
      }

      .classic-metallic-silver::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          45deg,
          transparent 0%,
          transparent 40%,
          rgba(255, 255, 255, 0.8) 50%,
          transparent 60%,
          transparent 100%
        );
        background-size: 200% 200%;
        -webkit-background-clip: text;
        background-clip: text;
        animation: shine 3s linear infinite;
        animation-delay: 1s;
      }
      
      /* Classic Metallic Teal Button */
      .classic-metallic-teal-button {
        background: linear-gradient(
          135deg, 
          #057773 0%, 
          #0ABAB5 20%, 
          #2DFFF9 50%, 
          #0ABAB5 80%, 
          #057773 100%
        );
        background-size: 200% 200%;
        animation: shine 3s ease infinite;
        color: white;
        box-shadow: 
          0 5px 15px rgba(10, 186, 181, 0.4),
          inset 0 0 20px rgba(255, 255, 255, 0.5);
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        border: none;
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
      }
      
      .classic-metallic-teal-button:hover {
        transform: translateY(-3px);
        box-shadow: 
          0 8px 25px rgba(10, 186, 181, 0.6),
          inset 0 0 20px rgba(255, 255, 255, 0.5);
      }
      
      .classic-metallic-teal-button:active {
        transform: translateY(1px);
        box-shadow: 
          0 2px 10px rgba(10, 186, 181, 0.4),
          inset 0 0 20px rgba(255, 255, 255, 0.5);
      }
      
      /* Classic Metallic Silver Button */
      .classic-metallic-silver-button {
        background: linear-gradient(
          135deg, 
          #888888 0%, 
          #C0C0C0 20%, 
          #F8F8F8 50%, 
          #C0C0C0 80%, 
          #888888 100%
        );
        background-size: 200% 200%;
        animation: shine 3s ease infinite;
        color: #333;
        box-shadow: 
          0 5px 15px rgba(192, 192, 192, 0.6),
          inset 0 0 20px rgba(255, 255, 255, 0.7);
        text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
        border: none;
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
      }
      
      .classic-metallic-silver-button:hover {
        transform: translateY(-3px);
        box-shadow: 
          0 8px 25px rgba(192, 192, 192, 0.8),
          inset 0 0 20px rgba(255, 255, 255, 0.7);
      }
      
      .classic-metallic-silver-button:active {
        transform: translateY(1px);
        box-shadow: 
          0 2px 10px rgba(192, 192, 192, 0.6),
          inset 0 0 20px rgba(255, 255, 255, 0.7);
      }
    `}</style>
    </div>
  )
}
