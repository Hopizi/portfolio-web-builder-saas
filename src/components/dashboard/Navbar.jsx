import React from 'react'
import "./styles/Navbar.css"
import { Notifications } from '../../assets/svgs';

const Navbar = ({clickedBar}) => {

  function getHeader() {
    switch (clickedBar) {
      case "personal":
        return "Personal Details";
      case "projects":
        return "Projects";
      case "socials":
        return "Socials";
      default:
        return null;
    }
  }

  return (
    <div className="navbar-main">
      <div className='current-page-title'>
        <h1>{getHeader()}</h1>
      </div>
      <div className="nav-main-items">
        <Notifications className='svg-icons'/>
        <div className="nav-items-container"></div>
      </div>
    </div>
  );
}

export default Navbar