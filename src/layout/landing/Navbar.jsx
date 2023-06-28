import React from 'react'
import {Logo} from "../../assets/svgs"
import {Button} from "../../components"

const Navbar = () => {
  return (
    <div className='landing-nav-main'>
        <div className='landing-nav-inner'>
            <div className='nav-logo'>
                <Logo />
            </div>
            <div className='navbar-menus'>
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Templates</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <div className='btn-nav-main'>
                <Button />
            </div>  
        </div>
    </div>
  )
}

export default Navbar