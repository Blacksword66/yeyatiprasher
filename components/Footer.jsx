import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo} alt='Logo' className='invert w-36 mx-auto mb-2'/>

            <div className='flex w-max items-center gap-2 mx-auto mb-5'>
                <p className='text-gray-400 text-center mx-auto text-base'>Made with ❤️</p>
            </div>
        </div>
    </div>
  )
}

export default Footer