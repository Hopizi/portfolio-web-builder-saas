import React from 'react'
import "../components/styles/Button.css"

const Button = ({text, icon, className}) => {
  return (
    <button className={`flex ${className}`}>
      {text}{icon}
    </button>
  )
}

export default Button