import React from 'react';
import Img from '../img/bg-person.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
  <section className='h-[470px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
    <div className='container mx-auto flex justify-around h-full'>
      <div className='flex flex-col justify-center'>
        <div className='font-semibold flex items-center uppercase'>
          <div className='w-10 h-[2px] bg-red-500'></div> New Trend
        </div>
        <h1 className='text-[70px] leading-[1.1] font-light mb-4'>Best Sellers in Clothing <br />
        <span className='font-semibold'>MENS / WOMENS</span>
      </h1>
        <div className='self-start uppercase font-semibold border-b-2 border-primary'>#1 Trusted Cloth-Selling Website</div>
      </div>
      <div className='hidden lg:block'>
        <img src={Img} alt=''/>
      </div>
    </div>
  </section>
  )
}

export default Hero;
