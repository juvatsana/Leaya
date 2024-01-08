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
        paddingLeft: '2rem',
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

  const styleDownload = isSmallScreen ? 'pl-8' : 'relative left-32'

  const styleImage: CSSProperties = isSmallScreen
    ? {
        height: '65vh',
        position: 'relative',
        width: '60vw',
        top: '4rem',
      }
    : {
        width: '300px',
        height: '80vh',
        position: 'relative',
      }

  return (
    <Grid container style={{ justifyContent: 'center' }} className="text-2xl">
      <Grid item sm={12} md={6} className="relative">
        <h1 style={styleTitle}>
          <span
            style={{
              color: 'transparent',
              backgroundImage:
                'linear-gradient(222deg, rgba(211,187,103,1) 16%, rgba(162,124,46,1) 100%)',
              backgroundClip: 'text',
            }}
          >
            Leaya Elite
          </span>
          , la technologie au coeur de l'excellence
        </h1>
        <br></br>
        <br></br>
        <Image
          className={styleDownload}
          src="/assets/download_app2.png"
          alt="lien de téléchargement"
          width="400"
          height="90"
        />
        <br></br>
        <Link href="https://apps.apple.com/fr/app/leaya-elite/id6474127173">
          <Image
            className={styleDownload}
            src="/assets/ios.png"
            alt="lien de téléchargement"
            width="200"
            height="200"
          />
        </Link>
        <br></br>
        <Link href="https://play.google.com/store/apps/details?id=app.leayaapp.com">
          <Image
            className={styleDownload}
            src="/assets/android.png"
            alt="lien de téléchargement"
            width="200"
            height="200"
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
          <Image src="/assets/phone.png" alt="phone" layout="fill" />
        </div>
      </Grid>
    </Grid>
  )
}
