import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <>
     <header className='header'>
     <div>
       <Link  className='links' to='/'>Home</Link>
     </div>
     <nav className='navbar'>
       <ul>
         <Link className='links' to='/login'>login</Link>
         <Link className='links' to='/signup'>signup</Link>
       </ul>
     </nav>

     </header>
   </>
  )
}

export default Header