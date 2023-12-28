import Navbar from '@/components/NavBar/NavBar'
import { Grid } from '@mui/material'
import Image from 'next/image'

const heroSectionStyle = {
  backgroundImage: "url('/assets/background.svg')",
  backgroundRepeat: 'no-repeat',
  backgroundColor: '#0C0C0C',
  backgroundSize: '155% auto',
}

export default function App() {
  return (
    <>
      <div style={heroSectionStyle} className="min-h-screen">
        <Navbar></Navbar>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ height: '100vh' }}
        >
          <Grid item sm={6}>
            {/* font-family: Rubik; font-size: 48px; font-weight: 600; line-height:
            57px; letter-spacing: 0em; text-align: left; */}
            <h1 style={{ color: 'white', fontSize: '48px', fontWeight: '600' }}>
              <span style={{ color: '#B18F40' }}>Leaya Elite</span>, la
              technologue au coeur de l'excellence
            </h1>
          </Grid>
          <Grid item sm={6}>
            <Image
              src="./assets/phone.svg"
              alt="phone"
              width="100"
              height="100"
            ></Image>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
