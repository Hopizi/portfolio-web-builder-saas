import React from 'react'
import "./styles/Onboarding.css"
import {Logo, ArrowRight} from "../../assets/svgs"
import {PersonalnfoOB, WorkDetailsInfo, SocialsInfo, Button, CircleCount} from "../../components"

const Onboarding = () => {
  return (
    <div className="on-boarding-main-page flex">
      <div className="logo-container-ob">
        <Logo className="logo" />
      </div>
      <div className="on-boarding-main-inner">
        <div className="onboarding-header">
          <h1>Create Your Personal Portfolio In 3 Easy Steps</h1>
        </div>
        <div className="on-board-progress-bar-outer">
          <div className="on-board-progress-bar">
            <div className="progress-line"></div>
            <div className='circle-cont'>
              <CircleCount number={1} />
              <p>Personal Details</p>
            </div>
            <div className='circle-cont'>
              <CircleCount number={2} />
              <p>Projects</p>
            </div>
            <div className='circle-cont'>
              <CircleCount number={3} />
              <p>Socials</p>
            </div>
          </div>
        </div>
        <div className="user-information-section">
          <SocialsInfo />
        </div>
        <div className="btn-container-ob">
          <div>
            <p>Previous</p>
          </div>
          <Button text="Next" />
        </div>
      </div>
    </div>
  );
}

export default Onboarding