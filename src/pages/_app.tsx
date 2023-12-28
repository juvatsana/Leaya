import type { AppProps } from 'next/app'
import { Raleway } from 'next/font/google'
import 'tailwindcss/tailwind.css'


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  )
}
