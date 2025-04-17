"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { useState } from "react"
import MainNav from "@/components/navigation/main-nav"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            <span className="text-teal-400">Tenacity</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <MainNav />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-teal-400 transition-colors">
                Home
              </Link>
              <Link href="/schedule" className="text-white hover:text-teal-400 transition-colors">
                Schedule
              </Link>
              <Link href="/dashboard/appointments" className="text-white hover:text-teal-400 transition-colors">
                My Appointments
              </Link>
              <Link href="#" className="text-white hover:text-teal-400 transition-colors">
                Resources
              </Link>
              <Link href="#" className="text-white hover:text-teal-400 transition-colors">
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

