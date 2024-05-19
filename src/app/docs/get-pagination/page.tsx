import SideBar from '@/components/shared/sideBar/SideBar'
import React from 'react'
import GetPagination from '@/components/template/documentation/GetPagination'

function page() {
  return (
    <div className='min-h-screen'>
      <SideBar/>
      <div className="w-full flex items-center justify-center">
      <div className="flex w-11/12  ">
     <div className="ml-0 sm:ml-[270px]">
      <GetPagination/>
      </div>
      </div>
     </div>
    </div>
  )
}

export default page
