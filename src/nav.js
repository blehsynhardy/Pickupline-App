import React from 'react'
import {HiOutlineMenu} from 'react-icons/hi'

const nav = () => {
  return (
    <nav>
        <div className='navbar__brand'>
            <h3>Atomicity</h3>
        </div>
         
        <div className='nav__menu'>
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">PICKUP</a></li>
                <li><a href="#">HOME</a></li>
                <li><a href="#">PICKUP</a></li>
            </ul>
        </div>
        
        <a href='#' className='toggleMenu'><HiOutlineMenu/></a>
         
        
    </nav>
  )
}

export default nav