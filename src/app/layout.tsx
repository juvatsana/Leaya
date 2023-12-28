import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'

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
        <body className='font-custom'>{children}</body>
      </html>
  )
}
