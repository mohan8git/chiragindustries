import { Metadata } from 'next'
import Link from 'next/link'
import { Award, Users, Factory, Target, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Chirag Industries',
  description: 'Learn about Chirag Industries - established in 2002, a leading manufacturer of cookware handles based in Ahmedabad, Gujarat.',
}

const timeline = [
  { year: '2002', title: 'Founded', description: 'Started our journey in Ahmedabad with a vision to manufacture quality cookware components.' },
  { year: '2010', title: 'Expansion', description: 'Expanded manufacturing capacity and added new product lines to serve growing demand.' },
  { year: '2017', title: 'GST Registration', description: 'Formalized operations with GST registration, strengthening our business processes.' },
  { year: '2020', title: 'Recognition', description: 'Achieved IndiaMART Rank-A verified supplier status for excellence in service.' },
  { year: 'Today', title: 'Growing Strong', description: 'Serving 100+ clients across India with premium quality products.' },
]

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'Every product undergoes rigorous quality checks before leaving our facility.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Building lasting relationships through reliable service and support.',
  },
  {
    icon: Factory,
    title: 'Innovation',
    description: 'Continuously improving our processes and product designs.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Striving for the highest standards in everything we do.',
  },
]

const stats = [
  { label: 'Year Established', value: '2002' },
  { label: 'Team Size', value: '51-100' },
  { label: 'Annual Turnover', value: '40L-1.5Cr' },
  { label: 'Customer Rating', value: '5.0' },
]

export default function AboutPage() {
  return (
    <div className="bg-cream-100">
      {/* Hero */}
      <section className="bg-white border-b border-forest-100">
        <div className="section-container py-12 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-forest-100 text-forest-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-forest-500 rounded-full" />
              About Us
            </div>
            <h1 className="text-display text-darkgreen mb-6">
              Crafting Quality Since 2002
            </h1>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              From a small manufacturing unit to a recognized name in the industry,
              Chirag Industries has been serving cookware manufacturers across India
              with premium quality handles and components.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-h2 mb-6">Our Story</h2>
              <div className="space-y-4 text-charcoal/70 leading-relaxed">
                <p>
                  Established in 2002 in Ahmedabad, Gujarat, <strong className="text-darkgreen">Chirag Industries</strong> has
                  grown from a small manufacturing unit to a recognized name in the cookware components industry.
                </p>
                <p>
                  Under the leadership of <strong className="text-darkgreen">Mr. Sohan Birbal Bishnoi</strong>,
                  we have built a reputation for quality and reliability, serving cookware manufacturers across India.
                </p>
                <p>
                  Our manufacturing facility in Kathwada GIDC is equipped with modern machinery and staffed by
                  skilled workers dedicated to producing components that meet the highest standards.
                </p>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-darkgreen rounded-3xl p-8 lg:p-10 text-white">
              <h3 className="text-xl font-heading font-semibold mb-8">Company Overview</h3>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-heading font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-forest-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="text-sm text-forest-200 mb-1">GST Number</div>
                <div className="font-mono text-white">24CFGPB8912K1ZG</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-h2 mb-4">Our Values</h2>
            <p className="text-charcoal/70">
              The principles that guide everything we do at Chirag Industries.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-cream-100 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-forest-700" />
                </div>
                <h3 className="font-heading font-semibold text-darkgreen mb-2">{value.title}</h3>
                <p className="text-sm text-charcoal/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-h2 mb-4">Our Journey</h2>
            <p className="text-charcoal/70">
              Key milestones in our growth story.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-0">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-10 pb-10 last:pb-0">
                  {/* Line */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-forest-200" />
                  )}
                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-darkgreen flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>
                  {/* Content */}
                  <div className="bg-white rounded-2xl p-6 shadow-card">
                    <div className="text-sm font-medium text-forest-600 mb-1">{item.year}</div>
                    <h3 className="font-heading font-semibold text-darkgreen mb-2">{item.title}</h3>
                    <p className="text-sm text-charcoal/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-h2 mb-4">Certifications & Recognition</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-cream-100 rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-forest-700 font-heading font-bold">GST</span>
              </div>
              <h3 className="font-heading font-semibold text-darkgreen">GST Registered</h3>
              <p className="text-sm text-charcoal/60 mt-1">Since July 2017</p>
            </div>

            <div className="bg-cream-100 rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-forest-700 font-heading font-bold">A</span>
              </div>
              <h3 className="font-heading font-semibold text-darkgreen">IndiaMART Rank-A</h3>
              <p className="text-sm text-charcoal/60 mt-1">Verified Supplier</p>
            </div>

            <div className="bg-cream-100 rounded-2xl p-6 text-center">
              <div className="w-14 h-14 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gold-600 font-heading font-bold">5.0</span>
              </div>
              <h3 className="font-heading font-semibold text-darkgreen">5-Star Rating</h3>
              <p className="text-sm text-charcoal/60 mt-1">Customer Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-darkgreen">
        <div className="section-container text-center">
          <h2 className="text-h2 text-white mb-4">Want to Work With Us?</h2>
          <p className="text-forest-200 max-w-xl mx-auto mb-8">
            Partner with a trusted manufacturer for your cookware component needs.
          </p>
          <Link href="/contact" className="btn-secondary">
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
