import React from 'react'
import Header from '../Header/Header' 
import Arrow from '../../Aseets/dark-arrow.png'

export default function Hero() {
  return (
    <div className='bg-heroImage bg-center h-screen w-full  bg-cover '>
      <Header />
      <div className='text-white h-screen flex flex-col justify-center items-center text-center gap-y-4 '>    
          <h1 className='text-6xl font-medium max-w-3xl'>We Ensure better eduation for a better world</h1>
          <p className='text-sm max-w-2xl'>Our cutting-edge curriculum is designed to empower students with the knowledge,
             skills, and experience needed to excel in the dynamic field of education
          </p>
          <button className='bg-white items-center text-black px-4 py-3 flex gap-4 hover:bg-black hover:text-white rounded-md'>Explore more <img className='h-5 w-8 ' src={Arrow} /></button>
      </div>
      
    </div>
  )
}

