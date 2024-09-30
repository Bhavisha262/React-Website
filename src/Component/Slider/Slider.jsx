import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/cube-animation/cube-animation.scss';
import "./Slider.scss";

import img1 from "../../Assets/Slider/img1.png";
import img2 from "../../Assets/Slider/img2.jpg";
import img3 from "../../Assets/Slider/img3.png";
import img4 from "../../Assets/Slider/img4.png";
import img5 from "../../Assets/Slider/img5.jpg";
import img6 from "../../Assets/Slider/img6.jpg";
import img7 from "../../Assets/Slider/img7.jpg";


const Slider = () => {

  const slider = (
    <AwesomeSlider
      animation="cubeAnimation"
      cssModule={[CoreStyles, AnimationStyles]}
      
    >

      <div data-src={img1} />
      <div data-src={img2} />
      <div data-src={img3} />
      <div data-src={img4} />
      <div data-src={img5} />
      <div data-src={img6} />
      <div data-src={img7} />
 
    </AwesomeSlider>
  );
  
  return (
    
    <div className='slider-main'>{slider}</div>
    
    
  )
  
}

export default Slider