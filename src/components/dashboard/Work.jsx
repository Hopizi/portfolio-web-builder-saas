import React from 'react'

const Work = () => {
  return (
    <div className="work-experience-main">
      <div className="personal-forms-1">
        <label>Company</label>
        <input
          type="text"
          placeholder="Please enter Company Name"
          className="on-boarding-input "
        />
      </div>
      <div className="personal-forms-1">
        <label>Role</label>
        <input
          type="text"
          placeholder="Please enter your Role at the Company"
          className="on-boarding-input "
        />
      </div>
      <div className="date-attended-main">
        <span>
          <label>From</label>
          <input placeholder="YYYY" className="on-boarding-input " />
        </span>
        <span>
          <label>To</label>
          <input placeholder="YYYY" className="on-boarding-input " />
        </span>
      </div>
    </div>
  );
}

export default Work