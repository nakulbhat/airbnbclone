import React from 'react'
import herophoto from '../assets/herophoto.svg'

const Hero = () => {
  return (
    <div className='flex-col w-full justify-evenly p-10'>
      <img src ={herophoto} className=' mx-auto m-10 max-w-3xl' />
      <h1 className=' font-bold text-[36px] '>Online Experiences</h1>
    <p className=' text-l font-light'>Join unique interactive activities led by<br /> one-of-a-kind  hosts—all without leaving <br /> home.
</p>
    </div>
  )
}

export default Hero
