import { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Chirag Industries',
  description: 'Get in touch with Chirag Industries for inquiries, quotes, or business partnerships. Located in Kathwada GIDC, Ahmedabad.',
}

export default function ContactPage() {
  return (
    <div className="bg-cream-100">
      {/* Hero */}
      <section className="bg-white border-b border-forest-100">
        <div className="section-container py-10 lg:py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-forest-100 text-forest-800 px-4 py-2 rounded-full text-sm font-medium mb-5">
              <span className="w-2 h-2 bg-forest-500 rounded-full" />
              Contact Us
            </div>
            <h1 className="text-display text-darkgreen mb-4">
              Let&apos;s Talk Business
            </h1>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              Have questions about our products or want to discuss bulk orders?
              We&apos;re here to help. Reach out to us and our team will get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left - Contact Info Cards */}
            <div className="space-y-4">
              <h2 className="text-h3 mb-4">Contact Information</h2>

              {/* Visit Us */}
              <div className="flex gap-4 bg-white rounded-2xl p-5 shadow-card">
                <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-forest-700" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-darkgreen mb-1">Visit Us</h3>
                  <p className="text-sm text-charcoal/70">10/C Victoria Industrial Park</p>
                  <p className="text-sm text-charcoal/70">Road No 5, Sardar Patel Ring Rd</p>
                  <p className="text-sm text-charcoal/70">Kathwada GIDC, Ahmedabad</p>
                  <p className="text-sm text-charcoal/70">Gujarat 382430, India</p>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex gap-4 bg-white rounded-2xl p-5 shadow-card">
                <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-forest-700" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-darkgreen mb-1">Call Us</h3>
                  <a href="tel:+918511633545" className="block text-sm text-charcoal/70 hover:text-forest-700 transition-colors">
                    +91 85116 33545
                  </a>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex gap-4 bg-white rounded-2xl p-5 shadow-card">
                <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-forest-700" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-darkgreen mb-1">Email Us</h3>
                  <a href="mailto:sales@chiragindustries.com" className="block text-sm text-charcoal/70 hover:text-forest-700 transition-colors">
                    sales@chiragindustries.com
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex gap-4 bg-white rounded-2xl p-5 shadow-card">
                <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-forest-700" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-darkgreen mb-1">Business Hours</h3>
                  <p className="text-sm text-charcoal/70">Monday - Saturday</p>
                  <p className="text-sm text-charcoal/70">9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-charcoal/70">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Right - Map & Company Details */}
            <div className="space-y-4">
              {/* Map */}
              <div>
                <h2 className="text-h3 mb-4">Our Location</h2>
                <div className="bg-white rounded-2xl overflow-hidden shadow-card">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5!2d72.6847!3d23.0258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87b0d0d0d0d0%3A0x0!2sVictoria%20Industrial%20Park%2C%20Kathwada%20GIDC!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Chirag Industries Location"
                  />
                  <a
                    href="https://maps.app.goo.gl/LvMG7u6CJtV1Htt6A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-forest-700 hover:bg-forest-50 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Company Details */}
              <div className="bg-darkgreen rounded-2xl p-6 text-white">
                <h3 className="font-heading font-semibold mb-4">Company Details</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-forest-200">Proprietor</dt>
                    <dd className="font-medium">Mr. Sohan Birbal Bishnoi</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-forest-200">GST Number</dt>
                    <dd className="font-mono text-xs">24CFGPB8912K1ZG</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-forest-200">Banking Partner</dt>
                    <dd className="font-medium">Canara Bank</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-forest-200">Established</dt>
                    <dd className="font-medium">2002</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
