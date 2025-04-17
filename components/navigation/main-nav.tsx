"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MainNav() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/schedule",
      label: "Schedule",
      active: pathname === "/schedule",
    },
    {
      href: "/dashboard/appointments",
      label: "My Appointments",
      active: pathname === "/dashboard/appointments",
    },
    {
      href: "#",
      label: "Resources",
      active: false,
    },
    {
      href: "#",
      label: "About",
      active: false,
    },
  ]

  return (
    <nav className="hidden md:flex space-x-8">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={`text-white hover:text-teal-400 transition-colors ${route.active ? "text-teal-400" : ""}`}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

