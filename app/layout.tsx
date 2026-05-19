import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans"
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

export const metadata: Metadata = {
  title: 'Dhia Eddine Sadli | AI Engineer & Data Scientist',
  description: 'Building intelligent systems from data to deployment. AI Engineer and Data Scientist specializing in machine learning, deep learning, and data engineering.',
  keywords: ['AI Engineer', 'Data Scientist', 'Machine Learning', 'Deep Learning', 'Python', 'TensorFlow', 'PyTorch'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-[#0a0a0f]`}>
      <body className="font-sans antialiased bg-[#0a0a0f] text-white min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
