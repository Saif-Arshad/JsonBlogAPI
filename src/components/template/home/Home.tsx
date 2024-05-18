import React from 'react'
import Intro from './Intro'
import TriedLorumData from './TriedLorumData'
function Home() {
  return (
    <>
    <div className='w-full flex items-center flex-col bg-white dark:bg-black text-black dark:text-white'>
    <div className='w-11/12 flex items-center flex-col sm:10/12	'>
    <Intro/>
    <TriedLorumData/>
    <h1>Hello</h1>
    </div>
    </div>
    </>
  )
}

export default Home
