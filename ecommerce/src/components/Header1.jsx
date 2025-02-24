import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router'




function Header1() {
  return (
    <div className='flex flex-row justify-center gap-[100px] bg-gray-100 h-[80px] items-center'>
      
        <p className='hover:text-green-500 transition all duration-800 cursor-pointer' ><Link to="/">Home</Link></p>
        <p className='hover:text-green-500 transition all duration-800 cursor-pointer'><Link to="/alltea">All Tea</Link></p>
        <p className='hover:text-green-500 transition all duration-800 cursor-pointer'><Link to="/discover">Discover</Link></p>
        <p className='hover:text-green-500 transition all duration-800 cursor-pointer'><Link to="/news">News</Link></p>
        <p className='hover:text-green-500 transition all duration-800 cursor-pointer'><Link to="/pages">Pages</Link></p>
        
        <div className='flex felx-row  pl-[80px]'>
          <button className='bg-blue-400 p-[5px] px-[17px] rounded-[20px] text-white'><Link to="/login">Login</Link></button>
        </div>
        
        
        
        
        
        </div>
  )
}

export default Header1