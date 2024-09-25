import React from 'react'
import asset from './../../forever-assets/assets/frontend_assets/exchange_icon.png'
import qaulity  from './../../forever-assets/assets/frontend_assets/quality_icon.png'
import support  from './../../forever-assets/assets/frontend_assets/support_img.png'
const OurPolicy = () => {
  return (
    <>
       <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-600'>
        <div>
     <img src={asset}alt="" className='w-12 m-auto mb-5 '/>
     <p className='font-semibold'>Easy Exchange Policy</p>
     <p className='text-gray-400'>We offer hassle free Excange policy </p>
     </div>
     <div>
     <img src={qaulity}alt="" className='w-12 m-auto mb-5 '/>
     <p className='font-semibold'>7 Days Return Policy</p>
     <p className='text-gray-400'>We provide 7 days free return policy  </p>
     </div>
     <div>
     <img src={support}alt="" className='w-12 m-auto mb-5 '/>
     <p className='font-semibold'>Best Customer support</p>
     <p className='text-gray-400'>We provide 24/7 customer support </p>
     </div>
       </div>
    </>
  )
}

export default OurPolicy

