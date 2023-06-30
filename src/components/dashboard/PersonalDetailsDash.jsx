import React from 'react'
import "./styles/PersonalDetailsDash.css";
import {Button, InstitustionForm, Work} from "../../components"

const PersonalDetailsDash = () => {
  return (
    <div className="personal-details">
      <div className="personal-info-ob-inner">
        <h1>User Details</h1>
        <div className="personal-forms-1">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Please enter your full name"
            className="on-boarding-input "
          />
        </div>
        <div className="personal-forms-1">
          <label>Role</label>
          <input
            type="text"
            placeholder="Please enter your Role"
            className="on-boarding-input "
          />
        </div>

        <div className="personal-forms-1">
          <label>Role Description</label>
          <input
            type="text"
            placeholder="Please enter your Role Description"
            className="on-boarding-input "
          />
        </div>
        <div className="personal-forms-1">
          <label>Please Describe Your Self</label>
          <textarea className="on-boarding-text-area" />
        </div>
      </div>
      <div className="education-section">
        <h1>Education</h1>
        <InstitustionForm />
        <div className="add-more-education-btn">
          <Button text="Add Education" className="margin-left" />
        </div>
      </div>
      <div className="work-expreince-section">
        <h1>Work Experience</h1>
        <Work />
        <div className="add-more-education-btn">
          <Button text="Add Work" className="margin-left" />
        </div>
      </div>
      <div className="skill-section">
        <h1>Skills</h1>
        <div className="personal-forms-2">
          <label>Enter Skills</label>
          <input
            type="text"
            placeholder="Please enter your Role Description"
            className="on-boarding-input "
          />
          </div>
      </div>
    </div>
  );
}

export default PersonalDetailsDash