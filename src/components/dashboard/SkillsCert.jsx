import React from 'react'
import "./styles/SkillsCert.css";

const SkillsCert = ({skill}) => {
  return (
    <div className='skill-cert'>
        <p>{skill}</p>
    </div>
  )
}

export default SkillsCert