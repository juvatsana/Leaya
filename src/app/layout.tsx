import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import { Raleway } from 'next/font/google'

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Leaya',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
