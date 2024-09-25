import React from 'react'
import Title from '../Home/Title'
import { assets } from '../../forever-assets/assets/frontend_assets/assets'
import NewsLater from '../../components/NewsLater/NewsLater'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
       <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
       <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere neque commodi beatae quis earum eveniet at dignissimos minima distinctio debitis, illum perferendis, ad possimus, officiis architecto tempora explicabo ullam voluptate.</p>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur hic voluptatibus illo, laboriosam ducimus tenetur veritatis placeat dignissimos fugit nobis alias aliquid aperiam nemo dolorum numquam quasi cupiditate nesciunt quam?</p>
         <b className='text-gray-800'>Our Mission</b>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, asperiores. Atque vero dolores necessitatibus nostrum saepe tempore id labore est numquam voluptatibus corporis inventore eos facere vitae, illum repellendus ad!</p>
       </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
           <b>Quality Assurance</b>
           <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque alias unde nam atque quibusdam laudantium suscipit. Amet cumque odio sunt! Nobis, velit veritatis voluptate a libero quia qui quisquam sint!</p>
       </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
           <b>Convenience</b>
           <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque alias unde nam atque quibusdam laudantium suscipit. Amet cumque odio sunt! Nobis, velit veritatis voluptate a libero quia qui quisquam sint!</p>
       </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
           <b>Exceptional Customer Service:</b>
           <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque alias unde nam atque quibusdam laudantium suscipit. Amet cumque odio sunt! Nobis, velit veritatis voluptate a libero quia qui quisquam sint!</p>
       </div>
      </div>
      <NewsLater/>
    </div>

  )
}

export default About