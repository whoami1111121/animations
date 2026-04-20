import React from 'react'

const MenuText = ({ text }: { text: string }) => {
    return (
        <div className='text-4xl  font-semibold group relative leading-6 overflow-hidden '>
            <span className='transition group-hover:translate-y-[120%] duration-1000 ease-in-out inline-block py-2'>{text}1</span>
            <span className='transition absolute left-0 translate-y-[-120%] group-hover:translate-y-0 duration-1000 ease-in-out py-2'>{text}2</span>

        </div >
    )
}

export default MenuText
