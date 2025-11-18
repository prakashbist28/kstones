import React, { useEffect, useState } from 'react'
import { Vols } from '../../Data/Vols'
import {  ChevronDoubleLeftIcon } from '@heroicons/react/20/solid';
import {  ChevronDoubleRightIcon } from '@heroicons/react/20/solid'

function Carous() {
    const [currimg,setCurrimg] = useState(0)
    

    const prev = () => setCurrimg((currimg) => currimg ===0 ? Vols.length-1: currimg-1)
    const next = () => setCurrimg((currimg) => currimg === Vols.length-1 ? 0 : currimg+1)

    useEffect(() => {
        const interval = setInterval(next, 3000);
        return () => clearInterval(interval); 
    }, [currimg])

    const handleDotClick = (index) => {
      setCurrimg(index);
    };

  return (
    <div>
        <div className="w-full  h-full flex relative items-center overflow-hidden pb-6 dark:shadow-2xl dark:shadow-slate-100/10">

        <div className=' z-10  md:ml-4 absolute'>
        <button onClick={prev} className=' size-[40px] lg:size-[50px] text-white font-bold transition duration-500 p-2 rounded-full bg-black/30 hover:bg-black/60  '>
            <ChevronDoubleLeftIcon  />
        </button>
        </div>
        
        <div className='flex transition  ease-in-out duration-1000 ' style={{transform: `translateX(-${currimg*100}%)`}}>
        {Vols.map((vol, index)=>(
            <div key={index} className='w-full grid grid-cols-2 md:grid-cols-3  flex-shrink-0 ' >
                <div className='flex justify-center items-center ml-8 md:ml-4 lg:ml-16'>
                <h1 className=' font-nineteen italic tracking-tighter font-thin text-white text-shadow-md  text-[30px] md:text-[45px] lg:text-[60px] ' >{vol.desc1}<br/> <h1 className=' flex md:hidden'>{vol.desc2}</h1></h1>
                </div>
                <div className='absolute bg-gradient-to-t from-black to-gray-600/50 w-full h-[600px] object-cover object-center -z-10 '></div>
                <img className='w-full absolute -z-20  h-[500px] object-cover object-center ' src={vol.image}  />
                <img className='z-10 border-2 mt-4 rounded-lg shadow-lg shadow-black h-[250px] md:h-[400px] mx-auto mb-4  hover:scale-110 transition duration-500 ' src={vol.image} />

                <div className='hidden md:flex justify-center items-center mr-8 md:mr-4 lg:mr-16'>
                <h1 className=' font-nineteen italic tracking-tighter font-thin text-white text-shadow-md text-[30px] md:text-[45px] lg:text-[60px]' >{vol.desc2}</h1>
                </div>
            </div>
            

        ))}
        </div>
        <div className='absolute flex bottom-0 w-full justify-center z-10  space-x-2 pb-2 '>
        {Vols.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-6 h-1 md:w-8 md:h-2 rounded-full ${currimg === index ? 'bg-gray-500' : 'bg-white' } transition duration-300`}
          />
        ))}
      </div>
        
        <div className=' z-10 md:mr-4 absolute right-0 '>   
            <button onClick={next} className='size-[40px] lg:size-[50px] text-white font-bold transition duration-500 p-2 rounded-full bg-black/30 hover:bg-black/60 '>
            <ChevronDoubleRightIcon  />

            </button>
          </div>

        </div>
    </div>
  )
}

export default Carous