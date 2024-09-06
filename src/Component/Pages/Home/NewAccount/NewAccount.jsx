import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {  Box, Button,  TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "./NewAccount.scss";
import MyContext from '../../../Context/MyContext';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import BadgeIcon from '@mui/icons-material/Badge';

const validationSchema = yup.object({
  name: yup.string('Your Name').required('Name is required'),
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  number: yup.number('Your Mobile No.').min(10, 'Mobile No. should be of 10 characters length').required('Mobile No. is required'),
  password: yup.string('Enter your password').min(8, 'Password should be of minimum 8 characters length').required('Password is required')
});

const NewAccount = () => {
  const Navigate = useNavigate();
  const{loader,setLoader,setAlert,setMessage} = useContext(MyContext)

  const formik = useFormik({
    initialValues: {
       name: '',
      number: '',
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
          Navigate('/user')
      
        }else{
          setMessage(data.error)
          setAlert(true)
        }
        setLoader(false)
      },
    });
     
  

  return (
    <div className='new-main'>
      <div className="frame">
        <div className="div1">
          <h1>Sign Up</h1>
          <form className='form1' onSubmit={formik.handleSubmit}>
          <Box sx={{ display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
      <BadgeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField 
        id="name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name} 
        label="Your Name" 
        variant="outlined"
        />
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
<VisibilityIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField 
              variant="outlined"
              id="password"
              name="password"
              label="Your Password"
              value={formik.values.password}
              type="password"
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
      </Box>
       
            <Button variant="contained" type='submit'><span>{loader ? 'Wait...' : 'Register'}</span></Button>
            
            <p>Already Have an Account? &nbsp; <a onClick={() => Navigate('/user')}>Sign In</a> </p>
          </form>
        
        </div>
      </div>
    </div>
  );
};

export default NewAccount;