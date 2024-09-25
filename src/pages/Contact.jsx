import React from 'react'
import Title from './Home/Title'

import NewsLater from '../components/NewsLater/NewsLater'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={require('./../forever-assets/assets/frontend_assets/contact-us.png')} alt=""  className='w-full md:max-w-[480px]'/>
        <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'>54709 Willms Station <br /> Suite 350, Washigton, USA</p>
            <p  className='text-gray-500'>Tel: +92320-6943-440 <br />Email: walihaiderjalali@gmail.com</p>
            <p  className='text-gray-500 font-semibold text-xl'>Careers at Forever</p>
            <p  className='text-gray-500'>Learn more about our teams and job openings</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
   <NewsLater/>
    </div>
  )
}

export default Contact