"use client"

import React,{useState} from 'react'
import Snippets from '../codeSnippets/Snippets'
import { getById, idData } from '@/utils/endpoints'
function ExampleCode() {
    const [data,setdata] = useState(false)
    const [writeData,setwriteData] = useState(false)
    const showData = ()=>{
        setdata(true)   
        setTimeout(() => {
            setwriteData(true)
            setdata(false)
        },2000)
    }
    // console.log(getAllBlogs)
  return (
    <div className="min-w-full py-4">
      <h1 className="text-xl md:text-3xl font-bold mt-4">Example Code</h1>
      <Snippets text="Get By Id" code={getById} />
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
  )
}

export default ExampleCode
