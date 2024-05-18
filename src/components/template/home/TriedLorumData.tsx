import React from 'react'
import Link from 'next/link'
function TriedLorumData() {
  return (
    <div className="w-full sm:w-9/12 my-5 md:my-0 text-black dark:text-white flex flex-col items-center">
         <h1 className='text-2xl md:text-5xl font-semibold md:font-bold text-center'>Got tired of Lorem ipsum data?</h1>
        <p className='text-lg md:text-xl text-center mt-7 '>
        By using the JSON Blog API, you gain access to a variety of REST Endpoints that provide JSON data. This allows you to easily build the frontend of your website using your preferred framework and library, without the need to create a backend from scratch
        </p>
        <Link href="/docs">
      <button className=" mt-9 hover:scale-95 transition-all font-bold py-3 px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white">Try it Now</button>
      </Link>
    </div>
  )
}

export default TriedLorumData
