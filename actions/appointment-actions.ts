"use server"

import { revalidatePath } from "next/cache"

// This would be replaced with your actual database model
export type Appointment = {
  id: string
  userId: string
  date: string
  time: string
  consultationType: string
  duration: string
  isNewPatient: boolean
  patientName: string
  patientEmail: string
  patientPhone: string
  notes: string
  status: "confirmed" | "completed" | "cancelled"
  createdAt: string
}

// In-memory storage for demo purposes
// In a real app, you would use a database like Supabase, MongoDB, etc.
const appointments: Appointment[] = []

export async function saveAppointment(formData: FormData) {
  try {
    // Extract data from form
    const date = formData.get("date") as string
    const time = formData.get("time") as string
    const consultationType = formData.get("consultationType") as string
    const duration = formData.get("duration") as string
    const customDuration = formData.get("customDuration") as string
    const isNewPatient = formData.get("isNewPatient") === "true"
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const notes = formData.get("notes") as string

    // Validate required fields
    if (!date || !time || !consultationType || !name || !email) {
      return { success: false, message: "Missing required fields" }
    }

    // Create appointment object
    const newAppointment: Appointment = {
      id: Date.now().toString(), // Generate a unique ID
      userId: "current-user-id", // In a real app, this would come from authentication
      date,
      time,
      consultationType,
      duration: duration === "custom" ? customDuration : duration,
      isNewPatient,
      patientName: name,
      patientEmail: email,
      patientPhone: phone,
      notes,
      status: "confirmed",
      createdAt: new Date().toISOString(),
    }

    // In a real app, you would save to a database
    // For demo purposes, we'll just add to our in-memory array
    appointments.push(newAppointment)

    // Revalidate relevant paths to update UI
    revalidatePath("/schedule")
    revalidatePath("/dashboard/appointments")

    return {
      success: true,
      message: "Appointment scheduled successfully",
      appointmentId: newAppointment.id,
      appointment: newAppointment, // Return the appointment for client-side storage
    }
  } catch (error) {
    console.error("Error saving appointment:", error)
    return {
      success: false,
      message: "Failed to schedule appointment. Please try again.",
    }
  }
}

export async function getAvailableTimeSlots(date: string) {
  try {
    // Define all possible time slots
    const ALL_TIME_SLOTS = [
      "9:00 AM",
      "9:15 AM",
      "9:30 AM",
      "9:45 AM",
      "10:00 AM",
      "10:15 AM",
      "10:30 AM",
      "10:45 AM",
      "11:00 AM",
      "11:15 AM",
      "11:30 AM",
      "11:45 AM",
      "1:00 PM",
      "1:15 PM",
      "1:30 PM",
      "1:45 PM",
      "2:00 PM",
      "2:15 PM",
      "2:30 PM",
      "2:45 PM",
      "3:00 PM",
      "3:15 PM",
      "3:30 PM",
      "3:45 PM",
      "4:00 PM",
      "4:15 PM",
      "4:30 PM",
      "4:45 PM",
    ]

    // Get booked slots for this date
    const bookedAppointments = appointments.filter((apt) => apt.date === date)
    const bookedSlots = bookedAppointments.map((apt) => apt.time)

    // Filter out booked slots
    const availableSlots = ALL_TIME_SLOTS.filter((slot) => !bookedSlots.includes(slot))

    return {
      success: true,
      availableSlots,
    }
  } catch (error) {
    console.error("Error fetching available time slots:", error)
    return {
      success: false,
      message: "Failed to fetch available time slots",
      availableSlots: [],
    }
  }
}
