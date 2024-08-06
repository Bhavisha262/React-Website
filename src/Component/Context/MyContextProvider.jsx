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

  useEffect(()=>{
    axios.get('http://localhost:3025/new-admin-table')
    .then((res)=> setRegister(res.data.data)   
)
},[])

const [alert,setAlert] = useState(false)
const [message,setMessage] = useState('')

const handlelogout = () =>{
  const confirm = window.confirm('Are You Sure You Want To Logout?')
  if (confirm) {
    sessionStorage.removeItem('token')
    setToken('')
    Navigate('/')  
  }
}

const Navigate = useNavigate()

const [cart,setCart] = useState([])
const [wish,setWish] = useState([])
const [isOpenC, setIsOpenC] = React.useState(false)
  const toggleDrawer2 = () => {
      setIsOpenC((prevState) => !prevState)
  }

  const [isOpenW, setIsOpenW] = React.useState(false)
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
<MyContext.Provider value={{isOpenW, setIsOpenW,toggleDrawer3,isOpenC, setIsOpenC,toggleDrawer2,handlelogout,handleremove,handleWish,wish,setWish,handledelete,cart,setCart,handleCart,search,setSearch,form,setForm,message,token,setToken,setMessage,alert,setAlert,num,loader,setLoader,cinfo, setCinfo ,register,setRegister}} >
{children}
</MyContext.Provider>
)
}


export default MyContextProvider