import React from 'react'
import "./styles/Sidebar.css";
import { Logo } from '../../assets/svgs';

const Sidebar = ({setClickedBar}) => {
  return (
    <div className='side-bar-main'>
        <div className="side-bar-logo">
            <Logo className='logo'/>
        </div>
        <div className="side-bar-inner">
            <ul>
                <li onClick={() => setClickedBar("personal")}>Personal Details</li>
                <li onClick={() => setClickedBar("projects")}>Projects</li>
                <li onClick={() => setClickedBar("socials")}>Socials</li>
                <li onClick={() => setClickedBar("settings")}>Settings</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar