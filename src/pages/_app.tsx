import Navbar from '@/components/NavBar/NavBar'
import { ThemeProvider, createTheme } from '@mui/material'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const heroSectionStyle = {
    backgroundImage: "url('/assets/background.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#0C0C0C',
    backgroundSize: '155% auto',
  }

  const theme = createTheme({
    components: {
      MuiList: {
        styleOverrides: {
          root: {
            backgroundColor: '#B18F40',
            color: 'white',
          },
        },
      },
    },
    // Ajoutez d'autres configurations de thème ici
  })

  return (
    <main style={heroSectionStyle} className="min-h-screen overflow-hidden">
      <ThemeProvider theme={theme}>
        <Navbar></Navbar>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  )
}
