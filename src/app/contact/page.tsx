import { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Chirag Industries',
  description: 'Get in touch with Chirag Industries for inquiries, quotes, or business partnerships. Located in Kathwada GIDC, Ahmedabad.',
}

const contactDetails = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: [
      '10/C Victoria Industrial Park',
      'Road No 5, Sardar Patel Ring Rd',
      'Kathwada GIDC, Ahmedabad',
      'Gujarat 382430, India',
    ],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+91 98765 43210', '+91 79 1234 5678'],
    links: ['tel:+919876543210', 'tel:+917912345678'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@chiragindustries.com', 'sales@chiragindustries.com'],
    links: ['mailto:info@chiragindustries.com', 'mailto:sales@chiragindustries.com'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Monday - Saturday', '9:00 AM - 6:00 PM', 'Sunday: Closed'],
  },
]

export default function ContactPage() {
  return (
    <div className="bg-cream-100">
      {/* Hero */}
      <section className="bg-white border-b border-forest-100">
        <div className="section-container py-12 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-forest-100 text-forest-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-forest-500 rounded-full" />
              Contact Us
            </div>
            <h1 className="text-display text-darkgreen mb-6">
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-card">
              <h2 className="text-h3 mb-6">Send us a Message</h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-darkgreen mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="input-field"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-darkgreen mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="input-field"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-darkgreen mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="input-field"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-darkgreen mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="input-field"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-darkgreen mb-2">
                    Product Interest
                  </label>
                  <select id="product" name="product" className="input-field">
                    <option value="">Select a product category</option>
                    <option value="bakelite-handles">Bakelite Handles</option>
                    <option value="pan-handles">Pan Handles</option>
                    <option value="flame-guards">Cooker Flame Guards</option>
                    <option value="bakelite-knobs">Bakelite Knobs</option>
                    <option value="tubular-handles">Tubular Handles</option>
                    <option value="custom">Custom Requirements</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-darkgreen mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="input-field resize-none"
                    placeholder="Tell us about your requirements, quantities needed, or any questions..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-h3 mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactDetails.map((item, index) => (
                  <div key={index} className="flex gap-4 bg-white rounded-2xl p-5 shadow-card">
                    <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-forest-700" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-darkgreen mb-1">{item.title}</h3>
                      {item.lines.map((line, lineIndex) =>
                        item.links ? (
                          <a
                            key={lineIndex}
                            href={item.links[lineIndex]}
                            className="block text-sm text-charcoal/70 hover:text-forest-700 transition-colors"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={lineIndex} className="text-sm text-charcoal/70">
                            {line}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-8">
                <div className="bg-white rounded-2xl overflow-hidden shadow-card">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8!2d72.68!3d23.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzEyLjAiTiA3MsKwNDAnNDguMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Chirag Industries Location"
                  />
                </div>
              </div>

              {/* Quick Info */}
              <div className="mt-8 bg-darkgreen rounded-2xl p-6 text-white">
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
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
