import React, { useContext,useState } from 'react'
import "./Header.scss"
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../Assets/Logo/mainlogo.png"
import { HiSearch } from "react-icons/hi";
import { TbUserHexagon } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import search1 from "../../Assets/magnifying-glass (1).png"
import ShopAll from '../ShopAll/ShopAll';
import MyContext from '../Context/MyContext';
import { Button } from '@mui/material';
import { LiaUserCheckSolid } from "react-icons/lia";
import Cart from '../Pages/Home/Cart/Cart';


const Header = () => {
  
  const {handlelogout,num,search,setSearch,cart} = useContext(MyContext)
  const Token = sessionStorage.getItem('token')
  const Navigate = useNavigate()
  const Navigate1 = useNavigate()
  const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

  const [isOpen1, setIsOpen1] = React.useState(false)
  const toggleDrawer1 = () => {
      setIsOpen1((prevState) => !prevState)
  }
 
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown = () => {
      setIsOpen2(!isOpen2);
  };
  return (
    <>
    <div className='header-main'>
      <div className="left">
        <div className="shop-all">
          <li>Shop</li>
        <span className='shop'><ShopAll/></span>
        </div>
        <Link to="/about-us"><li>About</li></Link>
        <Link to="/contact-us"><li>Contact</li></Link>
        <Link to="/smiles"><li> Smiles</li></Link>
      </div>

      <div className="center">
      <Link to="/"><img src={logo} alt=''/></Link>
      </div>

      <div className="right">
    
        <HiSearch size={25} onClick={toggleDrawer}/>
       {!Token ?  <Link to="/user"><TbUserHexagon  size={25}/></Link>:
       <div className="dropdown">
       <LiaUserCheckSolid onClick={toggleDropdown} className="dropbtn" fontSize={25}/>
       <div className={`dropdown-content ${isOpen2 ? 'show' : ''}`}>
           <Button onClick={handlelogout}>Logout</Button>
           <Button onClick={() => Navigate('/order') || setIsOpen2(false)} >Order Details</Button>
           <Button onClick={() => Navigate1('/profile')|| setIsOpen2(false)}>Your Profile</Button>
       </div>
   </div>
}
        <Link to="/wishlist"><FaRegHeart  size={25}/></Link>  
        <LuShoppingBag onClick={toggleDrawer1} size={25} /> {cart ? cart.length:0}
       </div>
    </div>
              
  
    <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='top'
                style={{height:'100px', backgroundColor:'floralwhite'}}
              >
                <div className="search">
                <div class="search-container">
                
    <input type="text" id="search-bar" class="search-input" onChange={(e) => setSearch(e.target.value)} value={search}  placeholder="Search..."/>
    <button id="search-button" class="search-button"><img src={search1} alt=''/></button><br/>
    

    </div>
   
    <div>
   
   
</div>
                </div>
                {num
.filter((a)=>{
  const newdata = a.name.toLowerCase()
  const setSearch = search.toLowerCase() 
  return(
    setSearch && newdata.startsWith(setSearch)
  )
}).map((a)=>{
  return(
    <div className="list">
<li onClick={() => Navigate(`/category/${a.category_url}`) || setSearch('') || setIsOpen(false)}  >{a.name}</li>
</div>
  )
})}
   
   
              </Drawer>
              <Drawer
                open={isOpen1}
                onClose={toggleDrawer1}
                direction='right'
                className='bla bla bla' 
                zIndex={9999}
              >
                <Cart/>
              </Drawer>
    </>

  )
}

export default Header