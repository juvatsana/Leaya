import Navbar from '@/components/NavBar/NavBar'
import { Grid } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { relative } from 'path'

const heroSectionStyle = {
  backgroundImage: "url('/assets/background.svg')",
  backgroundRepeat: 'no-repeat',
  backgroundColor: '#0C0C0C',
  backgroundSize: '155% auto',
}

export default function App() {
  return (
    <>
      <div style={heroSectionStyle} className="min-h-screen overflow-hidden">
        <Navbar></Navbar>
        <Grid container>
          <Grid item sm={6} className='relative'>
            {/* font-family: Rubik; font-size: 48px; font-weight: 600; line-height:
            57px; letter-spacing: 0em; text-align: left; */}
            <h1 style={{ position: 'relative', top: '12rem', left: '5rem' ,color: 'white', fontSize: '48px', fontWeight: '600', padding: '3rem', lineHeight: '3.5rem' }}>
              <span style={{ color: '#B18F40' }}>Leaya Elite</span>, 
              la technologue au coeur de l'excellence
            </h1>
            <Link href="#">
              <Image
                className='relative top-32 left-32'
                src="./assets/download_app.svg"
                alt="lien de téléchargement"
                width="600"
                height="600"
              />
              <Image
                className='relative top-32 left-32'
                src="./assets/download.svg"
                alt="lien de téléchargement"
                width="600"
                height="600"
              />
              <Image
                className='relative top-32 left-32'
                src="./assets/Rocket.svg"
                alt="lien de téléchargement"
                width="600"
                height="600"
              />
            </Link>
          </Grid>
          <Grid item sm={6} >
              <Image
                className='relative -bottom-36 end-0 right-0'
                src="./assets/phone.svg"
                alt="phone"
                width="555"
                height="1041"
              />
          </Grid>
        </Grid>
      </div>
    </>
  )
}
