import React from 'react'
import Image from 'next/image'
import mainImage from '../../../../public/wall-post-animate.svg'
function Intro() {
  return (
    <div className=' min-h-screen w-full flex flex-col-reverse md:flex-row'>
        <div className='w-6/12'>
            <h1 className=' font-bold  text-5xl main-heading '>
                <span className='font-bold text-5xl'>{"{ JSON }  "}</span>
               Blog API
                </h1>
        </div>
        <div className='w-6/12'>
            <Image
            src={mainImage}
            alt='Main-image'
            height={700}
            width={500}
            >

            </Image>
        </div>
    </div>
  )
}

export default Intro
