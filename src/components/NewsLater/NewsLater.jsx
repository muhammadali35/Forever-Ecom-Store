import React from 'react'

const NewsLater = () => {
    const submitHandler=(event)=>{
        event.preventDefault() 
    }
  return (
    <>
      <div className='text-center '>
              <p className='text-2xl font-medium text-gray-800 '>Subscribe and get 2-% Off</p>
              <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est enim quae possimus placeat quam inventore? Harum amet id</p>
              <form onSubmit={submitHandler} className='w-full sm:w-1/2 flex items-center justify-between gap-3 mx-auto my-6 border pl-3'>
                <input type="email" name="" id="" placeholder='Enter Your Enail' required />
                <button className='px-10 py-4 bg-black text-white text-xs' type='submit'>Subscribe</button>
              </form>
      </div>
    </>
  )
}

export default NewsLater
