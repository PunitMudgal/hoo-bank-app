import React from 'react'

export default function Container(props) {
  return (
  
    <div className="business-left_content">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button className="bg-blue-gradient" type="button">Get Started</button>
    </div>

  );
}
