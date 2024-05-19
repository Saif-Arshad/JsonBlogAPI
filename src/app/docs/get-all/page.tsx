import SideBar from '@/components/shared/sideBar/SideBar'
import React from 'react'
import GetAll from '@/components/template/documentation/GetAll'

function page() {
  return (
    <div className='min-h-screen'>
      <SideBar/>
      <div className="w-full flex items-center justify-center">
      <div className="flex w-11/12  ">
     <div className="ml-0 sm:ml-[270px]">
      <GetAll/>
      </div>
      </div>
     </div>
    </div>
  )
}

export default page
