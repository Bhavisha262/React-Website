import React, { useEffect, useContext, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./Checkout.scss"
import * as Yup from 'yup';

import { useNavigate } from 'react-router-dom';
import MyContext from '../../Context/MyContext';

const Checkout = () => {
  const { setLoader, setAlert, setMessage } = useContext(MyContext);
  const Navigate = useNavigate()
  const [initialValues, setInitialValues] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    state: '',
    pincode: '',
    landmark: '',
    city: '',
  });

  useEffect(() => {
    const fetchShippingInfo = async () => {
      setLoader(true);
      try {
        const response = await fetch('http://localhost:3025/get-user-address', {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`, // Ensure your token is correctly retrieved
          },
        });

        const data = await response.json();
        if (data.success && data.data) {
          setInitialValues(data.data);
        } else {
          console.log('No existing shipping information found.');
        }
      } catch (error) {
        console.error('Error fetching shipping information:', error);
      } finally {
        setLoader(false);
      }
    };

    fetchShippingInfo();
  }, [setLoader]);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    mobile: Yup.string().required('Mobile is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    address: Yup.string().required('Address is required'),
    state: Yup.string().required('State is required'),
    pincode: Yup.string().required('Pincode is required'),
    landmark: Yup.string().required('Landmark is required'),
    city: Yup.string().required('City is required'),
  });

  const onSubmit = async (values) => {
    setLoader(true);
    try {
      const response = await fetch('http://localhost:3025/save-shipping-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`, // Ensure your token is correctly retrieved
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (data.success) {
        setAlert(true);
        setMessage(data.message);
      } else {
        setAlert(true);
        setMessage(data.error);
      }
    } catch (error) {
      console.error('Error saving shipping information:', error);
      setAlert(true);
      setMessage('Error saving shipping information.');
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className='checkout'>
      
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
        <h1>Shipping Form</h1>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="mobile">Mobile</label>
            <Field type="text" id="mobile" name="mobile" />
            <ErrorMessage name="mobile" component="div" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <Field type="text" id="address" name="address" />
            <ErrorMessage name="address" component="div" />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <Field type="text" id="state" name="state" />
            <ErrorMessage name="state" component="div" />
          </div>
          <div>
            <label htmlFor="pincode">Pincode</label>
            <Field type="text" id="pincode" name="pincode" />
            <ErrorMessage name="pincode" component="div" />
          </div>
          <div>
            <label htmlFor="landmark">Landmark</label>
            <Field type="text" id="landmark" name="landmark" />
            <ErrorMessage name="landmark" component="div" />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <Field type="text" id="city" name="city" />
            <ErrorMessage name="city" component="div" />
          </div>
          <button type="submit" onClick={() => Navigate('/payment')}>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Checkout;