import React from 'react'
import "./styles/WorkDetailsInfo.css";
import {Button} from "../../components"

const WorkDetailsInfo = () => {
  return (
    <div className="work-details-main-container">
      <div className="work-details-main-inner">
        <div className="resume-upload-section">
          <p>Add Your Resume</p>
          <Button text="Upload Resume" />
        </div>
        <div className="work-projects-section">
          <div>
            <label>Projects Title</label>
            <input type="text" className="on-boarding-input" />
          </div>
          <div>
            <label>Projects Description</label>
            <textarea className="text-area" />
          </div>
          <div className="project-image">
            <label>Project Preview Image</label>
            <Button text="Upload Preview" className="upload-pic" />
          </div>
        </div>
        <div className='add-more-project'>
             <div className='add-section-btn'>
                <p>Add Projects</p>
             </div>
        </div>
      </div>
    </div>
  );
}

export default WorkDetailsInfo