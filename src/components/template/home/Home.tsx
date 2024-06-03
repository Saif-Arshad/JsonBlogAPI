"use client"

import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Intro from './Intro'
import TriedLorumData from './TriedLorumData'
import ExampleCode from './ExampleCode';
import Route from './Route';
function Home() {

  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  return (
    <>
    <div className='w-full flex items-center flex-col bg-white dark:bg-black text-black dark:text-white'>
    <div className='w-11/12 flex items-center flex-col sm:10/12	'>
    <Intro/>
    <TriedLorumData/>
    <ExampleCode/>
    <Route/>
    </div>
    </div>
    </>
  )
}

export default Home
