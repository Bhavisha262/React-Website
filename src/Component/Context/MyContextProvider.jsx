import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import MyContext from './MyContext';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const MyContextProvider = ({children}) => {
  const [num,setNum] = useState([])
  const[loader, setLoader] = useState(false)
  const[search, setSearch] = useState('')
  const[cinfo, setCinfo] = useState([])
  const[register, setRegister] = useState([])
  const[orderadmin, setOrderadmin] = useState([])
  const[form, setForm] = useState([])
  const[token, setToken] = useState('')

useEffect(()=>{
axios.get('https://backl-main.vercel.app/api')
.then((res)=> setNum(res.data.data)
)
},[])

useEffect(()=>{
  axios.get('https://backl-main.vercel.app/contact-admin-table')
  .then((res)=> setCinfo(res.data.data)
)
},[])

  useEffect(()=>{
    axios.get('https://backl-main.vercel.app/new-admin-table')
    .then((res)=> setRegister(res.data.data)   
)
},[])

useEffect(()=>{
  axios.get('https://backl-main.vercel.app/order-admin-table')
  .then((res)=> setOrderadmin(res.data.data)   
)
},[])

const [alert,setAlert] = useState(false)
const [message,setMessage] = useState('')

const handlelogout = () =>{
  const confirm = window.confirm('Are You Sure You Want To Logout?')
  if (confirm) {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('cart')
    sessionStorage.removeItem('wishlist')
    sessionStorage.removeItem('order')
    setToken('')
    setCart([])
    setWish([])
    setOrder([])
    Navigate('/')  
  }
}

const Navigate = useNavigate()

const [cart, setCart] = useState(() =>{
  const savedCart = sessionStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
})
const [wish, setWish] = useState(() =>{
  const savedWish = sessionStorage.getItem('wishlist');
  return savedWish ? JSON.parse(savedWish) : [];
})

const [order, setOrder] = useState(() =>{
  const savedOrder = sessionStorage.getItem('order');
  return savedOrder ? JSON.parse(savedOrder) : [];
})
const [shippingInfo,setShippingInfo] = useState([])
const [isOpenC, setIsOpenC] = React.useState(false)
const [isOpenW, setIsOpenW] = React.useState(false)
const [isDropdown,setIsDropdown] = useState(false)

  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
};

  const toggleDrawer2 = () => {
      setIsOpenC((prevState) => !prevState)
  }

  
  const toggleDrawer3 = () => {
      setIsOpenW((prevState) => !prevState)
  }

const handleCart = async(categoryid,productid,img,price,name) =>{
  if(!sessionStorage.getItem('token')){
    setAlert(true)
    setMessage('please login first')
    setTimeout(() => {
      Navigate('/user')  
    }, 3000);

  }

  const response = await fetch('https://backl-main.vercel.app/add-to-cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify({categoryid,productid,img,price,name})
  });

  const data = await response.json()

  if(data.success){
    setAlert(true)
    sessionStorage.setItem('cart' , JSON.stringify(data.cartInfo));
    setMessage(data.message)
    setCart(data.cartInfo)

  }
  else{
    setAlert(true)
    setMessage(data.error)
  }

  

}

const handleWish = async(categoryid,productid,img,price,name) =>{
  if(!sessionStorage.getItem('token')){
    setAlert(true)
    setMessage('please login first')
    setTimeout(() => {
      Navigate('/user')  
    }, 3000);

  }

  const response = await fetch('https://backl-main.vercel.app/add-to-wish', {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify({categoryid,productid,img,price,name})
  });

  const data = await response.json()

  if(data.success){
    setAlert(true)
    sessionStorage.setItem('wishlist' , JSON.stringify(data.wishInfo));
    setMessage(data.message)
    setWish(data.wishInfo)

  }
  else{
    setAlert(true)
    setMessage(data.error)
  }

  

}

