import React from 'react'
import "./styles/SocialsInfo.css";

const SocialsInfo = () => {
  return (
    <div className="socials-info-main-container">
      <div className="social-info-inner">
        <div>
          <label>Linkedln</label>
          <input
            type="text"
            placeholder="Please enter your Linkedln profile link" className='on-boarding-input'
          />
        </div>
        <div>
          <label>Github</label>
          <input
            type="text"
            placeholder="Please enter your Github profile link" className='on-boarding-input'
          />
        </div>
        <div>
            <label>Twitter</label>
            <input type='text' placeholder='Please enter your Twitter Profile link' className='on-boarding-input'/>
        </div>
      </div>
    </div>
  );
}

export default SocialsInfo