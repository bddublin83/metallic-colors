"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import AppointmentList from "@/components/dashboard/appointment-list"

export default function AppointmentsPage() {
  const [activeTab, setActiveTab] = useState("upcoming")

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
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 classic-metallic-teal">My Appointments</h1>
            <p className="text-xl text-gray-300">View and manage your scheduled consultations</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link href="/schedule">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">Schedule New Appointment</Button>
            </Link>
          </div>
        </div>

        <Tabs defaultValue="upcoming" className="w-full" onValueChange={(value) => setActiveTab(value)}>
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-teal-600">
              Upcoming
            </TabsTrigger>
            <TabsTrigger value="past" className="data-[state=active]:bg-teal-600">
              Past
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <AppointmentList tabValue="upcoming" />
          </TabsContent>

          <TabsContent value="past">
            <AppointmentList tabValue="past" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
