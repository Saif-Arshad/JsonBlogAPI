import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import mainImage from '../../../../public/wall-post-animate.svg'
function Intro() {
  return (
    <>
     <div className="h-[40rem] w-full dark:bg-black bg-white flex-col  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-800 py-7 mt-20">
      Mockup JSON Blog API
      </h1>
      <p className='text-lg sm:text-xl w-11/12 sm:w-9/12 md:w-7/12 text-center'>
      Are you a developer looking for a reliable source of dummy blog data for your projects? Look no further! Dummy Blog API provides realistic, high-quality dummy data to help you build, test, and perfect your applications.

      </p>
      <div>

      </div>
    </div>
    {/* <div className=' min-h-screen w-full  flex flex-col sm:flex-row'>
        <div className='w-full sm:w-6/12 mt-20 md:mt-28 '>
            <h1 className=' font-bold  text-5xl main-heading '>
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
    </div> */}
    </>
  )
}

export default Intro
