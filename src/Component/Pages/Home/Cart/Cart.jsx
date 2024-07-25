import React, { useContext, useState } from 'react'
import "./Cart.scss"
import { SlMinus } from "react-icons/sl";
import { SlPlus } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';
import MyContext from '../../../Context/MyContext';


const Cart = () => {

  const {cart,handledelete,setIsOpen2} = useContext(MyContext)
  const [count, setCount] = useState(1);
  const Navigate2 = useNavigate()
  
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  }
  const [count1, setCount1] = useState(1);
  const increment1 = () => {
    setCount1(prevCount => prevCount + 1);
  };

  const decrement1 = () => {
    if (count1 > 1) {
      setCount1(prevCount => prevCount - 1);
    }
  }
  return (
    <div className='cart-main'>
      <h2>Shopping Cart</h2>
    { cart&&cart.length>0?( cart.map((item) =>{
      return(
        <>
        <div class="cart-item">
        <img src={item.img} alt=''/>
    <div class="cart-details">
        <h3>{item.name}</h3>
        <span> &#8377; {item.price} &nbsp; <del>&#8377; {item.del}</del></span>
        <button className='full'>
                  <button onClick={decrement}><SlMinus fontSize={20} /></button>
                  <span className="count">{count}</span>
                  <button onClick={increment}><SlPlus fontSize={20}/></button>
                  </button>
  
        <span class="close" onClick={()=>handledelete(item.categoryid,item.productid)}>&#10006;</span>
    </div>
        </div>

<div class="cart-total">
<div class="value">
<p>&#8377; {item.price} </p>
<h4>Total Value</h4>
</div>
<button  onClick={() => Navigate2('/checkout') || setIsOpen2(false)}>Checkout</button>
</div>
</>
      )
    })
  
    ):
    <p>No item available</p>
  
  }
     
      
     

    </div>
  )

}

export default Cart