import React from 'react'
import "./footer.css"
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <div className='footer'>
        <div className='contact-infor'>
            <h4>Contact information:</h4>
            <p>Email: fakemail@shoppingzone.ca</p>
            <p>Hotline : (+1) 555-555-5555  </p>
        </div>
        <div className='social-media-footer'>
            <a href="https://www.facebook.com/"><FaFacebookSquare /></a>
            <a href="https://www.instagram.com/" > <FaInstagram /></a>
            <a href="https://twitter.com/"><FaTwitter size="32" style={{color:"black"}}/></a>
        </div>
    </div>
  )
}

export default Footer