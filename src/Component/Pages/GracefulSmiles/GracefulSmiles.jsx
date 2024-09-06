import React from 'react'
import "./GracefulSmiles.scss"
import img from "../../../Assets/Graceful Smiles/group-photo.jpg"
import img1 from "../../../Assets/Graceful Smiles/owner 1.png"
import { Button } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup';
import { Box, TextField } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const validationSchema = yup.object({
    email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
});
const GracefulSmiles = () => {
    const formik = useFormik({
        initialValues: { 
        email: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
        alert(JSON.stringify(values, null, 1));
        },
        
        });
  return (
    <div className='grace'>
            <div className="wavy-heading-container">
      <h1 className="wavy-heading">Smiles</h1>
           </div>
            <h3>Mental Health</h3>
            <div className="health">
                
                <div className="pics">
                    <img src={img} alt=''/>
                    <p>Grace Beauty’s Smiles initiative, aims to reduce the stigma associated with mental health and provide people with access to resources that support their mental health.Smiles Fund was started by Josephine Santiago as part of her commitment to addressing mental health and self-acceptance.</p>
                </div>
                <hr style={{width:'10px',backgroundColor:'#800026'}}/>
                <div className="founder">
                <Button variant="contained" type='submit'><span>Donate Now</span></Button>
                <br/>
               
                <h2>From Josephine</h2>
                <img src={img1} alt=''/>
                <p>Mental health is personal for me. Figuring out how to manage my own mental health hasn't always been easy, but it’s something I am constantly working on and I hope I can help others work on, too. </p>
                <p>That’s why I launched Smiles and the Smiles Fund. I hope by sharing my own story and using my brand and platform to talk about and connect more people to resources that support their mental health, I can encourage others to get the help they need and bring more mental health services to educational settings.</p>
                </div>
            </div>

            <div className="updates">
                <h3>Stay Updated...</h3>
              
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
          </Box><br/>
          <Button variant="contained" type='submit'><span>Submit</span></Button>
            </div>
    </div>
  )
}

export default GracefulSmiles