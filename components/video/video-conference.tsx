"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Mic,
  MicOff,
  VideoIcon,
  VideoOff,
  PhoneOff,
  MessageSquare,
  Users,
  Settings,
  Share2,
  MoreVertical,
  Maximize,
  Paperclip,
} from "lucide-react"

interface Participant {
  id: string
  name: string
  isVideoOn: boolean
  isAudioOn: boolean
  isSpeaking: boolean
}

export default function VideoConference() {
  const [isJoined, setIsJoined] = useState(false)
  const [isMicOn, setIsMicOn] = useState(true)
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [messages, setMessages] = useState<{ sender: string; text: string; time: string }[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [participants, setParticipants] = useState<Participant[]>([])
  const localVideoRef = useRef<HTMLVideoElement>(null)

  // Simulated participants for demo
  useEffect(() => {
    if (isJoined) {
      setParticipants([
        { id: "1", name: "Dr. Sarah Johnson", isVideoOn: true, isAudioOn: true, isSpeaking: false },
        { id: "2", name: "You", isVideoOn: isVideoOn, isAudioOn: isMicOn, isSpeaking: false },
      ])

      // Simulate receiving messages
      const timer = setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "Dr. Sarah Johnson",
            text: "Hello! Welcome to your consultation. How are you feeling today?",
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ])
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [isJoined, isMicOn, isVideoOn])

  // Simulate accessing webcam
  useEffect(() => {
    if (isJoined && isVideoOn && localVideoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          if (localVideoRef.current) {
            localVideoRef.current.srcObject = stream
          }
        })
        .catch((err) => {
          console.error("Error accessing media devices:", err)
          setIsVideoOn(false)
        })
    }
  }, [isJoined, isVideoOn])

  const handleJoinCall = () => {
    setIsJoined(true)
  }

  const handleLeaveCall = () => {
    setIsJoined(false)
    setMessages([])

    // Stop all tracks from the stream
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      const stream = localVideoRef.current.srcObject as MediaStream
      stream.getTracks().forEach((track) => track.stop())
      localVideoRef.current.srcObject = null
    }
  }

  const toggleMic = () => {
    setIsMicOn(!isMicOn)

    // In a real app, you would mute the actual audio track here
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      const stream = localVideoRef.current.srcObject as MediaStream
      stream.getAudioTracks().forEach((track) => {
        track.enabled = !isMicOn
      })
    }
  }

  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn)

    // In a real app, you would disable the actual video track here
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      const stream = localVideoRef.current.srcObject as MediaStream
      stream.getVideoTracks().forEach((track) => {
        track.enabled = !isVideoOn
      })
    }
  }

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "You",
          text: newMessage,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ])
      setNewMessage("")

      // Simulate response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "Dr. Sarah Johnson",
            text: "Thank you for sharing that. Let's discuss how we can address these concerns.",
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ])
      }, 3000)
    }
  }

  if (!isJoined) {
    return (
      <div className="flex items-center justify-center min-h-[500px]">
        <Card className="w-full max-w-md bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-center classic-metallic-teal">Join Your Consultation</h2>

            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="relative w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                  {isVideoOn ? (
                    <video ref={localVideoRef} autoPlay muted playsInline className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-4xl text-gray-400">Y</div>
                  )}
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className={`rounded-full ${isMicOn ? "bg-gray-700" : "bg-red-600"}`}
                  onClick={toggleMic}
                >
                  {isMicOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className={`rounded-full ${isVideoOn ? "bg-gray-700" : "bg-red-600"}`}
                  onClick={toggleVideo}
                >
                  {isVideoOn ? <VideoIcon className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
                </Button>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-md">
                  <h3 className="font-medium text-white mb-2">Appointment Details</h3>
                  <div className="text-sm text-gray-300 space-y-1">
                    <p>Dr. Sarah Johnson</p>
                    <p>One-on-One Consultation</p>
                    <p>30 Minutes</p>
                  </div>
                </div>

                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white" onClick={handleJoinCall}>
                  Join Call
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-[700px] bg-gray-900 rounded-xl overflow-hidden">
      {/* Video call header */}
      <div className="bg-gray-800 p-4 flex justify-between items-center border-b border-gray-700">
        <div className="flex items-center">
          <h3 className="text-xl font-semibold text-white">Consultation with Dr. Sarah Johnson</h3>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Maximize className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Video area */}
        <div className="flex-1 p-4 flex flex-col">
          <div className="flex-1 relative bg-black rounded-lg overflow-hidden">
            {/* Main participant video */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-gray-500 text-lg">
                {participants[0].isVideoOn ? (
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Dr. Sarah Johnson"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center text-3xl mb-2">
                      SJ
                    </div>
                    <span>Dr. Sarah Johnson (Video Off)</span>
                  </div>
                )}
              </div>
            </div>

            {/* Self view */}
            <div className="absolute bottom-4 right-4 w-48 h-36 bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
              {isVideoOn ? (
                <video ref={localVideoRef} autoPlay muted playsInline className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-700">
                  <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-xl">Y</div>
                </div>
              )}
            </div>
          </div>

          {/* Call controls */}
          <div className="h-16 mt-4 flex items-center justify-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              className={`rounded-full ${isMicOn ? "bg-gray-700 hover:bg-gray-600" : "bg-red-600 hover:bg-red-700"}`}
              onClick={toggleMic}
            >
              {isMicOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
            </Button>

            <Button
              variant="outline"
              size="icon"
              className={`rounded-full ${isVideoOn ? "bg-gray-700 hover:bg-gray-600" : "bg-red-600 hover:bg-red-700"}`}
              onClick={toggleVideo}
            >
              {isVideoOn ? <VideoIcon className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
            </Button>

            <Button variant="outline" size="icon" className="rounded-full bg-gray-700 hover:bg-gray-600">
              <Share2 className="h-5 w-5" />
            </Button>

            <Button variant="outline" size="icon" className="rounded-full bg-gray-700 hover:bg-gray-600">
              <MoreVertical className="h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-red-600 hover:bg-red-700"
              onClick={handleLeaveCall}
            >
              <PhoneOff className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 border-l border-gray-700 flex flex-col">
          <Tabs defaultValue="chat" className="flex flex-col h-full">
            <TabsList className="grid grid-cols-3 bg-gray-800">
              <TabsTrigger value="chat" className="data-[state=active]:bg-gray-700">
                <MessageSquare className="h-4 w-4 mr-2" />
                Chat
              </TabsTrigger>
              <TabsTrigger value="participants" className="data-[state=active]:bg-gray-700">
                <Users className="h-4 w-4 mr-2" />
                People
              </TabsTrigger>
              <TabsTrigger value="notes" className="data-[state=active]:bg-gray-700">
                <Paperclip className="h-4 w-4 mr-2" />
                Notes
              </TabsTrigger>
            </TabsList>

            <TabsContent value="chat" className="flex-1 flex flex-col">
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages.length === 0 ? (
                  <div className="text-center text-gray-500 py-8">
                    <MessageSquare className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p>No messages yet</p>
                    <p className="text-sm">Send a message to start the conversation</p>
                  </div>
                ) : (
                  messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          msg.sender === "You" ? "bg-teal-600 text-white" : "bg-gray-700 text-white"
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium text-sm">{msg.sender}</span>
                          <span className="text-xs opacity-70 ml-2">{msg.time}</span>
                        </div>
                        <p>{msg.text}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="p-4 border-t border-gray-700">
                <div className="flex space-x-2">
                  <Input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="bg-gray-700 border-gray-600 text-white"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        sendMessage()
                      }
                    }}
                  />
                  <Button onClick={sendMessage} className="bg-teal-600 hover:bg-teal-700">
                    Send
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="participants" className="flex-1 p-4 overflow-y-auto">
              <h3 className="font-medium text-white mb-4">Participants (2)</h3>
              <div className="space-y-3">
                {participants.map((participant) => (
                  <div
                    key={participant.id}
                    className="flex items-center justify-between p-2 rounded-md hover:bg-gray-700"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                        {participant.name === "You" ? "Y" : "SJ"}
                      </div>
                      <div>
                        <p className="font-medium text-white">{participant.name}</p>
                        <p className="text-xs text-gray-400">{participant.isSpeaking ? "Speaking" : "Not speaking"}</p>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {participant.name !== "You" && (
                        <>
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center ${participant.isAudioOn ? "bg-gray-700" : "bg-red-600"}`}
                          >
                            {participant.isAudioOn ? <Mic className="h-3 w-3" /> : <MicOff className="h-3 w-3" />}
                          </div>
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center ${participant.isVideoOn ? "bg-gray-700" : "bg-red-600"}`}
                          >
                            {participant.isVideoOn ? (
                              <VideoIcon className="h-3 w-3" />
                            ) : (
                              <VideoOff className="h-3 w-3" />
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="notes" className="flex-1 flex flex-col">
              <div className="flex-1 p-4">
                <Textarea
                  placeholder="Take notes during your consultation..."
                  className="bg-gray-700 border-gray-600 text-white h-full resize-none"
                />
              </div>
              <div className="p-4 border-t border-gray-700">
                <Button className="w-full bg-teal-600 hover:bg-teal-700">Save Notes</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
