import React, { useContext, useState } from 'react';
import "./Cart.scss";
import { useNavigate } from 'react-router-dom';
import MyContext from '../../../Context/MyContext';
import { SlMinus } from "react-icons/sl";
import { SlPlus } from "react-icons/sl";

const Cart = () => {
  const { cart, handledelete, setIsOpenC, handleIncreaseQuantity,handleDecreaseQuantity } = useContext(MyContext);
  const Navigate = useNavigate();

  const total= cart&& cart.reduce((a,b)=>a+(b.price*b.quantity),0)
  
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  }


  return (
    <div className='cart-main'>
      <h2>Shopping Cart</h2>
      {cart && cart.length > 0 ? (
        <>
          {cart.map(item => (
            <>
            <div className="cart-item" key={item.productid}>
              <img src={item.img} alt={item.name} />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <span>&#8377; {item.price} </span> &nbsp;
                <div className="number">
                <button className='full'>
                <button onClick={() => handleDecreaseQuantity(item.categoryid,item.productid)}><SlMinus fontSize={20} /></button>
                <span className="count">{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.categoryid,item.productid)}><SlPlus fontSize={20}/></button>
                </button>
                </div>
                <span className="close" onClick={() => handledelete(item.categoryid, item.productid)}>&#10006;</span>
              </div>
            </div>
           </>
          ))}
            
          <div className="cart-total">
            <div className="value">
              <p>&#8377; {total}</p>
              <h4>Total Value</h4>
            </div>
            <button onClick={() => { Navigate('/checkout') || setIsOpenC(false); }}>Checkout</button>
          </div>
        </>
      ) : (
        <p>No items available</p>
      )}
    </div>
  );
}

export default Cart;