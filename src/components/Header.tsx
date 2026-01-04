'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-darkgreen text-white text-center py-2.5 px-4">
        <p className="text-sm font-medium">
          <span className="hidden sm:inline">Trusted Manufacturer Since 2002 — </span>
          Quality Cookware Handles for Indian Kitchens
        </p>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream-100/95 backdrop-blur-md shadow-sm'
            : 'bg-cream-100'
        }`}
      >
        <nav className="section-container">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl overflow-hidden transition-transform group-hover:scale-105">
                <Image
                  src={`${process.env.NEXT_PUBLIC_CDN_URL}/ci-logo-2.png`}
                  alt="Chirag Industries Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div>
                <span className="block text-base sm:text-lg font-heading font-bold text-darkgreen">
                  Chirag Industries
                </span>
                <span className="block text-[10px] sm:text-xs text-forest-600">Est. 2002 • Ahmedabad</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '?')

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-forest-100 text-darkgreen'
                        : 'text-charcoal hover:text-darkgreen hover:bg-forest-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+918511633545"
                className="flex items-center gap-2 text-sm text-charcoal hover:text-darkgreen transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+91 85116 33545</span>
              </a>
              <Link href="/contact" className="btn-primary">
                Get Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-charcoal hover:bg-forest-50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 bg-cream-100 border-t border-forest-100 ${
            mobileMenuOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="section-container py-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-forest-100 text-darkgreen'
                      : 'text-charcoal hover:bg-forest-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}

            <div className="pt-4 mt-4 border-t border-forest-100 space-y-3">
              <a
                href="tel:+918511633545"
                className="flex items-center gap-3 px-4 py-2 text-charcoal"
              >
                <Phone className="h-5 w-5 text-forest-600" />
                <span>+91 85116 33545</span>
              </a>
              <a
                href="mailto:info@chiragindustries.com"
                className="flex items-center gap-3 px-4 py-2 text-charcoal"
              >
                <Mail className="h-5 w-5 text-forest-600" />
                <span>info@chiragindustries.com</span>
              </a>
              <Link
                href="/contact"
                className="btn-primary w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
