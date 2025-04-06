import React from 'react'
import HorizontalCard from './HoriCard'
import { assets } from '@/assets/assets'

const Work = () => {
  return (
        <div id='work' className='text-left flex flex-col items-center order-1 md:order-none w-full px-[12%] py-10 scroll-mt-38 mb-40 mt-20'>
        <h1>Work I Have Done</h1>
        
        <div className='space-y-20 mt-10'>
            <HorizontalCard
            image={assets.htalk} title={'Workshops'}
            description={'I have been the speaker at multiple workshops conducted at my college, speaking mainly about Linux and the advantages of using FOSS'}/>
            <HorizontalCard image={assets.higib} title={'Research Intern'}
            description={'I have been a research intern at the CSIR Institute of Genomics and Integrative Biology, Delhi under the guidance of Dr Kumardeep Chaudhary. Studied the application of Large Language Models in the field of Biology'}/>
        </div>
    </div>
  )
}

export default Work