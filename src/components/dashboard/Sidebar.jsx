import React from 'react'
import "./styles/Sidebar.css";
import { Logo } from '../../assets/svgs';

const Sidebar = ({setClickedBar, clickedbar}) => {

  const background = {
    backgroundColor: "#084E91",
  };

  return (
    <div className="side-bar-main">
      <div className="side-bar-logo">
        <Logo className="logo" />
      </div>
      <div className="side-bar-inner">
        <ul>
          <li
            onClick={() => setClickedBar("personal")}
            style={
              clickedbar === "personal" ? { backgroundColor: "#084E91" } : {}
            }
          >
            Personal Details
          </li>
          <li
            onClick={() => setClickedBar("projects")}
            style={
              clickedbar === "projects" ? { backgroundColor: "#084E91" } : {}
            }
          >
            Projects
          </li>
          <li
            onClick={() => setClickedBar("socials")}
            style={
              clickedbar === "socials" ? { backgroundColor: "#084E91" } : {}
            }
          >
            Socials
          </li>
          <li
            onClick={() => setClickedBar("settings")}
            style={
              clickedbar === "settings" ? { backgroundColor: "#084E91" } : {}
            }
          >
            Settings
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar