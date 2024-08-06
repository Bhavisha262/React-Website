import React from 'react'
import "./Footer.scss"
import { FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link, useLocation} from 'react-router-dom';

const Footer = () => {
   const location = useLocation();
   if (location.pathname.match(/contact/g))
   return null 

  return (
    
    <div className='footer-main'>
        
        <div className="box1">
            <h3>NEWSLETTER</h3>
            <h4>Join us on the Grace Beauty for a graceful glow.</h4>
            <h4>Glaze your inbox with tips, tricks & exclusive content from Us.</h4>

            <form>
                    <i class="fa-solid fa-envelope-open-text"></i>
                    <input type="email" placeholder="Enter Your Email Id" required/>
                    <button type="submit"><i class="fa-solid fa-circle-right"></i></button>
       </form>
       <div className="social">
       <FaWhatsapp color='lime' />
       <FaInstagram color='magenta'/>
        <FaSquareTwitter color='rgb(0, 240, 240)' />
       <FaYoutube color='red'/>
      <FaTiktok color='black'/>
        </div>
            </div>
        
        <div className="box2">
            <h3>NAVIGATE</h3>
           
          <Link to="/about-us"><li>About</li></Link>
          <Link to="/smiles"> <li>Smiles</li></Link>
           <Link to="/contact-us"><li>Contact</li></Link>
           <Link to="/store-locator"><li>Store Locator</li></Link>
            </div>


        <div className="box3">
            <h3>OFFICIAL</h3>
            <Link to="/privacy-policy"><li>Privacy Policy</li></Link>
            <Link to="/terms-conditions"><li>Terms & Conditions</li></Link>
            <Link to="/shipping-returns"> <li>Shipping & Returns</li></Link>
            <Link to="/accessibility"> <li>Accessibility</li></Link>
            <Link to="/FAQs"><li>FAQs</li></Link>
        </div>
        <div className="box4">
            <h3>SUPPORT</h3>
           <p>We are Here from Monday to Saturday <br/>9 AM - 6 PM IST</p>
           <p>Mobile No. : <a href='tel:8200913637'><b>8200913637</b></a></p>
           <p>Drop Us a Note anytime at <a href="mailto:gracebeauty@gmail.com?subject=Subject%20Here&body=Body%20Here"><b>gracebeauty@gmail.com</b></a></p>
           <li>&#169; Grace Beauty 2023</li>
        </div>
        </div>
 
  )
}

export default Footer
