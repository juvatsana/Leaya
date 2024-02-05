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
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  const styleTitle: CSSProperties = isMediumScreen
    ? {
        position: 'relative',
        color: 'white',
        fontSize: '48px',
        fontWeight: '600',
        lineHeight: '3.5rem',
      }
    : {
        position: 'relative',
        color: 'white',
        fontSize: '48px',
        fontWeight: '600',
        lineHeight: '3.5rem',
      }

  return (
    <Grid container style={{ justifyContent: 'center' }} className="text-2xl">
      <Grid
        item
        sm={12}
        md={6}
        lg={7}
        className="flex flex-col pl-10 lg:pl-20 lg:pr-5 xl:pl-36 2xl:pl-60"
      >
        <h1 style={styleTitle} className="pb-10">
          <span
            style={{
              color: 'transparent',
              backgroundImage: `${theme.palette.background.paper}`,
              backgroundClip: 'text',
            }}
          >
            Leaya Elite
          </span>
          , la technologie au coeur de l'excellence
        </h1>
        <Image
          className="pb-10"
          src="/assets/download_app2.png"
          alt="lien de téléchargement"
          width="400"
          height="90"
        />
        <Link href="https://apps.apple.com/fr/app/leaya-elite/id6474127173">
          <Image
            className="pb-10"
            src="/assets/ios.png"
            alt="lien de téléchargement"
            width="200"
            height="200"
          />
        </Link>
        <Link href="https://play.google.com/store/apps/details?id=app.leayaapp.com">
          <Image
            className="pb-10"
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
        lg={5}
        style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div>
          <Image src="/assets/phone.png" alt="phone" width="400" height="914" />
        </div>
      </Grid>
    </Grid>
  )
}
