
import React, { useContext } from 'react';
import "./Demo.scss"
import ShopAll from './ShopAll/ShopAll';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../Assets/Logo/mainlogo.png"
import MyContext from './Context/MyContext';
import { IoIosSearch } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";
import { LiaUserCheckSolid } from "react-icons/lia";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import search1 from "../Assets/search.gif"
import { Button } from '@mui/material';
import Cart from '../Component/Pages/Home/Cart/Cart';
import Wishlist from '../Component/Pages/Home/Wishlist/Wishlist';
import { LuMenuSquare } from "react-icons/lu";

const Demo = () => {
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
    <header className="header">
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
      <span className='menubar' onClick={()=>setMenu(true)}> <LuMenuSquare  color='#800026' size={25}/></span>
      <IoIosSearch  onClick={toggleDrawer1} />
      <div className="diamond-star-icon">
       {!Token ?  <Link to="/user"><HiOutlineUser className="icon"/>
        <div className="diamond-stars">
        {Array.from({ length: 2 }).map((_, index) => (
          <div className="diamond" key={index}></div>
        ))}
      </div>
       </Link>:
       
       <div className="dropdown">
       <LiaUserCheckSolid   onClick={toggleDropdown} className="dropbtn" fontSize={25}/>
       <div className={`dropdown-content ${isDropdown ? 'show' : ''}`}>
           <Button onClick={handlelogout}>Logout</Button>
           <Button onClick={() => Navigate('/order') || setIsDropdown(false)} >Order Details</Button>
           <Button onClick={() => Navigate('/profile')|| setIsDropdown(false)}>Your Profile</Button>
           <Button onClick={() => Navigate('/shipping')|| setIsDropdown(false)}>Shipping Details</Button>
       </div>
       </div>
}
      </div>
      <div className="wish-icon">
        <span><IoIosHeartEmpty  onClick={toggleDrawer3}/></span> 
        {/* <p>{wish ? wish.length:0}</p> */}
        </div>
        <div className="cart-icon">
        <span><HiOutlineShoppingBag onClick={toggleDrawer2}/></span> 
        {/* <p>{cart ? cart.length:0}</p> */}
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
     style={{height:'100px', backgroundColor:'floralwhite'}}
   >
     <div className="search">
     <div class="search-container">
     
<input type="text" id="search-bar" class="search-input" onChange={(e) => setSearch(e.target.value)} value={search}  placeholder="Search..."/>
<button id="search-button" class="search-button"><img src={search1} alt='' /></button><br/>


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
     style={{overflow:'auto'}}
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
  );
};

export default Demo;