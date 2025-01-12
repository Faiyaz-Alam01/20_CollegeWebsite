import React from 'react'
import next_icon from '../../Aseets/next-icon.png'
import back_icon from '../../Aseets/back-icon.png'
import user_1 from '../../Aseets/user-1.png'
import user_2 from '../../Aseets/user-2.png'
import user_3 from '../../Aseets/user-3.png'
import user_4 from '../../Aseets/user-4.png'

function Testimonial() {
  return (
    <div className='m-20 relative px-20'>
  {/* Wrapper for navigation buttons */}
  <div className='absolute top-1/2 translate-y-1/2 flex items-center gap-4'>
    {/* Next icon */}
    <img
      className='bg-blue-600 p-2 rounded-full cursor-pointer '
      src={next_icon}
      alt="Next"
    />
    {/* Back icon */}
    <img
      className='bg-blue-600 p-2 rounded-full cursor-pointer'
      src={back_icon}
      alt="Back"
    />
  </div>


      {/* slider */}
      <div className='overflow-hidden'>
        <ul>
            <li>
                <div className='slide'>
                    <div>
                        <img src={user_1} alt="" />
                        <div>
                            <h1 className='text-h3'>william Jackson</h1>
                            <span>Eduty, USA</span>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Tempora fugit nesciunt at molestiae natus iusto maiores 
                        illum obcaecati praesentium rerum.
                    </p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div>
                        <img src={user_2} alt="" />
                        <div>
                            <h1>william Jackson</h1>
                            <span>Eduty, USA</span>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Tempora fugit nesciunt at molestiae natus iusto maiores 
                        illum obcaecati praesentium rerum.
                    </p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div>
                        <img src={user_3} alt="" />
                        <div>
                            <h1>william Jackson</h1>
                            <span>Eduty, USA</span>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Tempora fugit nesciunt at molestiae natus iusto maiores 
                        illum obcaecati praesentium rerum.
                    </p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div>
                        <img src={user_4} alt="" />
                        <div>
                            <h1>william Jackson</h1>
                            <span>Eduty, USA</span>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Tempora fugit nesciunt at molestiae natus iusto maiores 
                        illum obcaecati praesentium rerum.
                    </p>
                </div>
            </li>

        </ul>
      </div>
    </div>
  )
}

export default Testimonial
