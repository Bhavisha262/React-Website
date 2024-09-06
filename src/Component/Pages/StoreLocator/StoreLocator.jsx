import React from 'react'
import "./StoreLocator.scss"

const StoreLocator = () => {
  return (
    <div className='store'>
        <div className="location">
        <div className="wavy-heading-container">
      <h1 className="wavy-heading">You Asked, We Listened</h1>
    </div>
            <h3>Grace Beauty is coming near you.</h3>
            <br/>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236174.88030798844!2d73.18110440935226!3d22.34484811814007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc9f0c7344991%3A0x5b0cf2c64877e3dd!2sShiv%20Shakti%20avenue!5e0!3m2!1sen!2sin!4v1708664304582!5m2!1sen!2sin" width="1000" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Grace Beauty' ></iframe>
            
        </div>
    </div>
  )
}

export default StoreLocator