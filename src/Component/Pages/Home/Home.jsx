import React from 'react'
import "./Home.scss"
import Slider from '../../Slider/Slider'
import Category from '../../Category/Category'
import Countup from '../../Countup/Countup'


const Home = () => {
  return (
    <div>
        
        <Slider/>
        <Category/>
        <Countup/>
      
    </div>
  )
}

export default Home