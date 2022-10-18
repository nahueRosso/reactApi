import React from 'react'
import './Card.css'
const Card = ({array}) => {
  return (
    <>
    <div  className="card">
        
        <img src={array[2]} alt="imagen" className="picture" />
        <h2>{array[0]}</h2>
        <h3>Species : {array[3]}</h3>
        <h3>Status : {array[1]}</h3>
      
    </div>
    </>
  )
}

export default Card
