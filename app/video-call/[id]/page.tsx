import VideoConference from "@/components/video/video-conference"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Video Consultation | Brain Performance",
  description: "Join your scheduled video consultation with our brain performance experts.",
}

export default function VideoCallPage({ params }: { params: { id: string } }) {
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
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 classic-metallic-teal">Video Consultation</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with your healthcare provider for a secure, private consultation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <VideoConference />
        </div>
      </div>
    </div>
  )
}
