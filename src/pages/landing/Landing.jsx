import React from 'react'
import "./styles/Landing.css"
import { Facebook, Logo, ArrowRight } from '../../assets/svgs'
import { Navbar } from '../../layout/landing'
import { Button } from '../../components'

const Landing = () => {
  return (
    <div className="landing-page-main">
      <div className="nav-landing-container">
        <Navbar />
      </div>
      <div className="main-landing-dislay">
        <div className="header-text-cnt">
          <h1>Create Your Personal Portfolio In Minutes</h1>
          <div className='p-tag-header-main'>
            <div className="p-tag-header">
              <p>
                Unleash your personal brand. Build a stunning online portfolio
                in minutes
              </p>
            </div>
            <Button text='Get Portfol Free' icon={<ArrowRight className='svg-arrow-right'/>}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing