import React from 'react'
import "./styles/Sidebar.css";
import { Logo } from '../../assets/svgs';

const Sidebar = () => {
  return (
    <div className='side-bar-main'>
        <div className="side-bar-logo">
            <Logo className='logo'/>
        </div>
        <div className="side-bar-inner">
            <ul>
                <li>Personal Details</li>
                <li>Projects</li>
                <li>Socials</li>
                <li>Settings</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar