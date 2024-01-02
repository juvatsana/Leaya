import { Grid, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { CSSProperties } from 'react'

const heroSectionStyle = {
  backgroundImage: "url('/assets/background.svg')",
  backgroundRepeat: 'no-repeat',
  backgroundColor: '#0C0C0C',
  backgroundSize: '155% auto',
}

export default function App() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const styleTitle: CSSProperties = isSmallScreen
    ? {
        position: 'relative',
        color: 'white',
        fontSize: '40px',
        fontWeight: '600',
        padding: '2rem',
        lineHeight: '3.5rem',
      }
    : {
        position: 'relative',
        top: '5rem',
        left: '5rem',
        color: 'white',
        fontSize: '48px',
        fontWeight: '600',
        padding: '3rem',
        lineHeight: '3.5rem',
      }

  const styleDownload = isSmallScreen ? 'pl-8' : 'relative top-10 left-32'

  const styleImage: CSSProperties = isSmallScreen
    ? { height: '65vh', position: 'relative', width: '60vw' }
    : {
        width: '300px',
        height: '80vh',
        position: 'relative',
      }

  return (
    <Grid container style={{ justifyContent: 'center' }}>
      <Grid item sm={12} md={6} className="relative">
        <h1 style={styleTitle}>
          <span style={{ color: '#B18F40' }}>Leaya Elite</span>, la technologue
          au coeur de l'excellence
        </h1>
        <Link href="#">
          <Image
            className={styleDownload}
            src="./assets/download_app.svg"
            alt="lien de téléchargement"
            width="600"
            height="600"
          />
        </Link>
      </Grid>
      <Grid
        item
        sm={12}
        md={6}
        style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div style={styleImage}>
          <Image
            src="./assets/phone.svg"
            alt="phone"
            layout="fill"
          />
        </div>
      </Grid>
    </Grid>
  )
}
