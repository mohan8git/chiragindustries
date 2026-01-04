import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react'

const navigation = {
  products: [
    { name: 'Bakelite Handle', href: '/products?category=bakelite' },
    { name: 'Wire Handle', href: '/products?category=wire' },
    { name: 'Oval Handle', href: '/products?category=oval' },
    { name: 'Knob', href: '/products?category=knob' },
    { name: 'Cooker Handle', href: '/products?category=cooker' },
    { name: 'Plastic Wire Handle', href: '/products?category=plastic-wire' },
    { name: 'Flame Guard', href: '/products?category=flameguard' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-darkgreen text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="section-container py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-xl font-heading font-semibold mb-2">
                Stay Updated
              </h3>
              <p className="text-forest-200 text-sm">
                Get the latest updates on new products and industry news.
              </p>
            </div>
            <form className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-72 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-forest-300 focus:outline-none focus:border-white/40 transition-colors"
              />
              <button type="submit" className="btn-secondary whitespace-nowrap">
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white">
                <Image
                  src={`${process.env.NEXT_PUBLIC_CDN_URL}/ci-logo-2.png`}
                  alt="Chirag Industries Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="block font-heading font-semibold">Chirag Industries</span>
                <span className="block text-xs text-forest-300">Est. 2002</span>
              </div>
            </Link>
            <p className="text-forest-200 text-sm leading-relaxed mb-4">
              Manufacturing premium cookware handles and components for Indian kitchens since 2002.
            </p>
            <div className="text-xs text-forest-300">
              <span className="font-medium text-forest-200">GST:</span> 24CFGPB8912K1ZG
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-forest-200 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-forest-200 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin className="h-5 w-5 text-forest-400 flex-shrink-0" />
                <span className="text-forest-200">
                  10/C Victoria Industrial Park,<br />
                  Kathwada GIDC, Ahmedabad,<br />
                  Gujarat 382430
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone className="h-5 w-5 text-forest-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-forest-200 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail className="h-5 w-5 text-forest-400 flex-shrink-0" />
                <a href="mailto:info@chiragindustries.com" className="text-forest-200 hover:text-white transition-colors">
                  info@chiragindustries.com
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Clock className="h-5 w-5 text-forest-400 flex-shrink-0" />
                <span className="text-forest-200">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-forest-300 text-sm">
              &copy; {new Date().getFullYear()} Chirag Industries. All rights reserved.
            </p>
            <p className="text-forest-400 text-xs">
              Made with care in Ahmedabad, Gujarat
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
