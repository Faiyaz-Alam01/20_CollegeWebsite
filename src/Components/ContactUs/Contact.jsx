import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact() {
  return (
    <>
    <div className=' w-full bg-stone-400 space-y-10 sm:space-y-0 sm:flex justify-evenly p-20 gap-10'>
      <div className=' '>
          <h3 className='font-bold text-blue-900 text-2xl'>Send us a message</h3>
          <ul>
              <li>< EmailIcon /> Faiyaz@123.com</li>
              <li><PhoneIcon /> +91 123-345-678</li>
              <li>< LocationOnIcon />Ranchi, Jharkhand</li>
          </ul>
      </div>
      <div >
        <form className=' flex flex-col font-medium'>
        <label >Your Name :</label>
        <input type="text" name="name" id="" placeholder='Enter your name' required
        className='px-2 py-1 '/>

        <label className='mt-4'>Phone number :</label>
        <input type="tel" name="" id="" placeholder='Enter phone number' required
         className='px-2 py-1 '/>

        <label className='mt-4'>write your message here :</label>
        <textarea name="message" rows='6' cols="5" placeholder='Enter your message' id="" required></textarea>
    
        <button className='bg-blue-900 hover:bg-blue-950 mt-4 w-44 text-white p-2 rounded-full'>submit now</button>
      </form>
      </div>
    </div>
    </>
  )
}

export default Contact

// <div className='text-center'>
// <p className='font-medium'>Contact Us</p>
// <h1 className='text-2xl font-bold'>Get in Touch</h1>
// </div>