import React, { useState } from 'react'
import "./FAQ.scss"

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen1, setIsOpen1] = useState(false);
  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
  };

  const [isOpen2, setIsOpen2] = useState(false);
  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };

  const [isOpen3, setIsOpen3] = useState(false);
  const toggleAccordion3 = () => {
    setIsOpen3(!isOpen3);
  };

  const [isOpen4, setIsOpen4] = useState(false);
  const toggleAccordion4 = () => {
    setIsOpen4(!isOpen4);
  };

  const [isOpen5, setIsOpen5] = useState(false);
  const toggleAccordion5 = () => {
    setIsOpen5(!isOpen5);
  };

  const [isOpen6, setIsOpen6] = useState(false);
  const toggleAccordion6 = () => {
    setIsOpen6(!isOpen6);
  };
  return (
    <div className='faqs'>
        <div className="faq">
        <div className="wavy-heading-container">
      <h1 className="wavy-heading">FAQs</h1>
    </div>
            <b><h4>Hours of Operation</h4></b>
            <p>Our Grace Beauty support team is available: Monday-Saturday: 9AM-6PM IST. Grace Beauty support team is not available Sundays. </p>
            <b><h4>Formulas You Can Trust</h4></b>
            <p>Because “clean" beauty lacks a regulatory definition by the Food and Drug Administration, we chose not to market our brand as "clean." But rest assured, our products are thoughtfully formulated, thoroughly tested, and made to comply with worldwide regulations of quality and safety—you have our word. Rare Beauty is cruelty free, vegan, and certified by PETA’s Global Beauty Without Bunnies.</p>
            <b><h4>Inventory</h4></b>
            <p>We’re so grateful and humbled by the support of our Rare Beauty community and we appreciate you sticking by us while we work tirelessly to get products back in stock. We know it’s frustrating when you can’t find your Rare Beauty products - our teams are working as quickly as possible to get your favorite items back in stock and to make sure they’re regularly available. Thanks for being patient with us!</p>
            <b><h4>Allergy</h4></b>
            <b><p>Q: Help! I had an allergic or other adverse reaction! </p></b>
            <p>A: If you have any adverse reactions to our products, please contact your health care provider immediately. If it is an emergency, please call 100. </p>
            <p>For general questions about our products, please contact our Rare Beauty support team for assistance at 1-888-892-7273 or hello@rarebeauty.com </p>
            <b><h4>My Order</h4></b>
            <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>Help my order is missing!?</h3>
        <div className="arrow-icon">&#9660;</div>
      </div>
      {isOpen && <div className="accordion-content">
        <p>Oh no! Please contact our support team for assistance at 1-888-892-7273 or hello@rarebeauty.com </p>
        </div>}
            </div>
            <br/>
            <div className={`accordion1 ${isOpen1 ? 'open' : ''}`}>
      <div className="accordion-header1" onClick={toggleAccordion1}>
        <h3>How do I change or cancel my order?</h3>
        <div className="arrow-icon1">&#9660;</div>
      </div>
      {isOpen1 && <div className="accordion-content1">
        <p> In an effort to ship out your products efficiently, we immediately begin processing your order as soon as it is placed. Unfortunately, once orders are submitted, they cannot be canceled or modified. </p>
        </div>}
            </div>
            <br/>
            <div className={`accordion2 ${isOpen2 ? 'open' : ''}`}>
      <div className="accordion-header2" onClick={toggleAccordion2}>
        <h3>How can I find the status of my order?  </h3>
        <div className="arrow-icon2">&#9660;</div>
      </div>
      {isOpen2 && <div className="accordion-content2">
        <p>Find the status of a particular order and view your Order History on the Order Status tracking page under ‘My Account’. </p>
        </div>}
            </div>
            <b><h4>Shipping & Returns</h4></b>
            <div className={`accordion3 ${isOpen3 ? 'open' : ''}`}>
      <div className="accordion-header3" onClick={toggleAccordion3}>
        <h3>How do I qualify for free shipping?</h3>
        <div className="arrow-icon3">&#9660;</div>
      </div>
      {isOpen3 && <div className="accordion-content3">
        <p>Standard Shipping is FREE on all U.S. purchases of $50 and over (excluding taxes) and international order $100 USD and over (excluding taxes). </p>
        </div>}
            </div>
            <br/>
            <div className={`accordion4 ${isOpen4 ? 'open' : ''}`}>
      <div className="accordion-header4" onClick={toggleAccordion4}>
        <h3>Are returns free? </h3>
        <div className="arrow-icon4">&#9660;</div>
      </div>
      {isOpen4 && <div className="accordion-content4">
        <p> For India orders, items returned within 30 days of purchase qualify for free return shipping. Donations are non-refundable. Note you are allowed 1 exchange on your original order.Unfortunately, we cannot offer returns or exchanges on orders shipped outside of India Shipping and duties are non-refundable. For additional information please contact our support team at 1-888-892-7273 or hello@rarebeauty.com.</p>
        </div>}
            </div>
            <br/>
            <div className={`accordion5 ${isOpen5 ? 'open' : ''}`}>
      <div className="accordion-header5" onClick={toggleAccordion5}>
        <h3>When can I get items that are out of stock? </h3>
        <div className="arrow-icon5">&#9660;</div>
      </div>
      {isOpen5 && <div className="accordion-content5">
        <p> We’re so grateful and humbled by the support of our Rare Beauty community and we appreciate you sticking by us while we work tirelessly to get products back in stock. We know it’s frustrating when you can’t find your Rare Beauty products - our teams are working as quickly as possible to get your favorite items back in stock and to make sure they’re regularly available. Thanks for being patient with us!Sign up for back in stock notifications to be the first to know when items come back in stock.</p>
        </div>}
            </div>
            <b><h4>Others</h4></b>
            <div className={`accordion6 ${isOpen6 ? 'open' : ''}`}>
      <div className="accordion-header6" onClick={toggleAccordion6}>
        <h3>Are your products vegan & cruelty-free?  </h3>
        <div className="arrow-icon6">&#9660;</div>
      </div>
      {isOpen6 && <div className="accordion-content6">
        <p> Yes, all our products are 100% vegan and cruelty-free, meaning we do not test on animals.</p>
        </div>}
            </div>
        </div>
    </div>
  )
}

export default FAQ