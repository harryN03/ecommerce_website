import React from 'react'
import { Link } from 'react-router-dom'
import { GrCart } from "react-icons/gr";
import "./navbar.css"
function Navbar() {
  return (
    <div className='navbar'>
        <h2>Shopping Zone</h2>
        <div> 
        <Link to="/ecommerce_website/" className='shop'>Shop</Link>
        <Link to="/cart" className='cart'>View Cart< GrCart/></Link>
        </div>
    </div>

  )
}

export default Navbar
