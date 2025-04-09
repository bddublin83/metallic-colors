import SchedulingCalendar from "@/components/scheduling/scheduling-calendar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Schedule a Consultation | Brain Performance",
  description: "Book a one-on-one consultation with our brain performance experts.",
}

export default function SchedulePage() {
  return (
    <div className="min-h-screen relative">
      {/* Background with overlay */}
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://esahubble.org/media/archives/images/large/heic0814c.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          // Remove the brightness filter
        }}
      ></div>
      <div className="fixed inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 classic-metallic-teal">Schedule a Consultation</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Book a one-on-one session with our brain performance experts to get personalized guidance tailored to your
            specific needs and goals.
          </p>
        </div>

        <div className="bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-xl p-6 md:p-8 max-w-5xl mx-auto">
          <SchedulingCalendar />
        </div>
      </div>
    </div>
  )
}
