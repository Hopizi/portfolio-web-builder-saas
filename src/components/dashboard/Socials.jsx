import React from 'react'
import "./styles/Socials.css"
import Button from '../Button';
import { Github, Linkedln, Twitter } from '../../assets/svgs';

const Socials = () => {
  return (
    <div className="socials-main-container">
      <div className="social-info-inner">
        <div>
          <div>
            <Linkedln className='svg-icons'/>
          </div>
          <div>
            <label>Linkedln</label>
            <input
              type="text"
              placeholder="Please enter your Linkedln profile link"
              className="on-boarding-input"
            />
          </div>
        </div>
        <div>
          <div>
            <Github className='svg-icons'/>
          </div>
          <div>
            <label>Github</label>
            <input
              type="text"
              placeholder="Please enter your Github profile link"
              className="on-boarding-input"
            />
          </div>
        </div>
        <div>
          <div>
            <Twitter className='svg-icons'/>
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
      </div>
      <div className="socials-btn-container">
        <Button text="Save" className="margin-left" />
      </div>
    </div>
  );
}

export default Socials