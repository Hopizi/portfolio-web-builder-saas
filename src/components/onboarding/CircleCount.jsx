import React from 'react'
import "./styles/CircleCount.css";

const CircleCount = ({number}) => {
  return (
    <div className="circle">
      <p>{number}</p>
    </div>
  );
}

export default CircleCount