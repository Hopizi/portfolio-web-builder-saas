import React from 'react'
import "./styles/Navbar.css"
import { Notifications } from '../../assets/svgs';

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className='current-page-title'>
        <h1>{"Projects"}</h1>
      </div>
      <div className="nav-main-items">
        <Notifications className='svg-icons'/>
        <div className="nav-items-container"></div>
      </div>
    </div>
  );
}

export default Navbar