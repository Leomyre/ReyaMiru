"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [scrolling, setScrolling] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Ability" },
    { href: "/contact", label: "Contact" },
  ]

  return (
   <header
  className={`bg-gray-800/50 backdrop-filter backdrop-blur-lg border-b border-gray-700/20 sticky top-0 z-50 ${
    scrolling ? "shadow-lg" : "shadow-none"
  } transition-all duration-300 ease-in-out`}
>
  <nav className="container mx-auto px-4 sm:px-6 py-2">
    <div className="flex justify-between items-center">
        <div className="flex flex-col items-center bg-gray-900/50 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
  <Link href="https://nexuscraft.onrender.com/">
    <img
      src="/Nexus-removebg-preview.png"
      alt="Nexus logo"
      className="w-[1.5in] h-[0.75in] object-contain"
    />
  </Link>
</div>



        {/* Liens de navigation */}
        <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`text-gray-200 hover:text-blue-400 transition-colors duration-300 font-medium ${
                        scrolling ? "text-white" : "text-gray-200"
                    }`}
                >
                    {item.label}
                </Link>
            ))}
        </div>

        {/* Menu hamburger pour petits écrans */}
        <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
        >
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                {isOpen ? (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                ) : (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                )}
            </svg>
        </button>
    </div>

    {/* Menu déroulant pour petits écrans */}
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4"
            >
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 text-gray-200 hover:text-blue-400 transition-colors duration-300 font-medium"
                        onClick={() => setIsOpen(false)}
                    >
                        {item.label}
                    </Link>
                ))}
            </motion.div>
        )}
    </AnimatePresence>
</nav>

</header>

  )
}

