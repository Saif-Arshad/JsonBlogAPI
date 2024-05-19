import React from 'react'
import ExampleCode from '../home/ExampleCode'

function HowItWorks() {
  return (
    <div>
  <h1 className='text-xl md:text-4xl font-bold mt-9'>
    How it Work
  </h1>
 < p className='mt-8 text-lg md:text-xl'>
 jsonBlogApi is a versatile API that can be integrated into any type of  project. It offers a range of API endpoints that provide data in JSON format. 
 To get a better understanding of how it works, you can explore the examples below. Feel free to utilize this powerful tool in your creative projects!
 </p>
    <ExampleCode/>
    </div>
  )
}

export default HowItWorks