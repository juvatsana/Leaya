import Image from 'next/image'

const Logo = () => {
  return (
    <div className="flex">
      <Image src="./assets/logo.svg" alt="logo" width="100" height="100"></Image>
    </div>
  )
}

export default Logo
