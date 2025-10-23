import React from 'react'
import {useState, useEffect} from 'react'
import Logo from '../../Aseets/logo.png'
import Menu from '../../Aseets/menu-icon.png'
import Program from '../Program/Program'
import About from '../About/About'
import Campus from '../Campus/Campus'


function Header() {

  const [sticky, Setsticky] = useState('false');
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? Setsticky(true) : Setsticky(false);
    })
  },[])

  return (
    <div className= {`text-white fixed z-50 ${sticky ? 'bg-blue-700' : ''} duration-300 justify-between px-10 md:justify-around flex items-center h-16 w-full`}>
        <div className=' text-3xl'>
            <img className='w-auto h-8 object-cover' src={Logo} alt="" />
        </div>
       <ul className='md:flex gap-8 hidden text-lg font-medium cursor-pointer'>
         <li><a href=""></a>Home </li>
         <li><a href={Program}></a>Program</li>
         <li><a href="About"></a>About Us</li>
         <li><a href=""></a>Campus</li>
         <li><a href=""></a>Testimonial</li>
         <li><a href=""><button className='bg-white px-4 py-1 text-black rounded-full'>Contact Us</button></a></li>
       </ul>

        <div className='md:hidden'>
            <img src={Menu} alt=""
            className='h-6' />
        </div>
    </div>
  )
}

export default Header
