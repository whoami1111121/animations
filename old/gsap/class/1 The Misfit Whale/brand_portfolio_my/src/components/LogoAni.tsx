import React, { useRef, useState } from 'react'
import { MainLogo } from './Icons'
import gsap from 'gsap'

const LogoAni = ({ text }: { text: string }) => {
    const logoRef = useRef(null)
    const rangeOfColor = ['red', 'blue', 'green', 'pink', 'yellow', 'black']
    const [color, setColor] = useState('black')
    const changTextColor = () => {
        setColor(rangeOfColor[Math.floor((Math.random() * rangeOfColor.length))])
        const logoSvg = logoRef.current.firstChild.firstChild;
        logoRef.current.setAttribute('data-color', color)
        gsap.to(logoSvg, { fill: color, duration: 1, ease: 'power1.out' })
    }
    const resetTextColor = () => {
        setColor(rangeOfColor[Math.floor((Math.random() * rangeOfColor.length))])
        const logoSvg = logoRef.current.firstChild.firstChild;
        logoRef.current.setAttribute('data-color', color)
        gsap.to(logoSvg, { fill: color, duration: 1, ease: 'power1.out' })
    }
    return (
        <>
            {/* <div onMouseEnter={() => changTextColor()} onMouseLeave={() => resetTextColor()} className='text-8xl font-bold transition duration-1500 ease-in-out cursor-pointer' style={{ color: color }}>
            {text}

        </div > */}
            <div className="header_logo  pointer-event-auto cursor-pointer leading-none transition-height [&>svg]:h-10 [&>svg]:duration-500 [&>svg]:ease-out lg:[&>svg]:h-16 "
                data-color='#ff0000' ref={logoRef}
                onMouseEnter={() => changTextColor()} onMouseLeave={() => resetTextColor()}
            >
                <MainLogo />
            </div>

        </>
    )
}

export default LogoAni
