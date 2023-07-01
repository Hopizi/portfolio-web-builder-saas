import React from 'react'
import "../components/styles/Button.css"

const Button = ({text, icon, className, onClick, disabled, iconbf}) => {
  return (
    <button className={`flex ${className}`} onClick={onClick} disabled={disabled}>
      {iconbf}{text}{icon}
    </button>
  )
}

export default Button