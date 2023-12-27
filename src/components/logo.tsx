import React from 'react'
import Image from 'next/image'

const logo = () => {
  return (
    <div className="flex">
      <Image src='./assets/logo.svg' alt='logo' width="25" height="25"></Image>
      <Image src='./assets/leaya.svg' alt='logo' width="100" height="100"></Image>
    </div>
  )
}

export default logo