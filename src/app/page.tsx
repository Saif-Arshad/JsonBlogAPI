"use client"
import {useEffect,useState} from 'react'
export default function Home() {


useEffect(()=>{
  	  try {
        const functGet = async ()=>{
        const response =await fetch('/api/blog')
        const data =await response.json()
        console.log(data)}
        functGet()
      } catch (error) {
          console.log(error)
      }
},[])

  return (
    <>
    
      <h1>Hello World</h1>
    </>
  );
}
