import React, { useContext } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import "./ContactForm.scss"
import {  Box, Button,  TextField } from '@mui/material';
import BadgeIcon from '@mui/icons-material/Badge';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MessageIcon from '@mui/icons-material/Message';
import MyContext from '../../Context/MyContext';


const validationSchema = yup.object({
 
  name: yup
  .string('Enter your full name')
  .required('Name is required'),
  email: yup
  .string('Enter your email')
  .email('Enter a valid email')
  .required('Email is required'),
  number: yup
  .string('Enter your number')
  .min(10, 'Mobile No. should be of minimum 10 characters length')
  .required('Mobile No. is required'),
  message: yup
  .string('Enter your message')
  .required('message is required'),
});
const ContactForm = () => {

  const{loader,setLoader,setAlert,setMessage} = useContext(MyContext)

  const formik = useFormik({
    initialValues: { 
    name: '',
    email: '',
    number: '',
    message: ''
    },
    validationSchema: validationSchema,
    onSubmit: async(values,{resetForm}) => {
    
     setLoader(true) 
     
      const response = await fetch('http://localhost:3025/contact-us', {
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
        
        }else{
          setMessage(data.error)
        setAlert(true)
         
        }
        setLoader(false)
       
    },
    
    });

   

  return (
    <div className='contact-main'>
<h1>Contact Us !!</h1>
<p>Hours of Operation : Monday - Saturday 9 AM - 6 PM IST </p>
<p>Toll-Free within India : +1800-657-7637</p>
<p>Mobile No. : <a href='tel:8200913637'><b>8200913637</b></a></p>
<p>Email Id : <a href="mailto:gracebeauty@gmail.com?subject=Subject%20Here&body=Body%20Here"><b>gracebeauty@gmail.com</b></a></p>
<p>Type questions or feedback below and a Customer Service Specialist will reply within 24 business hours.</p>
<form className='form' onSubmit={formik.handleSubmit}>
<Box sx={{ display: 'flex',justifyContent: 'center', alignItems: 'center' }}>
      <BadgeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField 
        id="name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name} 
        label="Your Name" 
        variant="outlined" />
</Box>


<Box sx={{ display: 'flex',justifyContent: 'center', alignItems: 'center' }}>
        <PhoneAndroidIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField 
          id="number"
          name="number"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number} 
          label="Your Mobile No." 
          variant="outlined" />
</Box>

<Box sx={{ display: 'flex',justifyContent: 'center', alignItems: 'center' }}>
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

<Box sx={{ display: 'flex',justifyContent: 'center', alignItems: 'center' }}>
        <MessageIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField 
          id="message"
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message} 
          label="Your Message"
          multiline
          rows={1} 
          variant="outlined" />
</Box>
<Button variant="contained" type='submit'>{loader ? 'Wait...' : 'Submit'}</Button>
</form><br/>
</div>
  )
}

export default ContactForm