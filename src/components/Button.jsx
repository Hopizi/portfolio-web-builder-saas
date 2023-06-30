import React from 'react'
import "../components/styles/Button.css"

const Button = ({text, icon, className, onClick}) => {
  return (
    <button className={`flex ${className}`} onClick={onClick}>
      {text}{icon}
    </button>
  )
}

export default Button