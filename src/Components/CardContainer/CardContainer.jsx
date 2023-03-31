import React from 'react'
import Card from '../Card/Card'
// import Robots from '../../Helper/robots'
import './Style.css'
const CardContainer = ({Robots}) => {
  
  return (
    <div className='container'>
        {
          Robots.map((Robots) => (
            <Card Robots = {Robots} />
          ))
        }
        {/* <Card Robots = {Robots} /> */}
    </div>
  )
}

export default CardContainer