import React, { useState } from 'react'
import "./PrivacyPolicy.scss"
const PrivacyPolicy = () => {

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
  return (
    <div className='privacy'>
    
      <div className="policy">
        <h1>Privacy Policy</h1>
        <h3>#yourdataisyours</h3>
        <p>We know that you care about your personal data and how it is used, and we want you to trust that Grace Beauty uses your personal data carefully. This Privacy Policy will help you understand what personal data we collect, why we collect it and what we do with it.</p>
        <p>As you read our Policy, please keep in mind that it applies to all Grace Beauty.</p>
        <p>Please take a moment to familiarise yourself with our privacy practices and let us know if you have any questions by sending us an email to Customer Care or submitting a request through the “Contact Us” form on our websites.</p>
        <p>You have the right to object to certain uses of your personal data including the use of your personal data for direct marketing. See what your rights are and how you can exercise them here:</p>
      </div>
      <br/>
      <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>Who Is Collecting It ?</h3>
        <div className="arrow-icon">&#9660;</div>
      </div>
      {isOpen && <div className="accordion-content">
        <p>Any personal data provided to or collected by Grace Beauty is controlled by Mr Shane Arbruto, the data controller.</p>
        <p>This Privacy Notice also applies to Grace Beauty’s marketing content, including offers and advertisements for products and services, which we (or a service provider acting on our behalf) send to you on third-party websites, platforms and applications based on your site usage information. These third-party websites generally have their own Privacy Notice and Terms and Conditions. We encourage you to read them before using those websites.</p>
        </div>}
      </div>
      <br/>
      <div className={`accordion1 ${isOpen1 ? 'open' : ''}`}>
      <div className="accordion-header1" onClick={toggleAccordion1}>
        <h3>What Personal Data Is Being Collected ?</h3>
        <div className="arrow-icon1">&#9660;</div>
      </div>
      {isOpen1 && <div className="accordion-content1">
        <p><b>Personal Data</b> means any information that can be used to identify directly or indirectly a specific individual.</p>
        <p>You are not required to provide Grace Beauty the personal data that we request, but if you choose not to do so, we may not be able to provide you with our products or services, or with a high quality of service or respond to any queries you may have.</p>
        <p>We may collect personal data from a variety of sources. This includes:</p>
        <li>Personal data you give us directly,</li>
        <li>Personal data we collect automatically, and</li>
        <li>Personal data we collect from other sources.</li>
        <p>We sometimes use your personal data to carry out age verification checks and enforce any such age restrictions.</p>
      </div>}
      </div>
      <br/>
      <div className={`accordion2 ${isOpen2 ? 'open' : ''}`}>
      <div className="accordion-header2" onClick={toggleAccordion2}>
        <h3>What Purpose Do We Use Your Data For ?</h3>
        <div className="arrow-icon2">&#9660;</div>
      </div>
      {isOpen2 && <div className="accordion-content2">
        <p>We collect, process and disclose your personal data for the following purposes:</p>
        <li>To process your payments, if you purchase our products, to provide you with your order status, deal with your enquiries and requests, and assess and handle any complaints;</li>
        <li>To process and answer your inquiries or to contact you to answer your questions and/or requests;</li>
        <li>To develop and improve our products, services, communication methods and the functionality of our websites;</li>
        <li>For the purposes of competitions or promotions that you have entered;</li>
        <li>To communicate information to you and to manage your registration and/or subscription to our newsletter or other communications; </li>
        <li>To manage our everyday business needs regarding your participation in our contests, sweepstakes or promotional activities or request;</li>
        <li>To authenticate the identity of individuals contacting us by telephone, electronic means or otherwise;</li>
        <li>For internal training and quality assurance purposes;</li>
        <li>To understand and assess the interests, wants, and changing needs of consumers, to improve our website, our current products and services, and/or developing new products and services; and</li>
        <li>To provide personalised products, communications and targeted advertising as well as product recommendations to you.</li>
      </div>}
      </div>
      <br/>
      <div className={`accordion3 ${isOpen3 ? 'open' : ''}`}>
      <div className="accordion-header3" onClick={toggleAccordion3}>
        <h3>What Will It Be Shared With ?</h3>
        <div className="arrow-icon3">&#9660;</div>
      </div>
      {isOpen3 && <div className="accordion-content3">
        <p>Grace Beauty shares your personal data within the Group and with selected third-parties in the following circumstances:</p>
        <li>Third-party service providers.</li>
        <li>Other third-parties.</li>
        <li>Business transfers.</li>
        <li>Legal disclosure.</li>
      </div>}
      </div>
      <br/>
      <div className={`accordion4 ${isOpen4 ? 'open' : ''}`}>
      <div className="accordion-header4" onClick={toggleAccordion4}>
        <h3>How Do We Protect Your Personal Data?</h3>
        <div className="arrow-icon4">&#9660;</div>
      </div>
      {isOpen4 && <div className="accordion-content4">
        <p>Grace Beauty takes the security of your personal data very seriously. We take every effort to protect your personal data from misuse, interference, loss, unauthorised access, modification or disclosure.</p>
        <p>Our measures include implementing appropriate access controls, investing in the latest Information Security Capabilities to protect the IT environments we leverage, and ensuring we encrypt, pseudonymise and anonymise personal data wherever possible.</p>
        <p>Access to your personal data is only permitted among our employees and agents on a need-to-know basis and subject to strict contractual confidentiality obligations when processed by third-parties.</p>
      </div>}
      </div>
      <br/>
      <div className={`accordion5 ${isOpen5 ? 'open' : ''}`}>
      <div className="accordion-header5" onClick={toggleAccordion5}>
        <h3>What Are Your Rights?</h3>
        <div className="arrow-icon5">&#9660;</div>
      </div>
      {isOpen5 && <div className="accordion-content5">
        <p>Where we process your personal data, you have a number of rights over how the data is processed and can exercise these rights at any point. We have provided an overview of these rights below together with what this entails for you. You can exercise your rights by sending an email or submitting a request through the “Contact Us” form on our websites.</p>
       <li>The right to be informed.</li>
       <li>The right to access and rectification.</li>
       <li>The right to data portability.</li>
       <li>The right to be forgotten.</li>
       <li>The right to restrict processing.</li>
       <li>The right to object.</li>
       <li>The right to lodge a complaint with a Supervisory Authority.</li>
       <li>The right to withdraw consent.</li>
       <li>Rights related to automated decision-making.</li>
      </div>}
      </div>

    </div>
  )
}

export default PrivacyPolicy