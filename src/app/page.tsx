import Link from 'next/link'
import { ArrowRight, CheckCircle, Shield, Truck, Award, Star, Factory, Users, Package, BadgeCheck, ExternalLink } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'Heat-resistant materials tested for durability and safety.',
  },
  {
    icon: Factory,
    title: 'In-House Manufacturing',
    description: 'Complete control over quality from our Ahmedabad facility.',
  },
  {
    icon: Truck,
    title: 'Pan-India Delivery',
    description: 'Reliable shipping to manufacturers across the country.',
  },
  {
    icon: Award,
    title: '22+ Years Experience',
    description: 'Trusted expertise in cookware components since 2002.',
  },
]

const productCategories = [
  {
    name: 'Bakelite Handle',
    description: 'Heat-resistant handles for kadai, saucepan & tawa',
    count: '6 Variants',
    badge: 'Most Popular',
    href: '/products?category=bakelite',
  },
  {
    name: 'Wire Handle',
    description: 'Stainless steel wire handles for kadai, saucepan & tawa',
    count: '5 Variants',
    badge: 'Professional',
    href: '/products?category=wire',
  },
  {
    name: 'Oval Handle',
    description: 'Ergonomic oval handles for kadai & saucepan',
    count: '4 Variants',
    badge: null,
    href: '/products?category=oval',
  },
  {
    name: 'Knob',
    description: 'Durable knobs for cookware lids',
    count: '3 Variants',
    badge: null,
    href: '/products?category=knob',
  },
  {
    name: 'Cooker Handle',
    description: 'Heavy-duty handles for pressure cookers',
    count: '3 Variants',
    badge: 'Best Seller',
    href: '/products?category=cooker',
  },
  {
    name: 'Plastic Wire Handle',
    description: 'Lightweight plastic wire handles',
    count: '3 Variants',
    badge: null,
    href: '/products?category=plastic-wire',
  },
  {
    name: 'Flame Guard',
    description: 'Stainless steel guards for pressure cookers',
    count: '3 Variants',
    badge: 'Safety First',
    href: '/products?category=flameguard',
  },
]

const stats = [
  { value: '22+', label: 'Years in Business' },
  { value: '100+', label: 'Happy Clients' },
  { value: '27+', label: 'Product Variants' },
  { value: '50+', label: 'Team Members' },
]

