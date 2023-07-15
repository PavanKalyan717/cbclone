import React from 'react'
import CBImage from '../assets/cricbuzz.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='flex flex-row justify-around  items-center pt-2 font-extrabold text-xl'>
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
        <h1 className='pl-2 pr-2'>
         Sign In
        </h1>
        <h3 className='pl-2 pr-2'>
         Sign Up
        </h3>
      </div>
    </nav>
  )
}

export default NavBar