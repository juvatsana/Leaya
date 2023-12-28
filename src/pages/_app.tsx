import type { AppProps } from 'next/app'
import { Raleway } from 'next/font/google'
import 'tailwindcss/tailwind.css'

// If loading a variable font, you don't need to specify the font weight
const raleway = Raleway({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={raleway.className}>
      <Component {...pageProps} />
    </main>
  )
}
