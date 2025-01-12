import React from 'react'
import image_1 from '../../Aseets/gallery-1.png'
import image_2 from '../../Aseets/gallery-2.png'
import image_3 from '../../Aseets/gallery-3.png'
import image_4 from '../../Aseets/gallery-4.png'
import Next_icon from '../../Aseets/next-icon.png'

function Campus({title, Subtitle}) {
  return (
    <div className='flex items-center flex-col justify-center sm:p-20 bg-emerald-500'>
      <p className='font-medium'>{title}</p>
      <p className='text-2xl font-bold pb-20'>{Subtitle}</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 '>
        <img className='h-72 rounded-md' src={image_1} alt="" />
        <img className='h-72 rounded-md' src={image_2} alt="" />
        <img className='h-72 rounded-md' src={image_3} alt="" />
        <img className='h-72 rounded-md' src={image_4} alt="" />
      </div>

      <button className='flex bg-blue-900 items-center mt-10 text-white px-5 rounded-full hover:bg-blue-950 h-10'>See more here <img className='h-3 w-4 ml-3 ' src={Next_icon} alt="" /></button>
    </div>
  )
}

export default Campus
