import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import mainImage from '../../../../public/wall-post-animate.svg'
function Intro() {
  return (
    <div className=' min-h-screen w-full  flex flex-col sm:flex-row'>
        <div className='w-full sm:w-6/12 mt-20 md:mt-28 '>
            <h1 data-aos="fade-up" className=' font-bold  text-5xl main-heading '>
               JSON Blog API
                </h1>

                <p className="mt-11 text-lg w-full sm:w-10/12 md:text-xl">
                The JSON Blog API is a freely accessible public REST API that provides dummy data for your projects or for practicing working with REST APIs. It is a valuable resource for educational purposes, sample codes, testing, and more.
      </p>
      <Link href="/docs">
      <button className=" mt-9 hover:scale-95 transition-all font-bold py-3 px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white">Read Docs</button>
      </Link>

        </div>
        <div className='w-full sm:w-6/12'>
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
