import Navbar from '@/components/NavBar/NavBar'
import { ThemeProvider, createTheme } from '@mui/material'
import type { AppProps } from 'next/app'
import 'tailwindcss/base.css'
import 'tailwindcss/components.css'
import 'tailwindcss/utilities.css'
import { Raleway } from 'next/font/google'

const raleway = Raleway({
  subsets: ['latin']
})

export default function MyApp({ Component, pageProps }: AppProps) {
  const heroSectionStyle = {
    backgroundImage: "url('/assets/background.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#0C0C0C',
    backgroundSize: '155% auto',
  }

  const theme = createTheme({
    palette: {
      background: {
        paper: "linear-gradient(222deg, rgba(211,187,103,1) 16%, rgba(162,124,46,1) 100%)"
      }
    },
  });

  const mainStyle = `${raleway.className} min-h-screen overflow-hidden`

  return (
    <ThemeProvider theme={theme}>
      <main style={heroSectionStyle} className={mainStyle}>
          <Navbar></Navbar>
          <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
