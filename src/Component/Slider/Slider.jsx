import React from 'react'
import "./Slider.scss"

import img1 from "../../Assets/Slider/slider1.png";
import img2 from "../../Assets/Slider/slider2.png";
import img3 from "../../Assets/Slider/slider3.png";
import img4 from "../../Assets/Slider/slider4.png";
import img5 from "../../Assets/Slider/slider5.png";

import down from "../../Assets/Slider/down.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Slider = () => {
  return (
    <>
    <div className='slider-container'>
     
     <Carousel
  additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={7000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 1,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 1,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>

    <div class="slide1">
      <img src={img1} alt=""/>
      <button class="overlay-button1" > Shop Now</button>
    </div>

    <div class="slide2">
      <img src={img2} alt=""/>
      <button class="overlay-button2" > Shop Now</button>
    </div>

    <div class="slide3">
      <img src={img3} alt=""/>
      <button class="overlay-button3" > Shop Now</button>
    </div>

    <div class="slide4">
      <img src={img4} alt=""/>
      <button class="overlay-button4" > Shop Now</button>
    </div>

    <div class="slide5">
      <img src={img5} alt=""/>
      <button class="overlay-button5" > Shop Now</button>
    </div>

  
  
    
  
</Carousel>
</div>

<img src={down} alt='' className='down'/>
</>
  )
}

export default Slider