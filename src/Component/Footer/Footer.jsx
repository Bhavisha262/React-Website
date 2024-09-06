import React, { useContext } from 'react'
import "./Footer.scss"
import { FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {  Box, TextField } from '@mui/material';
import MyContext from '../Context/MyContext';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
const Footer = () => {
    const validationSchema = yup.object({
        email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    });

    const{setLoader,setAlert,setMessage} = useContext(MyContext)

    const formik = useFormik({
        initialValues: {
        email: '',
        password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async(values, {resetForm}) => {
          setLoader(true)
          const response = await fetch('http://localhost:3025/new-account', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
            'Content-type': 'application/json',
            },
            });
            const data = await response.json()
    
            if(data.success){
            setMessage(data.message)
            setAlert(true)
            resetForm()
            window.location.href='/'
            
            }else{
            setMessage(data.error)
            setAlert(true)
             
            }
            setLoader(false)
          },
        });
  return (
    
    <div className='footer-main'>
        
        <div className="box1">
            <h3>NEWSLETTER</h3>
            <h4>Join us on the Grace Beauty for a graceful glow.</h4>
            <h4>Glaze your inbox with tips, tricks & exclusive content from Us.</h4>

            <form className='form1' onSubmit={formik.handleSubmit}>
            <Box sx={{ display: 'flex',alignItems: 'center' }}>
        <AlternateEmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField 
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email} 
          label="Your Email Id" 
          variant="outlined" />
</Box>
            </form> <br/>
       <div className="social">
       <FaWhatsapp color='limegreen' />
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
           <p>Contact : <a href='tel:8200913637'><b>8200913637</b></a></p>
           <p>Drop Us a Note anytime at <br/><a href="mailto:gracebeauty@gmail.com?subject=Subject%20Here&body=Body%20Here"><b>gracebeauty@gmail.com</b></a></p><br/>
           <li>&#169; Grace Beauty 2023</li>
        </div>
        </div>
 
  )
}

export default Footer
