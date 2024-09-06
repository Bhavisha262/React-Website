import React, { useContext,useState } from 'react'
import "./Header.scss"
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../Assets/Logo/mainlogo.png"
import { IoMdSearch } from "react-icons/io";
import { TbUserHexagon } from "react-icons/tb";
import { LuUserCheck } from "react-icons/lu";
import { RiHeart3Line } from "react-icons/ri";
import { RiShoppingBag3Line } from "react-icons/ri";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import search1 from "../../Assets/search.gif"
import ShopAll from '../ShopAll/ShopAll';
import { Button } from '@mui/material';
import Cart from '../Pages/Home/Cart/Cart';
import Wishlist from '../Pages/Home/Wishlist/Wishlist';
import MyContext from '../Context/MyContext';
import { LuMenuSquare } from "react-icons/lu";


const Header = () => {
  
  const {toggleDropdown,isDropdown,setIsDropdown,handlelogout,num,search,setSearch,cart,wish,isOpenW,toggleDrawer3,isOpenC,toggleDrawer2} = useContext(MyContext)
  const Token = sessionStorage.getItem('token')
  const Navigate = useNavigate()
  
  

  const [isOpenS, setIsOpenS] = React.useState(false)
    const toggleDrawer1 = () => {
        setIsOpenS((prevState) => !prevState)
    }
     
    const[menu,setMenu]= React.useState(false)
    const toggleDrawer4 = () => {
      setMenu((prevState) => !prevState)
}
  
  return (
    <>
    <header className="header-main">
      <div className="left">
        <ul>
        <div className="shop-all">
          <li>Shop</li>
        <span className='shop'>
          <ShopAll/>
        </span>
        </div>
        <Link to="/about-us"><li>About</li></Link>
        <Link to="/contact-us"><li>Contact</li></Link>
        <Link to="/smiles"><li> Smiles</li></Link>
        </ul>
      </div>
      <div className="center">
      <Link to="/"><img src={logo} alt=''/></Link>
      </div>
      <div className="right">
      <span className='menubar' onClick={()=>setMenu(true)}> <LuMenuSquare  color='#800026' fontSize={25} /></span>
      <div><IoMdSearch  onClick={toggleDrawer1} /></div>
       {!Token ?  <Link to="/user"><TbUserHexagon />
       </Link>:
       <div className="dropdown">
       <LuUserCheck    onClick={toggleDropdown} className="dropbtn" fontSize={25}/>
       <div className={`dropdown-content ${isDropdown ? 'show' : ''}`}>
           <Button onClick={handlelogout}>Logout</Button>
           <Button onClick={() => Navigate('/order') || setIsDropdown(false)} >Order Details</Button>
           <Button onClick={() => Navigate('/profile')|| setIsDropdown(false)}>Your Profile</Button>
           <Button onClick={() => Navigate('/shipping')|| setIsDropdown(false)}>Shipping Details</Button>
       </div>
       </div>
        
}

      <div className="wish-icon">
        <RiHeart3Line onClick={toggleDrawer3}/> 
        <p>{wish ? wish.length:0}</p>
        </div>
        <div className="cart-icon">
        <RiShoppingBag3Line onClick={toggleDrawer2}/> 
        <p>{cart ? cart.length:0}</p>
        </div>
        
      </div>
   
    </header>
              
              
    <Drawer
                open={menu}
                onClose={toggleDrawer4}
                direction='left'
                style={{backgroundColor:'black', color:'gold' ,listStyle:'none', display:'flex', flexDirection:'column', gap:'30px',justifyContent:'center', alignItems:'center', cursor:'pointer'}}
                zIndex={99999}
              >
              
<li onClick={() => Navigate('/shop-by-category') || setMenu(false)}>Shop </li>
<li onClick={() => Navigate('/about-us') || setMenu(false)}>About</li>
<li onClick={() => Navigate('/contact-us') ||  setMenu(false)}>Contact</li>
<li onClick={() => Navigate('/smiles') || setMenu(false)}>Graceful Smiles</li>
   
   
              </Drawer>
             <Drawer
                open={isOpenS}
                onClose={toggleDrawer1}
                direction='top'
                style={{height:'100px'}}
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
<li onClick={() => Navigate(`/category/${a.category_url}`) || setSearch('') || setIsOpenS(false)}  >{a.name}</li>
</div>
  )
})}
   
   
              </Drawer>
              
              <Drawer
                open={isOpenC}
                onClose={toggleDrawer2}
                direction='right' 
                zIndex={9999}
                style={{overflow:'auto',}}
                
              >
                
                <Cart/>
                
              </Drawer>

              <Drawer
                open={isOpenW}
                onClose={toggleDrawer3}
                direction='bottom'
                zIndex={9999}
                style={{overflow:'auto'}}
              >
                
                <Wishlist/>
              
              </Drawer>
    </>

  )
}

export default Header