import SideBar from '@/components/shared/sideBar/SideBar'
import React from 'react'
import HowItWorks from '@/components/template/documentation/HowItWorks'

function page() {
  return (
    <div className='min-h-screen'>
      <SideBar/>
      <div className="w-full flex items-center justify-center">
      <div className="flex w-11/12  ">
     <div className="ml-0 sm:ml-[270px]">
      <HowItWorks/>
      </div>
      </div>
     </div>
    </div>
  )
}

export default page
