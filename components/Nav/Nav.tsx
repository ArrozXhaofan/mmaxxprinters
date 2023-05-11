"use client"

import Image from 'next/image'
import Logo from '../../public/images/maxLogo.png'
import Link from 'next/link'
import { Ruta } from '@/models'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

interface Props{
    pathNames: Ruta[]
}

function Nav({pathNames}:Props) {
    useEffect(()=>{
        AOS.init();
      },[])
  return (
    <nav data-aos="fade-left" 
    className='fixed w-full h-14 bg-white bg-opacity-40 flex items-center justify-between pr-4
    backdrop-blur-sm shadow-lg z-50 select-none'>
        
        <div className=''>
            <Image className='h-10 object-contain' priority width={100} height={40}
            src={Logo} alt='Logo de max' />
        </div>

        <div className='flex items-center gap-3 text-black text-sm'>
            {
                pathNames.map(pathName => (
                    <Link className='hover:scale-110 hover:text-primary duration-300 '
                    key={pathName.path} href={pathName.path}>
                        {pathName.name}
                    </Link>
                ))
            }
        </div>

    </nav>
  )
}

export default Nav