"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, Video, Users, Loader2 } from "lucide-react"
import Link from "next/link"
import type { Appointment } from "@/actions/appointment-actions"

export default function AppointmentList({ tabValue }: { tabValue: string }) {
  const [isLoading, setIsLoading] = useState(true)
  const [upcomingAppointments, setUpcomingAppointments] = useState<Appointment[]>([])
  const [pastAppointments, setPastAppointments] = useState<Appointment[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Load appointments from localStorage on the client side
    const loadAppointments = () => {
      setIsLoading(true)
      try {
        // Get appointments from localStorage
        const appointmentsJson = localStorage.getItem("appointments")

        if (appointmentsJson) {
          const appointmentsData = JSON.parse(appointmentsJson) as Appointment[]

          // Split into upcoming and past
          const now = new Date()

          const upcoming = appointmentsData.filter((apt: Appointment) => {
            const aptDate = new Date(`${apt.date}T${apt.time}`)
            return aptDate > now && apt.status !== "cancelled"
          })

          const past = appointmentsData.filter((apt: Appointment) => {
            const aptDate = new Date(`${apt.date}T${apt.time}`)
            return aptDate <= now || apt.status === "completed"
          })

          setUpcomingAppointments(upcoming)
          setPastAppointments(past)
        }
      } catch (error) {
        console.error("Error loading appointments:", error)
        setError("Failed to load appointments. Please try again.")
      } finally {
        setIsLoading(false)
      }
    }

    loadAppointments()

    // Set up an interval to refresh appointments (simulating real-time updates)
    const interval = setInterval(loadAppointments, 5000)

    return () => clearInterval(interval)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 text-teal-500 animate-spin" />
        <span className="ml-2 text-white">Loading appointments...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12 bg-red-900 bg-opacity-20 rounded-xl">
        <p className="text-red-400">{error}</p>
        <Button className="mt-4 bg-teal-600 hover:bg-teal-700 text-white" onClick={() => window.location.reload()}>
          Try Again
        </Button>
      </div>
    )
  }

  // Show the appropriate appointments based on the active tab
  const appointments = tabValue === "upcoming" ? upcomingAppointments : pastAppointments

  if (appointments.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-900 bg-opacity-60 backdrop-blur-sm rounded-xl">
        <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-500" />
        <h3 className="text-xl font-medium text-white mb-2">
          No {tabValue === "upcoming" ? "Upcoming" : "Past"} Appointments
        </h3>
        <p className="text-gray-400 mb-6">
          {tabValue === "upcoming"
            ? "You don't have any scheduled appointments."
            : "You haven't had any appointments yet."}
        </p>
        {tabValue === "upcoming" && (
          <Link href="/schedule">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">Schedule an Appointment</Button>
          </Link>
        )}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {appointments.map((appointment) => (
        <Card
          key={appointment.id}
          className={`bg-gray-900 bg-opacity-80 backdrop-blur-sm border-gray-800 ${
            tabValue === "upcoming" ? "hover:border-teal-500 transition-all duration-300" : ""
          }`}
        >
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{appointment.consultationType}</h3>
                <p className="text-gray-300">with Dr. Sarah Johnson</p>
                {appointment.isNewPatient && (
                  <span className="inline-block mt-1 px-2 py-0.5 bg-amber-600 bg-opacity-20 text-amber-400 text-xs font-medium rounded-full">
                    New Patient
                  </span>
                )}
              </div>
              <div
                className={`px-3 py-1 rounded-full ${
                  tabValue === "upcoming" ? "bg-teal-600 bg-opacity-20 text-teal-400" : "bg-gray-700 text-gray-300"
                } text-sm font-medium`}
              >
                {appointment.status}
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <Calendar className="h-5 w-5 mr-3 text-teal-400" />
                <span>{new Date(appointment.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="h-5 w-5 mr-3 text-teal-400" />
                <span>
                  {appointment.time} ({appointment.duration} minutes)
                </span>
              </div>
              <div className="flex items-center text-gray-300">
                {appointment.consultationType.includes("group") ? (
                  <Users className="h-5 w-5 mr-3 text-teal-400" />
                ) : (
                  <Video className="h-5 w-5 mr-3 text-teal-400" />
                )}
                <span>{appointment.consultationType}</span>
              </div>
            </div>

            {tabValue === "upcoming" ? (
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={`/video-call/${appointment.id}`} className="flex-1">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">Join Call</Button>
                </Link>
                <Button variant="outline" className="flex-1 border-gray-700 hover:bg-gray-800 text-white">
                  Reschedule
                </Button>
              </div>
            ) : (
              <div className="flex gap-3">
                <Button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white">View Summary</Button>
                <Link href="/schedule" className="flex-1">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">Book Follow-up</Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
