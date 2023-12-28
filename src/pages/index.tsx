import Navbar from '@/components/NavBar/NavBar'

  const heroSectionStyle = {
    backgroundImage: "url('/assets/background.svg')",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#0C0C0C",
    backgroundSize: "155% auto"
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
