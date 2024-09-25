import React from 'react'
import Hero from '../../components/Hero/Hero'
import Latest from './Latest'
import BestSaler from '../../components/BestSaler/BestSaler'
import OurPolicy from '../../components/Our_Policy/OurPolicy'
import NewsLater from '../../components/NewsLater/NewsLater'

const Home = () => {
  return (
    <>
      <div className=''>
        <Hero/>
        <Latest/>
        <BestSaler/>
        <OurPolicy/>
        <NewsLater/>
      </div>
    </>
  )
}

export default Home
