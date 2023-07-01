import React from 'react'
import "./styles/Settings.css"
import Button from '../Button'

const Settings = () => {
  return (
    <div className='settings-main-page'>
        <div className='settings-display'>
            <div className='profile-pic-header'>
                <div className='profile-pic'>
                    
                </div>
            </div>
            <div className='setting-btn'>
                <Button text='Change'/>
            </div>
        </div>        
    </div>
  )
}

export default Settings