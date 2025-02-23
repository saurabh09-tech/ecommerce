import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router'




function Header1() {
  return (
    <div className='flex flex-row justify-center gap-[100px] bg-gray-100 h-[80px] items-center'>
        <p className='hover:text-green-500 cursor-pointer' ><Link to="/">Home</Link></p>
        <p className='hover:text-green-500 cursor-pointer'><Link to="/alltea">All Tea</Link></p>
        <p className='hover:text-green-500 cursor-pointer'><Link to="/discover">Discover</Link></p>
        <p className='hover:text-green-500 cursor-pointer'><Link to="/news">News</Link></p>
        <p className='hover:text-green-500 cursor-pointer'><Link to="/pages">Pages</Link></p>

        <div>
           
        </div>
        
        
        
        
        
        </div>
  )
}

export default Header1