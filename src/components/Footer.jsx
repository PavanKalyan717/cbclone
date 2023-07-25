import React from 'react'
import cricbuzz from '../assets/cricbuzz.png'

const Footer = () => {
  const socialmedia = ['facebook','twitter','youtube','pinterest']
  const company= ['Careers','Advertise','Privacy Policy','Terms of Use','CricBuzz TV Ads']
  const site_apps = ['CricBuzz Site','App','IOS']
  return (
    <div className=' bg-[#4a4a4a] flex flex-col items-center text-white py-6 '>
      
      <div className='flex justify-center items-start py-4'>
        <div className='px-8'>
          <img src={cricbuzz} alt='cricbuzz logo'
          width={60} height={60}
          className='rounded-lg'
          />
        </div>
        <div className='px-8'>
          <p className='font-bold'>FOLLOW US ON</p>
          {
            socialmedia.map((item)=>(
              <p className='cursor-pointer py-1'>{item}</p>
            ))
          }
        </div>
        <div className='px-8'>
          <p className='font-bold' >COMPANY</p>
          {
            company.map((item)=>(
              <p className='cursor-pointer py-1'>{item}</p>
            ))
          }
        </div>
        <div className='px-8'>
          <p className='font-bold'>MOBILE SITE & APPS</p>
          {
            site_apps.map((item)=>(
              <p className='cursor-pointer py-1'>{item}</p>
            ))
          }
        </div>
      </div>
      <p className='text-[12px]'>
      © 2023 Cricbuzz Clone | Developed By - Pavan kalyan M
      </p>
    </div>
  )
}

export default Footer