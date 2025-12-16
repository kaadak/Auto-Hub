import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='p-4 bg-green-950 text-center text-white'>
      This is the header

      <nav className='flex gap-x-5'>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/blog'>blog</Link>
        <Link to='/contact'>contact</Link>
        <Link to='/services'>Services</Link>
        <Link to='/shop'>Shop</Link>
      </nav>
    </div>
  )
}

export default Header
