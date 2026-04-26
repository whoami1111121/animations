import React from 'react'
import MenuText from './MenuText'
import LogoAni from './LogoAni'

const Navbar = () => {
  return (

    <div className="header  min-w-screen fixed left-0 top-0 z-10 w-screen px-7 transition-all duration-500 ease-out">
      <div className="overflow-hidden bg-none">
        <div className="header_container  flex items-center justify-between transition-all duration-500 ease-out will-change-transform lg:py-8">
          <MenuText text='Menu' />

          <LogoAni text='Who am I' />
          <MenuText text='Contact' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
