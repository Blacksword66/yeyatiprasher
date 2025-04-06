import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { FaDownload } from 'react-icons/fa'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-70 mb-10'>
  <div className='flex flex-col md:flex-row items-center gap-10'>

    {/* Image Section */}
    <div className='w-full md:w-1/3 flex justify-center'>
      <Image 
      src={assets.pho2}
      alt='About Me'
    className='rounded-xl w-100 h-100 object-cover'/>
    </div>

    {/* Text Section */}
    <div className='text-left w-full md:w-2/3'>
      <h1>About Me</h1>

      <p className="text-gray-400 text-base md:text-lg max-w-3xl leading-relaxed mb-6">
        I'm Yeyati Prasher — a Computer Science student with a sharp focus on data analytics 
        and turning insights into impactful products. From building intuitive web apps to 
        solving real-world problems with code, I try to bridge the gap between raw data and 
        functional design. I believe in understanding every layer of what I build. So let's build something together!
      </p>

      <a 
        href="/resume.pdf"
        download
        className="bg-green-600 text-white px-6 py-3 rounded-md shadow-lg font-semibold 
                    text-lg hover:bg-green-700 transition duration-200 hover:shadow-green-500/40 shadow-green-500/30
                    flex flex-row justify-center items-center"
        >
        Download My Resume? <FaDownload className="ml-2" />
        </a>
    </div>
  </div>
</div>
  )
}

export default About