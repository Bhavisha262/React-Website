import React from 'react'
import "./Home.scss"
import Slider from '../../Slider/Slider'
import Category from '../../Category/Category'
import Countup from '../../Countup/Countup'
import Featured from './Featured/Featured'



const Home = () => {
  return (
    <div>
    
        <Slider/>
        <Featured/>
       <Category/>
         <Countup/> 
    </div>
  )
}

export default Home