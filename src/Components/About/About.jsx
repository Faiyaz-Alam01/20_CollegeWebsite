import React from 'react'
import About_image from '../../Aseets/about.png'
import Play_icon from '../../Aseets/play_icon.png'

function About() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center p-10 sm:p-20 gap-10 bg-yellow-100 max-w-full'>
        {/* about left */}
        <div className='relative'>
            <img className='h-96 w-full rounded-md' src={About_image} alt="about_image" />
            <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
                <img className='size-20' src={Play_icon} alt="" />
            </div>
        </div>
        <div className='space-y-3 max-w-xl '>
            <p className='text-sky-700 text-lg font-medium'>ABOUT UNIVERSITY</p>
            <h1 className='text-3xl max-w-80 font-bold'>Nurturing Tomorrow's Leader Today</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad iure reiciendis deleniti quo officia dolorem, amet ducimus, aliquid laboriosam asperiores rem dolore eum accusamus laborum harum a blanditiis expedita consequuntur!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa neque officiis, libero culpa quasi aperiam? Facere, modi saepe. Minima quo praesentium error in quod eaque at, cupiditate quis iure hic?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum rem dolorum error quo perferendis id quis pariatur expedita unde voluptate.</p>
        </div>
    </div>
  )
}

export default About
