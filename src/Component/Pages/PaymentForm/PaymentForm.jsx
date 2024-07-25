import React, { useState } from 'react';
import "./PaymentForm.scss"
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const Navigate = useNavigate()

  function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  const handleRefresh = () => {
    setCaptcha(generateCaptcha());
    setInput('');
    setMessage('');
  };

  const handleSubmit = () => {
    if (input === captcha) {
      setMessage('Captcha matched!');
      Navigate('/confirmation')
    } else {
      setMessage('Captcha did not match. Please try again.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column' }}>
      <div style={{ marginBottom: '10px', fontSize: '24px', padding: '10px', border: '1px solid #ccc' , width:'fit-content' }}>
        {captcha}
      </div>
      <button onClick={handleRefresh} style={{ marginBottom: '10px', padding: '10px', backgroundColor:'#000d73' , color:'floralwhite',width:'fit-content' }}>Refresh</button>
      <br />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter captcha"
        style={{ marginBottom: '10px', padding: '5px', width: '200px' }}
      />
      <br />
      <button onClick={handleSubmit}  style={{ marginBottom: '10px', padding: '10px', backgroundColor:'#000d73',color:'floralwhite', width:'fit-content' }}>Submit</button>
      <div style={{ marginTop: '10px', color: message === 'Captcha matched!' ? 'green' : 'red'}}>
        {message}
      </div>
    </div>
  );
};

export default PaymentForm;