"use client"

import React,{useState} from 'react'
import Snippets from '@/components/template/codeSnippets/Snippets'
import { getById,idData } from '@/utils/endpoints'

function GetAll() {
    const [data,setdata] = useState(false)
    const [writeData,setwriteData] = useState(false)
    const showData = ()=>{
        setdata(true)   
        setTimeout(() => {
            setwriteData(true)
            setdata(false)
        },2000)
    }
  return (
    <div>
  <h1 className='text-xl md:text-4xl font-bold mt-9'>
    How to get Single blogs
  </h1>
  < p className='mt-8 text-lg md:text-xl'>
   Fetch the endpoint provided below to retrieve single blogs by blog id, and also test it here.
   Once you&rsquo;ve fetched the endpoint, you can explore the array of blog it returns. 
   If you encounter any issues or have any questions, don&apos;t hesitate to reach out for assistance. Happy exploring!
 </p>

  
  <div className="min-w-full py-4">
      <Snippets text="Get Single" code={getById} />
{
  writeData ? 
  <h1 className='text-xl mt-3'>Yay! 😍 </h1>
   :
      <button 
  onClick={showData} 
  className={`
    ${data ? "cursor-not-allowed opacity-50" : ""}
    mt-9 hover:scale-95 transition-all font-bold py-3 px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 
    text-white`
  }
  disabled={data}
>
    {
        data ? "Fetching..." : 
  "Try it 🚀"}
</button>
}
{
    writeData ?
    <Snippets text="Single Article" code={idData} />
    : ""
}

   


    </div>
    </div>
  )
}

export default GetAll