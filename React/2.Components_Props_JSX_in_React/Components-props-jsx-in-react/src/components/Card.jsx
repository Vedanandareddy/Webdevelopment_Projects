import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcREQMJAS4ffYMGofV-2VABWJ52ro7qYOQI4kp0-DPIJb4qRE8827j-RhFi613yHv0UaJF5-qfZZr3Q80_LcbYTSgfiuQji19Pz3CLmpHg"  style={{objectFit : 'contain' ,  width: "100%" }} alt="" />
      <div className="title">
        {props.title}
      </div>
      <div className="description">{props.description}</div>
    </div>
  )
}

export default Card
