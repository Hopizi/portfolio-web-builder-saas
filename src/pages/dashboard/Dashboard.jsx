import React from 'react'
import "./styles/Dashboard.css"
import { Navbar, Sidebar, PersonalnfoOB,  WorkDetailsInfo, SocialsInfo, Button, ProjectsDash, PersonalDetailsDash, Socials} from '../../components'

const Dashboard = () => {
  return (
    <div className="dashboard-main">
      <div className="dashboard-inner">
        <div className='col-1-dashboard'>
          <div className="sidebar-container">
            <Sidebar />
          </div>
        </div>
        <div className='col-2-dashboard'>
          <div className="navabr-container">
            <Navbar />
          </div>
          <div className="main-display-container">
                <Socials />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard