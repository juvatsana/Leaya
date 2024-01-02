import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className="flex">
      <Link href="/">
        <Image
          src="./assets/logo.svg"
          alt="logo"
          width="100"
          height="100"
        ></Image>
      </Link>
    </div>
  )
}

export default Logo
