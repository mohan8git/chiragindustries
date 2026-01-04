import type { Metadata } from 'next'
import { Barlow, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-barlow',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Chirag Industries - Premium Cookware Handles Manufacturer',
  description: 'Leading manufacturer of Bakelite Handles, Cookware Handles, Pan Handles, and Kitchen Hardware since 2002. Based in Ahmedabad, Gujarat.',
  keywords: 'bakelite handles, cookware handles, pan handles, kitchen hardware, manufacturer, Ahmedabad, Gujarat, India',
  openGraph: {
    title: 'Chirag Industries - Premium Cookware Handles Manufacturer',
    description: 'Leading manufacturer of Bakelite Handles, Cookware Handles, Pan Handles, and Kitchen Hardware since 2002.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${barlow.variable} ${poppins.variable}`}>
      <body className="font-body bg-cream-100 text-charcoal">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
