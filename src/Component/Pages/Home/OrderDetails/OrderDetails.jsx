import React, { useState } from 'react';
import "./OrderDetails.scss";

import { useNavigate } from 'react-router-dom';



const OrderDetails = () => {

  
  const Navigate = useNavigate();
  const [orderInfo, setOrderInfo] = useState({
    name:'',
    email:'',
    orderId:'',
    date:'',
    quantity:'',
    price:'',
  });
 

  return (
    <div className="order-details-main">
      <h2>Order Details</h2>
      { orderInfo && orderInfo.length>0?( orderInfo.map((item) =>{
          return(
        <>
          <div className="order-summary">
            <div className="order-info">
            <p>Name: {orderInfo.name}</p>
            <p>Email: {orderInfo.email}</p>
              <h3>Order ID: {orderInfo.orderId}</h3>
              <p>Order Date: {orderInfo.date}</p>
            </div>
            
              <div className="order-item" key={item.productid}>
                <img src={item.img} alt='' />
                <div className="order-details">
                  <h3>{item.name}</h3>
                  <span> &#8377; {item.price} &nbsp; <del>&#8377; {item.del}</del></span>
                  <span className="quantity">Quantity: {item.quantity}</span>
                </div>
              </div>
          
            <div className="order-total">
              <div className="value">
                <p>&#8377; {orderInfo.price}</p>
                <h4>Total Value</h4>
              </div>
              <button onClick={() => Navigate('/')} className="home-button">Back to Home</button>
            </div>
          </div>
        </>
        
      )
    })
  
    ):
    <p>no item available</p>
  
  }
    </div>
  )

}


export default OrderDetails