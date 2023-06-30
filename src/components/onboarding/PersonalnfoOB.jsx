import React from 'react'
import "./styles/PersonalnfoOB.css";

const PersonalnfoOB = () => {
  return (
    <div className="personal-info-ob">
      <div className="personal-info-ob-inner">
        <div className="personal-forms-1">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Please enter your full name"
            className="on-boarding-input "
          />
        </div>
        <div className="personal-forms-1">
          <label>Please Describe Your Self</label>
          <textarea className="on-boarding-text-area" />
        </div>
      </div>
    </div>
  );
}

export default PersonalnfoOB