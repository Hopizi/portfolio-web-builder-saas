import React, { useState } from 'react'
import "./styles/Dashboard.css"
import { Navbar, Sidebar, PersonalnfoOB,  WorkDetailsInfo, SocialsInfo, Button, ProjectsDash, PersonalDetailsDash, Socials, Settings} from '../../components'

const Dashboard = () => {

    const [clickedbar, setClickedBar] = useState("personal")

    const getComponent = () => {
      switch (clickedbar) {
        case "personal":
          return <PersonalDetailsDash />;
        case "projects":
          return <ProjectsDash />;
        case "socials":
          return <Socials />;
        case "settings":
            return <Settings />;
        default:
          return null;
      }
    };


  return (
    <div className="dashboard-main">
      <div className="dashboard-inner">
        <div className='col-1-dashboard'>
          <div className="sidebar-container">
            <Sidebar setClickedBar={setClickedBar} clickedbar={clickedbar}/>
          </div>
        </div>
        <div className='col-2-dashboard'>
          <div className="navabr-container">
            <Navbar clickedBar={clickedbar}/>
          </div>
          <div className="main-display-container">
                {clickedbar && getComponent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard