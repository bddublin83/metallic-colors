"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CalendarClock, Users, Video, Clock, Loader2 } from "lucide-react"
import { saveAppointment, getAvailableTimeSlots } from "@/actions/appointment-actions"
import { useRouter } from "next/navigation"

// Consultation types
const CONSULTATION_TYPES = [
  { id: "one-on-one", name: "One-on-One Session", icon: <Video className="h-5 w-5 mr-2" /> },
  { id: "group", name: "Group Session", icon: <Users className="h-5 w-5 mr-2" /> },
  { id: "follow-up", name: "Follow-up Appointment", icon: <CalendarClock className="h-5 w-5 mr-2" /> },
]

// Duration options
const DURATION_OPTIONS = [
  { value: "15", label: "15 minutes" },
  { value: "30", label: "30 minutes" },
  { value: "45", label: "45 minutes" },
  { value: "60", label: "60 minutes" },
  { value: "custom", label: "Custom duration" },
]

export default function SchedulingCalendar() {
  const router = useRouter()
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null)
  const [consultationType, setConsultationType] = useState<string>("one-on-one")
  const [duration, setDuration] = useState<string>("30")
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false)
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  })
  const [useCustomTime, setUseCustomTime] = useState<boolean>(false)
  const [customTime, setCustomTime] = useState<string>("12:00")
  const [customDuration, setCustomDuration] = useState<string>("75")
  const [isNewPatient, setIsNewPatient] = useState<boolean>(false)
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSaving, setIsSaving] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  // Fetch available time slots when date changes
  useEffect(() => {
    async function fetchAvailableSlots() {
      if (!date) return

      setIsLoading(true)
      setError(null)

      try {
        const formattedDate = date.toISOString().split("T")[0] // Format as YYYY-MM-DD
        const result = await getAvailableTimeSlots(formattedDate)

        if (result.success) {
          setAvailableTimeSlots(result.availableSlots)
        } else {
          setError(result.message || "Failed to load available time slots")
          setAvailableTimeSlots([])
        }
      } catch (err) {
        console.error("Error fetching time slots:", err)
        setError("An unexpected error occurred. Please try again.")
        setAvailableTimeSlots([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchAvailableSlots()
  }, [date])

  const handleTimeSlotSelect = (timeSlot: string) => {
    setSelectedTimeSlot(timeSlot)
  }

  const handleContinue = () => {
    if (date && selectedTimeSlot) {
      setIsConfirmDialogOpen(true)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      if (date && selectedTimeSlot) {
        handleContinue()
      }
    }
  }

  // Add this function to handle Enter key press in the confirmation dialog
  const handleConfirmKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && formData.name && formData.email && !isSaving) {
      e.preventDefault()
      handleConfirmBooking()
    }
  }

  const handleConfirmBooking = async () => {
    if (!date || !selectedTimeSlot) return

    setIsSaving(true)
    setError(null)

    try {
      // Create form data to submit
      const formDataToSubmit = new FormData()
      formDataToSubmit.append("date", date.toISOString().split("T")[0])
      formDataToSubmit.append("time", selectedTimeSlot)
      formDataToSubmit.append("consultationType", consultationType)
      formDataToSubmit.append("duration", duration)
      if (duration === "custom") {
        formDataToSubmit.append("customDuration", customDuration)
      }
      formDataToSubmit.append("isNewPatient", isNewPatient.toString())
      formDataToSubmit.append("name", formData.name)
      formDataToSubmit.append("email", formData.email)
      formDataToSubmit.append("phone", formData.phone)
      formDataToSubmit.append("notes", formData.notes)

      // Submit the form data
      const result = await saveAppointment(formDataToSubmit)

      if (result.success && result.appointment) {
        // Save to localStorage
        const existingAppointments = localStorage.getItem("appointments")
        let appointments = []

        if (existingAppointments) {
          appointments = JSON.parse(existingAppointments)
        }

        appointments.push(result.appointment)
        localStorage.setItem("appointments", JSON.stringify(appointments))

        setSuccessMessage(result.message || "Appointment scheduled successfully")
        setIsConfirmDialogOpen(false)
        setIsSuccessDialogOpen(true)
      } else {
        setError(result.message || "Failed to schedule appointment")
      }
    } catch (err) {
      console.error("Error saving appointment:", err)
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setIsSaving(false)
    }
  }

  const resetForm = () => {
    setDate(undefined)
    setSelectedTimeSlot(null)
    setConsultationType("one-on-one")
    setDuration("30")
    setFormData({
      name: "",
      email: "",
      phone: "",
      notes: "",
    })
    setIsSuccessDialogOpen(false)

    // Navigate to the appointments dashboard
    router.push("/dashboard/appointments")
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Calendar Column */}
      <Card className="lg:col-span-2 bg-gray-800 border-gray-700">
        <CardContent className="p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Select Date</h3>
            <p className="text-gray-400 mb-4">Choose a date for your consultation</p>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="bg-gray-800 text-white rounded-md border border-gray-700"
              disabled={(date) => {
                // Disable past dates and weekends for this demo
                const now = new Date()
                now.setHours(0, 0, 0, 0)
                const day = date.getDay()
                return date < now || day === 0 || day === 6
              }}
            />
          </div>

          {date && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Select Time</h3>
              <p className="text-gray-400 mb-4">Available time slots for {date.toLocaleDateString()}</p>

              {isLoading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-8 w-8 text-teal-500 animate-spin" />
                  <span className="ml-2 text-gray-300">Loading available time slots...</span>
                </div>
              ) : error ? (
                <div className="text-red-400 bg-red-900 bg-opacity-20 p-4 rounded-md">{error}</div>
              ) : availableTimeSlots.length > 0 ? (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-4">
                    {availableTimeSlots.map((timeSlot) => (
                      <Button
                        key={timeSlot}
                        variant={selectedTimeSlot === timeSlot && !useCustomTime ? "default" : "outline"}
                        className={`
                          ${selectedTimeSlot === timeSlot && !useCustomTime ? "bg-teal-600 hover:bg-teal-700" : "bg-gray-700 hover:bg-gray-600 text-white"}
                          transition-all duration-200
                        `}
                        onClick={() => {
                          handleTimeSlotSelect(timeSlot)
                          setUseCustomTime(false)
                        }}
                      >
                        {timeSlot}
                      </Button>
                    ))}
                  </div>

                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="custom-time"
                        checked={useCustomTime}
                        onChange={(e) => {
                          setUseCustomTime(e.target.checked)
                          if (e.target.checked) {
                            setSelectedTimeSlot(customTime)
                          } else if (availableTimeSlots.length > 0) {
                            setSelectedTimeSlot(availableTimeSlots[0])
                          }
                        }}
                        className="h-4 w-4 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500"
                      />
                      <label htmlFor="custom-time" className="ml-2 text-white">
                        Set custom time
                      </label>
                    </div>
                  </div>

                  {useCustomTime && (
                    <div className="mb-4">
                      <label htmlFor="custom-time-input" className="block text-sm font-medium text-white mb-1">
                        Enter custom time (24-hour format)
                      </label>
                      <div className="flex items-center">
                        <input
                          type="time"
                          id="custom-time-input"
                          value={customTime}
                          onChange={(e) => {
                            setCustomTime(e.target.value)
                            setSelectedTimeSlot(e.target.value)
                          }}
                          className="bg-gray-700 border-gray-600 text-white rounded-md p-2 w-40"
                        />
                        <span className="ml-2 text-gray-400 text-sm">Format: HH:MM (e.g., 14:30 for 2:30 PM)</span>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <p className="text-amber-400">No available time slots for this date. Please select another date.</p>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Options Column */}
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6" onKeyDown={handleKeyDown}>
          <h3 className="text-xl font-semibold text-white mb-4">Consultation Details</h3>

          <div className="space-y-6">
            <div>
              <Label htmlFor="consultation-type" className="text-white mb-2 block">
                Consultation Type
              </Label>
              <div className="space-y-2">
                {CONSULTATION_TYPES.map((type) => (
                  <Button
                    key={type.id}
                    type="button"
                    variant={consultationType === type.id ? "default" : "outline"}
                    className={`
                      w-full justify-start text-left mb-2
                      ${consultationType === type.id ? "bg-teal-600 hover:bg-teal-700" : "bg-gray-700 hover:bg-gray-600 text-white"}
                    `}
                    onClick={() => setConsultationType(type.id)}
                  >
                    {type.icon}
                    {type.name}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="duration" className="text-white mb-2 block">
                Duration
              </Label>
              <Select
                value={duration}
                onValueChange={(value) => {
                  setDuration(value)
                }}
              >
                <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-gray-600 text-white">
                  {DURATION_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value} className="focus:bg-gray-600">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {option.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {duration === "custom" && (
                <div className="mt-2">
                  <Label htmlFor="custom-duration" className="text-white mb-1 block text-sm">
                    Custom duration (minutes)
                  </Label>
                  <div className="flex items-center">
                    <Input
                      id="custom-duration"
                      type="number"
                      min="5"
                      max="240"
                      step="5"
                      value={customDuration}
                      onChange={(e) => setCustomDuration(e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white w-24"
                    />
                    <span className="ml-2 text-gray-400 text-sm">minutes</span>
                  </div>
                </div>
              )}

              <div className="mt-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="new-patient"
                    checked={isNewPatient}
                    onChange={(e) => setIsNewPatient(e.target.checked)}
                    className="h-4 w-4 text-teal-600 bg-gray-700 border-gray-600 rounded focus:ring-teal-500"
                  />
                  <label htmlFor="new-patient" className="ml-2 text-white">
                    New Patient
                  </label>
                </div>
                {isNewPatient && (
                  <p className="text-sm text-amber-400 mt-1">
                    New patient appointments may require additional time for initial assessment.
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <div className="space-y-2">
                <Label htmlFor="quick-name" className="text-white">
                  Full Name
                </Label>
                <Input
                  id="quick-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quick-email" className="text-white">
                  Email
                </Label>
                <Input
                  id="quick-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <Button
                className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                disabled={!date || !selectedTimeSlot}
                onClick={handleContinue}
              >
                Continue to Book
              </Button>

              <Button
                className="w-full bg-gray-700 hover:bg-gray-600 text-white"
                disabled={!date || !selectedTimeSlot || !formData.name || !formData.email}
                onClick={() => {
                  // Skip confirmation dialog and directly book appointment
                  if (date && selectedTimeSlot && formData.name && formData.email) {
                    handleConfirmBooking()
                  }
                }}
              >
                Enter to Complete Booking
              </Button>

              {(!date || !selectedTimeSlot) && (
                <p className="text-amber-400 text-sm mt-2">Please select both a date and time to continue</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Confirmation Dialog */}
      <Dialog open={isConfirmDialogOpen} onOpenChange={setIsConfirmDialogOpen}>
        <DialogContent className="bg-gray-800 text-white border-gray-700 sm:max-w-md" onKeyDown={handleConfirmKeyDown}>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold classic-metallic-teal">Confirm Your Appointment</DialogTitle>
            <DialogDescription className="text-gray-300">
              Please provide your information to complete the booking.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onKeyDown={handleConfirmKeyDown}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onKeyDown={handleConfirmKeyDown}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onKeyDown={handleConfirmKeyDown}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-white">
                  Notes (Optional)
                </Label>
                <Textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="Any specific topics you'd like to discuss?"
                  rows={3}
                />
              </div>
            </div>

            <div className="bg-gray-700 p-4 rounded-md">
              <h4 className="font-medium text-white mb-2">Appointment Summary</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Date: {date?.toLocaleDateString()}</p>
                <p>Time: {selectedTimeSlot}</p>
                <p>Type: {CONSULTATION_TYPES.find((t) => t.id === consultationType)?.name}</p>
                <p>
                  Duration:{" "}
                  {duration === "custom"
                    ? `${customDuration} minutes`
                    : DURATION_OPTIONS.find((d) => d.value === duration)?.label}
                </p>
                {isNewPatient && <p className="text-amber-400">New Patient</p>}
              </div>
            </div>

            {error && <div className="text-red-400 bg-red-900 bg-opacity-20 p-4 rounded-md">{error}</div>}
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsConfirmDialogOpen(false)}
              className="bg-gray-700 hover:bg-gray-600 text-white"
              disabled={isSaving}
            >
              Cancel
            </Button>
            <Button
              onClick={handleConfirmBooking}
              className="bg-teal-600 hover:bg-teal-700 text-white"
              disabled={!formData.name || !formData.email || isSaving}
            >
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Confirm Booking"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={isSuccessDialogOpen} onOpenChange={setIsSuccessDialogOpen}>
        <DialogContent className="bg-gray-800 text-white border-gray-700 sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold classic-metallic-teal">Appointment Confirmed!</DialogTitle>
            <DialogDescription className="text-gray-300">
              Your consultation has been successfully scheduled.
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <div className="bg-gray-700 p-4 rounded-md mb-4">
              <h4 className="font-medium text-white mb-2">Appointment Details</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Date: {date?.toLocaleDateString()}</p>
                <p>Time: {selectedTimeSlot}</p>
                <p>Type: {CONSULTATION_TYPES.find((t) => t.id === consultationType)?.name}</p>
                <p>
                  Duration:{" "}
                  {duration === "custom"
                    ? `${customDuration} minutes`
                    : DURATION_OPTIONS.find((d) => d.value === duration)?.label}
                </p>
                {isNewPatient && <p className="text-amber-400">New Patient</p>}
              </div>
            </div>

            <p className="text-gray-300 mb-4">
              We've sent a confirmation email to <span className="font-medium">{formData.email}</span> with all the
              details and instructions for joining the video call.
            </p>

            <p className="text-amber-400 text-sm">
              Please add this appointment to your calendar and make sure to join 5 minutes before the scheduled time.
            </p>
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button onClick={resetForm} className="bg-teal-600 hover:bg-teal-700 text-white">
              View My Appointments
            </Button>
            <Button
              onClick={() => {
                setIsSuccessDialogOpen(false)
                router.push("/")
              }}
              variant="outline"
              className="border-gray-700 hover:bg-gray-800 text-white"
            >
              Return to Home
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
