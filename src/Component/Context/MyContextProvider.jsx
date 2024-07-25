import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import MyContext from './MyContext';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const MyContextProvider = ({children}) => {
  const [num,setNum] = useState([])
  const[loader, setLoader] = useState(false)
  const[cinfo, setCinfo] = useState([])
  const[search, setSearch] = useState('')
  const[register, setRegister] = useState([])
  const[form, setForm] = useState([])
  const[token, setToken] = useState('')

useEffect(()=>{
axios.get('http://localhost:3025/api')
.then((res)=> setNum(res.data.data)
  
)
},[])

useEffect(()=>{
  axios.get('http://localhost:3025/contact-admin-table')
  .then((res)=> setCinfo(res.data.data)
    
  )
  },[])

const [alert,setAlert] = useState(false)
const [message,setMessage] = useState('')

const handlelogout = () =>{
const confirm = window.confirm('are you sure want to logout?')
if(confirm){
  sessionStorage.removeItem('token')
  setToken('')
  window.location.href='/'
}
}
const [userdata, setUserData] = useState('');
const Navigate = useNavigate()

const [cart,setCart] = useState([])
const [wish,setWish] = useState([])


const handleCart = async(categoryid,productid,img,price,name) =>{
  if(!sessionStorage.getItem('token')){
    setAlert(true)
    setMessage('please login first')
    setTimeout(() => {
      Navigate('/user')  
    }, 3000);

  }

  const response = await fetch('http://localhost:3025/add-to-cart', {
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

  const response = await fetch('http://localhost:3025/add-to-wish', {

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
    setMessage(data.message)
    setWish(data.wishInfo)

  }
  else{
    setAlert(true)
    setMessage(data.error)
  }

  

}

const handledelete = async(categoryid,productid) =>{


  const response = await fetch('http://localhost:3025/remove-from-cart', {
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


  const response = await fetch('http://localhost:3025/remove-from-wish', {
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
return (
<MyContext.Provider value={{wish,setWish,handleWish,handleremove,handleCart,handledelete,cart,token,setToken,form, setForm,register, setRegister,handlelogout , userdata,setUserData,  search, setSearch,num,loader,setLoader,alert,setAlert,message,setMessage,cinfo, setCinfo}} >
{children}
</MyContext.Provider>
)
}


export default MyContextProvider