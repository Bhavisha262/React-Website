import React from 'react'
import img1 from "../../../../Assets/Slider/featured.jpg"
import "./Featured.scss"

const Featured = () => {
  return (
    <div className="featured">
     <div className="wavy-heading-container">
      <h1 className="wavy-heading">Featured In</h1>
    </div>
      <img src={img1} alt=''/>
    </div>
  )
}

export default Featured