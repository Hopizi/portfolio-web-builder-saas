import React from "react";

const InstitustionForm = () => {
  return (
    <div className="instustion-form-main">
      <div className="personal-forms-1">
        <label>Instituition</label>
        <input
          type="text"
          placeholder="Please enter your full name"
          className="on-boarding-input "
        />
      </div>
      <div className="personal-forms-1">
        <label>Specialization</label>
        <input
          type="text"
          placeholder="Please enter your full name"
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
};

export default InstitustionForm;
