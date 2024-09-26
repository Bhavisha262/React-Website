import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/cube-animation/cube-animation.scss';
import "./Slider.scss";
import img1 from "../../Assets/Slider/F14_Desk_top_size.jpg";
import img2 from "../../Assets/Slider/Nudes_HP-Banner_Med_Desktop_1.jpg";
import img3 from "../../Assets/Slider/05_2024_TeaParty_Launch_Banner_2000x.progressive.jpg";
import img4 from "../../Assets/Slider/Glycolic-desktop-homepage_1_1400x.jpg";
import img5 from "../../Assets/Slider/SINFUL-PLUMP-LIP-GLOSS-OP-1_web.jpg";
import img6 from "../../Assets/Slider/Sinful-Lipstick-Banner-Desktop1.jpg";
import img7 from "../../Assets/Slider/Homepage_banner-02-02_1400x.jpg";



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