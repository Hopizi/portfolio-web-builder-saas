import React from 'react'
import "./styles/PersonalDetailsDash.css";
import {Button, InstitustionForm, Work, AddedInfo, SkillsCert} from "../../components"
import {Add} from "../../assets/svgs"

const PersonalDetailsDash = () => {
  return (
    <form className="personal-details">
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
        <div className="added education-add">
          <AddedInfo />
        </div>
        <InstitustionForm />
        <div className="add-more-education-btn">
          <Button text="Add Education" className="margin-left" iconbf={<Add className="add-icons" />}/>
        </div>
      </div>
      <div className="work-expreince-section">
        <h1>Work Experience</h1>
        <div className="added work-add">
          <AddedInfo />
        </div>
        <Work />
        <div className="add-more-education-btn">
          <Button
            text="Add Work"
            className="margin-left"
            iconbf={<Add className="add-icons" />}
          />
        </div>
      </div>
      <div className="skill-section">
        <h1>Skills</h1>
        <div className="added skills-add">
          <SkillsCert skill={"ReactJs"} />
          <SkillsCert skill={"NextJs"} />
        </div>
        <div className="personal-forms-2">
          <label>Enter Skills</label>
          <input
            type="text"
            placeholder="Please enter your skills"
            className="on-boarding-input "
          />
        </div>
      </div>
      <div className="certifications-section">
        <h1>Certifications</h1>
        <div className="added certifications-add">
          <SkillsCert skill={"Udemy"} />
          <SkillsCert skill={"Alt School Africa"} />
        </div>
        <div className="personal-forms-2">
          <label>Enter Certifications</label>
          <input
            type="text"
            placeholder="Please enter certifications"
            className="on-boarding-input "
          />
        </div>
      </div>
      <div className="personal-detail-submit">
        <Button text="Save Profile" className="margin-left" />
      </div>
    </form>
  );
}

export default PersonalDetailsDash