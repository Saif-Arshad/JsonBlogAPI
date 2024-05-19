import SideBar from '@/components/shared/sideBar/SideBar'
import React from 'react'
import GetSearch from '@/components/template/documentation/GetSearch'

function page() {
  return (
    <div className='min-h-screen'>
      <SideBar/>
      <div className="w-full flex items-center justify-center">
      <div className="flex w-11/12  ">
     <div className="ml-0 sm:ml-[270px]">
      <GetSearch/>
      </div>
      </div>
     </div>
    </div>
  )
}

export default page
