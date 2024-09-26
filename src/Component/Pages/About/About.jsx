import React from 'react'
import "./About.scss"
import img1 from "../../../Assets/About/about1.png"
import img2 from "../../../Assets/About/owner 1.png"
import img3 from "../../../Assets/About/mission.png"

const About = () => {
   
  return (
    
   <div className='about-main'>
    <div className="text1">
    <div className="wavy-heading-container">
      <h1 className="wavy-heading">About Us</h1>
    </div>
<p>Grace Beauty is breaking down unrealistic standards of perfection.</p>
<p>This is makeup and personal care made to feel good in, without hiding what makes you unique—because Grace Beauty is not about being someone else, but being who you are.</p>
    </div>

<div className="image">
    <img src={img1} alt=''/>
</div>

<div className="image2">
    <img src={img2} alt=''/>
</div>
<div className="text2">
<h2>A Note from Our <i>Founder</i></h2>
<p> - &nbsp; JOSEPHINE &nbsp; SANTIAGO</p>
<p>I think Grace Beauty can be more than a beauty brand—it can make souls smile gracefully. I want us all to stop comparing ourselves to each other and just start embracing our own uniqueness.</p>

</div>
   
<div className="text3">
<h2>Our Mission & Vision</h2>
<p>We are on a Mission to help everyone celebrate their individuality by redefining what beautiful means. We want to promote self-acceptance and give people the tools they need to feel less alone in the world.</p>
<p>Our Vision is to create a safe, welcoming space in beauty—and beyond—that supports mental well-being across age, gender identity, sexual orientation, race, cultural background, physical or mental ability, and perspective.</p>
</div>
<div className="image3">
  <img src={img3} alt=''/>
</div>
    </div>



  )
}

export default About