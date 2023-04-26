import React from 'react'
import './Hero.css'
import Header from '../Header/Header'

const Hero = () => {
  return (
    <section className='w-full h-[100vh] overflow-hidden bg-custom   '  >
      <div className='pt-10'>
        <Header />
      </div>
      <div className=' w-[100%]  h-[calc(100vh-200px)] flex justify-center  flex-col '>
      <div className='hero-content md:max-w-[60%] lg:max-w-[50%] max-w-[80%] border-white border-2 ml-[10%] p-10  '>
        <h1 className='text-[2rem] md:text-[2.5rem] lg:text-[2.5rem] uppercase text-white text-left max-w-[300px] md:max-w-[400px]'> Immersive experiences that deliver</h1>
      </div>
      </div>
    </section>
  )
}
export default Hero