const handleOrder = async() =>{
  if(!sessionStorage.getItem('token')){
    setAlert(true)
    setMessage('Please Login First')
    setTimeout(() => {
      Navigate('/user')  
    }, 3000);

  }

  const response = await fetch('https://backl-main.vercel.app/save-order-info', {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify({orderDate:new Date()})
  });

  const data = await response.json()

  if(data.success){
    setAlert(true)
    sessionStorage.getItem('order' , JSON.stringify(data.orderInfo));
    sessionStorage.getItem('cart' , JSON.stringify(data.cartInfo));
    sessionStorage.setItem('order' , JSON.stringify(data.orderInfo));
    setMessage(data.message)
    setOrder(data.orderInfo)
    setCart(data.cartInfo)
    window.location.href='/confirmation'
  }
  else{
    setAlert(true)
    setMessage(data.error)
  }

  

}

const handleShipping = async(name,number,email,address,landmark,state,city,pincode) =>{
  if(!sessionStorage.getItem('token')){
    setAlert(true)


  }

  const response = await fetch('https://backl-main.vercel.app/save-shipping-info', {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify({name,number,email,address,landmark,state,city,pincode})
  });

  const data = await response.json()

  if(data.success){
    setAlert(true)
    
    setShippingInfo(data.shippingInfoInfo)

  }
  else{
    setAlert(true)
   
  }

  

}

const handledelete = async(categoryid,productid) =>{


  const response = await fetch('https://backl-main.vercel.app/remove-from-cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify({categoryid,productid})
  });

  const data = await response.json()

  if(data.success){
    setAlert(true)
    setMessage(data.message)
    setCart(data.cartInfo)

  }
  else{
    setAlert(true)
    setMessage(data.error)
  }

  

}

const handleremove = async(categoryid,productid) =>{


  const response = await fetch('https://backl-main.vercel.app/remove-from-wish', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify({categoryid,productid})
  });

  const data = await response.json()

  if(data.success){
    setAlert(true)
    setMessage(data.message)
   
    setWish(data.wishInfo)

    
  }
  else{
    setAlert(true)
    setMessage(data.error)
  }

  

}

const handleIncreaseQuantity = async(categoryid,productid) =>{
  if(!sessionStorage.getItem('token')){
    setAlert(true)
    setMessage('please login first')
    setTimeout(() => {
      Navigate('/user')  
    }, 3000);

  }

  const response = await fetch('https://backl-main.vercel.app/increase-quantity', {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify({categoryid,productid})
  });

  const data = await response.json()

  if(data.success){
    setAlert(true)
    sessionStorage.setItem('cart', JSON.stringify(data.cartInfo));
    setMessage(data.message)
    setCart(data.cartInfo)

  }
  else{
    setAlert(true)
    setMessage(data.error)
  }

  

}
const handleDecreaseQuantity = async(categoryid,productid) =>{
  if(!sessionStorage.getItem('token')){
    setAlert(true)
    setMessage('please login first')
    setTimeout(() => {
      Navigate('/user')  
    }, 3000);

  }

  const response = await fetch('https://backl-main.vercel.app/decrease-quantity', {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify({categoryid,productid})
  });

  const data = await response.json()

  if(data.success){
    setAlert(true)
    sessionStorage.setItem('cart', JSON.stringify(data.cartInfo));
    setMessage(data.message)
    setCart(data.cartInfo)

  }
  else{
    setAlert(true)
    setMessage(data.error)
  }

  

}

return (
<MyContext.Provider value={{handleDecreaseQuantity,handleIncreaseQuantity,orderadmin, setOrderadmin,handleShipping,shippingInfo,setShippingInfo,handleOrder,order,setOrder,toggleDropdown,isDropdown,setIsDropdown,isOpenW, setIsOpenW,toggleDrawer3,isOpenC, setIsOpenC,toggleDrawer2,handlelogout,handleremove,handleWish,wish,setWish,handledelete,cart,setCart,handleCart,search,setSearch,form,setForm,message,token,setToken,setMessage,alert,setAlert,num,loader,setLoader,cinfo, setCinfo ,register,setRegister}} >
{children}
</MyContext.Provider>
)
}


export default MyContextProvider