import React from 'react'
import "./styles/Socials.css"
import Button from '../Button';

const Socials = () => {
  return (
    <div className="socials-main-container">
      <div className="social-info-inner">
        <div>
          <label>Linkedln</label>
          <input
            type="text"
            placeholder="Please enter your Linkedln profile link"
            className="on-boarding-input"
          />
        </div>
        <div>
          <label>Github</label>
          <input
            type="text"
            placeholder="Please enter your Github profile link"
            className="on-boarding-input"
          />
        </div>
        <div>
          <label>Twitter</label>
          <input
            type="text"
            placeholder="Please enter your Twitter Profile link"
            className="on-boarding-input"
          />
        </div>
      </div>
      <div className='socials-btn-container'>
            <Button text='Save' className='margin-left'/>
      </div>
    </div>
  );
}

export default Socials