import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";



const Header = () => {

  const[open, setOpen] = useState(false)

  return (
    <div className=' bg-primary text-center relative'>
      
      <div className='container mx-auto p-4 items-center flex justify-between'>

        <Link to='/' className='hover:brightness-70'>
        <div className='flex items-center hover:text-gray-300 gap-5'>
          <img src='/auto.png' alt="" className='w-15'/>
          <h1 className='text-2xl font-bold tracking-tight text-white'>Auto-Hub</h1>
        </div>
        </Link>

        <nav className='text-white hidden md:flex  text-md space-x-5 font-medium'>
          <Link to='/' className='hover:text-gray-400'>Home</Link>
          <Link to='/about' className='hover:text-gray-400'>About</Link>
          <Link to='/services' className='hover:text-gray-400hover:text-gray group relative'>
          <p className='hover:text-gray-400'>Services </p>

{/* ---------------------dropdown-------------------------- */}
          <div className='py-2 px-4 top-6 hidden group-hover:block bg-black space-y-2  absolute'>
            <div className='p-2 rounded-md border-b whitespace-nowrap hover:bg-primary border-white'>AC Repair</div>
            <div className='p-2 rounded-md border-b whitespace-nowrap hover:bg-primary border-white'>Brake Repair</div>
            <div className='p-2 rounded-md border-b whitespace-nowrap hover:bg-primary border-white'>Engine Repair</div>
            <div className='p-2 rounded-md border-b whitespace-nowrap hover:bg-primary border-white'>Oil Change</div>
            <div className='p-2 rounded-md border-b whitespace-nowrap hover:bg-primary border-white'>Tire Change</div>
            <div className='p-2 rounded-md border-b whitespace-nowrap hover:bg-primary border-white'>Performance</div>
          </div>

          </Link>

          <Link to='/blog' className='hover:text-gray-400'>Blog</Link>
          <Link to='/shop' className='hover:text-gray-400'>Shop</Link>
          <Link to='/contact' className='hover:text-gray-400'>Contact</Link>
        </nav>

        <div className='flex gap-5'>

          <Link to='/contact'> <button className='border-white px-5 py-2 rounded-sm hover:bg-secondary transform duration-300 border text-white'>Appointment</button></Link>

        <button onClick={()=> setOpen(!open)} className='text-2xl md:hidden block text-white'> {open ? <MdOutlineCancel /> : <GiHamburgerMenu /> } </button>

        </div>
        
        
        
      </div>

{/* -----------------Mobile --------------------------------------- */}

      {open && (
        <div className='absolute py-5 w-full block md:hidden px-5 top-20 bg-primary'>

        <nav className='text-white flex flex-col text-left border p-4 border-white rounded-md text-md space-y-4 font-semibold'>
          <Link to='/' className='p-2 hover:bg-secondary transform duration-300 rounded-md'>Home</Link>
          <Link to='/about' className='p-2 hover:bg-secondary transform duration-300 rounded-md'>About</Link>
          <Link to='/services' className='p-2 hover:bg-secondary relative group transform duration-300 rounded-md'>
          Services

          {/* ------------Dropdown----------------------- */}
          <div className='py-2 px-4 top-10 hidden group-hover:block bg-black space-y-2  absolute'>
            <div className='p-2 rounded-md border-b whitespace-nowrap hover:bg-primary border-white'>AC Repair</div>
            <div className='p-2 rounded-md border-b whitespace-nowrap hover:bg-primary border-white'>Brake Repair</div>
            <div className='p-2 rounded-md border-b whitespace-nowrap hover:bg-primary border-white'>Engine Repair</div>
            <div className='p-2 rounded-md border-b whitespace-nowrap hover:bg-primary border-white'>Oil Change</div>
            <div className='p-2 rounded-md border-b whitespace-nowrap hover:bg-primary border-white'>Tire Change</div>
            <div className='p-2 rounded-md border-b whitespace-nowrap hover:bg-primary border-white'>Performance</div>
          </div>
          
          </Link>
          <Link to='/blog' className='p-2 hover:bg-secondary transform duration-300 rounded-md'>Blog</Link>
          <Link to='/shop' className='p-2 hover:bg-secondary transform duration-300 rounded-md'>Shop</Link>
          <Link to='/contact' className='p-2 hover:bg-secondary transform duration-300 rounded-md'>Contact</Link>
        </nav>
        
      </div>
      )}

    </div>
  )
}

export default Header
