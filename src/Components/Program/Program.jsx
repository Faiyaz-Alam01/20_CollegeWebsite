import React from 'react';
import ImageO from '../../Aseets/program-1.png';
import ImageT from '../../Aseets/program-2.png';
import ImageS from '../../Aseets/program-3.png';
import program_icon_1 from '../../Aseets/program_icon_1.png'
import program_icon_2 from '../../Aseets/program_icon_1.png'
import program_icon_3 from '../../Aseets/program_icon_1.png'

function Program() {
  return (
    <div className='h-auto w-full text-center p-20 bg-slate-500'>
      <p className='text-blue-950 font-medium'>OUR PROGRAM</p>
      <h1 className='text-3xl font-bold'>What We Offer</h1>

      <div className='flex flex-col sm:flex-row justify-center items-center gap-8 py-10'> {/* Added gap between images */}
       
       {/* card-01 */}

        <div className="relative group max-w-sm overflow-hidden">
            <img className="w-full mx-auto" src={ImageO} alt="Program 1" />
            <div 
                className="opacity-0 translate-y-full group-hover:opacity-80 group-hover:translate-y-0 bg-customBlue text-white flex justify-center items-center flex-col rounded-sm absolute top-0 right-0 left-0 bottom-0 transition-all duration-500">
                <img className="w-20 mb-3 rounded-md" src={program_icon_1} alt="Program Icon 1" />
                <p className="text-center">Graduate Degree</p>
            </div>
        </div>

        {/* card-02 */}

        <div className="relative group max-w-sm overflow-hidden">
            <img className="w-full mx-auto rounded-md" src={ImageT} alt="Program 1" />
            <div 
                className="opacity-0 translate-y-full group-hover:opacity-80 group-hover:translate-y-0 bg-customBlue text-white flex justify-center items-center flex-col rounded-sm absolute top-0 right-0 left-0 bottom-0 transition-all duration-500">
                <img className="w-20 mb-3" src={program_icon_2} alt="Program Icon 1" />
                <p className="text-center">Graduate Degree</p>
            </div>
        </div>

        {/* card-03 */}

        <div className="relative group max-w-sm overflow-hidden">
            <img className="w-full mx-auto rounded-md" src={ImageS} alt="Program 1" />
            <div 
                className="opacity-0 translate-y-full group-hover:opacity-80 group-hover:translate-y-0 bg-customBlue text-white flex justify-center items-center flex-col rounded-sm absolute top-0 right-0 left-0 bottom-0 transition-all duration-500">
                <img className="w-20 mb-3" src={program_icon_3} alt="Program Icon 1" />
                <p className="text-center">Graduate Degree</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Program;

