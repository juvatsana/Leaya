import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import Navbar from '@/components/NavBar/NavBar'

export default function MyApp({ Component, pageProps }: AppProps) {

  const heroSectionStyle = {
    backgroundImage: "url('/assets/background.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#0C0C0C',
    backgroundSize: '155% auto',
  }

  return (
    <main style={heroSectionStyle} className="min-h-screen overflow-hidden">
      <Navbar></Navbar>
      <Component {...pageProps} />
    </main>
  )
}