const testimonials = [
  {
    text: 'Excellent quality handles. We have been sourcing from Chirag Industries for 5 years now. Consistent quality and timely delivery.',
    author: 'Rajesh Patel',
    company: 'Cookware Manufacturer, Mumbai',
    rating: 5,
  },
  {
    text: 'The bakelite handles are perfectly heat resistant. Our customers love the ergonomic design. Highly recommended!',
    author: 'Suresh Kumar',
    company: 'Kitchen Essentials Ltd.',
    rating: 5,
  },
  {
    text: 'Professional service and quality products. The team at Chirag Industries understands our requirements well.',
    author: 'Amit Shah',
    company: 'Gujarat Cookware Co.',
    rating: 5,
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cream-100 via-cream-50 to-forest-50 overflow-hidden min-h-screen">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-forest-200/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-forest-100/40 rounded-full blur-3xl" />
        </div>

        <div className="relative section-container py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-xl order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-forest-800 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm border border-forest-100">
                <span className="w-2 h-2 bg-forest-500 rounded-full animate-pulse" />
                Trusted Since 2002
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-darkgreen mb-6 leading-tight">
                Premium Cookware
                <span className="block bg-gradient-to-r from-forest-600 to-forest-800 bg-clip-text text-transparent">
                  Handles & Components
                </span>
              </h1>

              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From our state-of-the-art facility in Ahmedabad, we manufacture
                high-quality bakelite and stainless steel handles powering
                cookware across India.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/products" className="btn-primary">
                  Explore Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn-outline">
                  Request Quote
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full border border-forest-100">
                  <BadgeCheck className="h-4 w-4 text-forest-600" />
                  <span className="text-sm text-charcoal/70">GST Registered</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full border border-forest-100">
                  <Shield className="h-4 w-4 text-forest-600" />
                  <span className="text-sm text-charcoal/70">Quality Assured</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full border border-forest-100">
                  <Package className="h-4 w-4 text-forest-600" />
                  <span className="text-sm text-charcoal/70">Bulk Orders</span>
                </div>
              </div>
            </div>

            {/* Right Side - Bento Grid */}
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-3 gap-3 lg:gap-4">
                {/* Large Stats Card */}
                <div className="col-span-2 row-span-2 bg-darkgreen rounded-3xl p-6 lg:p-8 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-forest-600/30 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold-500/20 rounded-full blur-2xl" />
                  <div className="relative">
                    <div className="text-6xl lg:text-7xl font-heading font-bold mb-2">22+</div>
                    <div className="text-forest-200 text-lg mb-6">Years of Excellence</div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                      <div>
                        <div className="text-2xl font-heading font-bold">100+</div>
                        <div className="text-forest-300 text-sm">Happy Clients</div>
                      </div>
                      <div>
                        <div className="text-2xl font-heading font-bold">27+</div>
                        <div className="text-forest-300 text-sm">Products</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rating Card */}
                <div className="bg-white rounded-2xl p-4 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <div className="text-2xl font-heading font-bold text-darkgreen">5.0</div>
                  <div className="text-xs text-charcoal/60">Customer Rating</div>
                </div>

                {/* India Map Card */}
                <div className="bg-gradient-to-br from-forest-100 to-forest-50 rounded-2xl p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
                  <Truck className="h-8 w-8 text-forest-700 mb-2" />
                  <div className="text-xs text-center text-forest-800 font-medium">Pan-India Delivery</div>
                </div>

                {/* Product Categories - Our Range */}
                <div className="col-span-2 bg-white rounded-2xl p-4 shadow-card overflow-hidden">
                  <div className="text-xs text-charcoal/60 mb-3 font-medium uppercase tracking-wider">Our Range</div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: 'Bakelite', category: 'bakelite' },
                      { name: 'Wire', category: 'wire' },
                      { name: 'Oval', category: 'oval' },
                      { name: 'Knob', category: 'knob' },
                      { name: 'Cooker', category: 'cooker' },
                    ].map((item, i) => (
                      <Link
                        key={i}
                        href={`/products?category=${item.category}`}
                        className="px-3 py-1.5 bg-forest-50 text-forest-700 rounded-full text-sm font-medium whitespace-nowrap border border-forest-100 hover:bg-forest-100 hover:border-forest-200 transition-colors cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Factory Icon */}
                <div className="bg-gold-500 rounded-2xl p-4 flex flex-col items-center justify-center hover:rotate-3 transition-transform duration-300">
                  <Factory className="h-8 w-8 text-darkgreen mb-1" />
                  <div className="text-xs text-center text-darkgreen font-semibold">In-House Mfg</div>
                </div>

                {/* Location Card - Clickable */}
                <a
                  href="https://maps.app.goo.gl/LvMG7u6CJtV1Htt6A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-2 bg-gradient-to-r from-cream-100 to-cream-200 rounded-2xl p-4 border border-forest-100 hover:border-forest-400 hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-forest-50 transition-colors">
                      <svg className="w-5 h-5 text-forest-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-heading font-semibold text-darkgreen text-sm group-hover:text-forest-700 transition-colors">Ahmedabad, Gujarat</div>
                      <div className="text-xs text-charcoal/60">Victoria Industrial Park, Kathwada GIDC</div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-charcoal/40 group-hover:text-forest-600 transition-colors" />
                  </div>
                </a>

                {/* Quality Assured Badge */}
                <div className="bg-gradient-to-br from-forest-100 to-forest-50 rounded-2xl p-4 flex flex-col items-center justify-center border border-forest-200 hover:scale-105 transition-transform duration-300">
                  <Shield className="h-7 w-7 text-forest-700 mb-1" />
                  <div className="text-xs text-center text-forest-800 font-medium">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-forest-600">
          <span className="text-xs font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-forest-300 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-forest-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-darkgreen py-12 lg:py-16">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-heading font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-forest-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-h2 mb-4">Why Choose Chirag Industries?</h2>
            <p className="text-charcoal/70">
              Two decades of expertise in manufacturing quality cookware components
              for the Indian market.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-cream-100 rounded-2xl p-6 text-center hover:shadow-card transition-shadow"
              >
                <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-7 w-7 text-forest-700" />
                </div>
                <h3 className="font-heading font-semibold text-darkgreen mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-charcoal/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-cream-100">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <h2 className="text-h2 mb-2">Our Product Range</h2>
              <p className="text-charcoal/70">
                Complete solutions for cookware manufacturers.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-forest-700 font-medium hover:text-darkgreen transition-colors"
            >
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                {category.badge && (
                  <span className="badge badge-green mb-4">{category.badge}</span>
                )}
                <div className="w-16 h-16 bg-forest-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-forest-200 transition-colors">
                  <div className="w-8 h-8 bg-forest-300 rounded-lg" />
                </div>
                <h3 className="font-heading font-semibold text-darkgreen mb-2 group-hover:text-forest-700 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-charcoal/70 mb-3">{category.description}</p>
                <span className="text-xs font-medium text-forest-600">{category.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-h2 mb-4">Trusted by Manufacturers</h2>
            <p className="text-charcoal/70">
              Don&apos;t just take our word for it — hear from our valued clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-cream-100 rounded-2xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="text-charcoal/80 mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="font-medium text-darkgreen">{testimonial.author}</p>
                  <p className="text-sm text-charcoal/60">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-darkgreen relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }} />
        </div>

        <div className="relative section-container text-center">
          <h2 className="text-h2 text-white mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-forest-200 max-w-xl mx-auto mb-8">
            Get in touch for bulk orders, custom requirements, or product inquiries.
            Our team is here to help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              Contact Us Today
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 text-white px-8 py-3.5 rounded-pill font-medium text-sm border-2 border-white/30 hover:bg-white/10 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
