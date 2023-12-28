import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
        rel="stylesheet"
      ></link>
      <body>{children}</body>
    </html>
  )
}
