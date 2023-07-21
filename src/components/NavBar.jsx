import React from 'react'
import CBImage from '../assets/cricbuzz.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='flex flex-row justify-around items-center
    py-2 font-extrabold text-xl bg-[#009270]'>
      <div className='flex flex-row items-center'>
      <Link to='/'>
        <img src={CBImage} alt="logo" width={60} height={60}
          className='rounded-xl pl-2 pr-2'
        />
        </Link>
        <h2>
         CricBuzz Clone
        </h2>
      </div>
      <div className='flex flex-row pr-2 '>
      <div className='px-2'>
        <Link to='/Stats'>
          Stats
        </Link>
        </div>
        <div className='px-2'>
        <Link to='/Photos'>
          Gallery
        </Link>
        </div>
        <div className='px-2'>
        <Link to='/AboutUs'>
          About Us
        </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar