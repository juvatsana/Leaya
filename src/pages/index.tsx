import Navbar from '@/components/NavBar/NavBar'

const heroSectionStyle = {
  backgroundImage: "url('/assets/background.svg')",
  backgroundPosition: '140px -15%',
}

export default function App() {
  return (
    <>
      {/* <Image src={Background} alt="Background" /> */}
      <div style={heroSectionStyle} className="min-h-screen">
        <Navbar></Navbar>
      </div>
    </>
  )
}
