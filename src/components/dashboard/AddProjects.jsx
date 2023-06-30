import React from 'react'
import "./styles/AddProjects.css";
import Button from '../Button';

const AddProjects = () => {
  return (
    <div className="add-more-projects-btn">
      <h1>Add Project</h1>
      <div className="work-projects-section">
        <div>
          <label>Projects Title</label>
          <input
            type="text"
            className="on-boarding-input"
            placeholder="Project Title"
          />
        </div>
        <div>
          <label>Projects Link</label>
          <input
            type="text"
            className="on-boarding-input"
            placeholder="Project Link"
          />
        </div>
        <div>
          <label>Projects Description</label>
          <textarea className="text-area" />
        </div>
        <div className="project-image">
          <label>Project Preview Image</label>
          <input
            type="text"
            className="on-boarding-input"
            placeholder="Image Url"
          />
        </div>
        <div className='add-btn-popup'>
          <Button text="Add" className='margin-left'/>
        </div>
      </div>
    </div>
  );
}

export default AddProjects