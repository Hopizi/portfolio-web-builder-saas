import React from 'react'
import {Logo} from "../../assets/svgs"
import {Button} from "../../components"
import "./styles/Navbar.css"

const Navbar = () => {
  return (
    <div className='landing-nav-main'>
        <div className='landing-nav-inner'>
            <div className='nav-logo'>
                <Logo className='logo'/>
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
                <p>Log in</p>
                <Button text='Get Portfol Free'/>
            </div>  
        </div>
    </div>
  )
}

export default Navbar