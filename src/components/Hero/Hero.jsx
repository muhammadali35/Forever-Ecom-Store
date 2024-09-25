import React from 'react'
import her_img from './../../forever-assets/assets/frontend_assets/hero_img.png'

const Hero = () => {
  return (
    <>
      <div className='flex flex-col justify-between sm:flex-row border border-gray-400'>
        {/* left side */}
        <div className='w-full sm:w-1/2 flex items-center py-10 sm:py-0'>
          <div className='text-[#414141] ml-10'>
            <div className='flex items-center gap-2'>
              <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
              <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
            </div>
            <h1>Latest Arrivals</h1>
            <div className='flex items-center gap-2'>
              <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
              <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className='w-full sm:w-1/2'>
          <img className='w-full' src={her_img} alt="Hero Image" />
        </div>
      </div>
    </>
  )
}

export default Hero
