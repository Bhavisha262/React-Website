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
import { Button } from '@mui/material';
import { LiaUserCheckSolid } from "react-icons/lia";
import Cart from '../Pages/Home/Cart/Cart';
import Wishlist from '../Pages/Home/Wishlist/Wishlist';
import MyContext from '../Context/MyContext';

const Header = () => {
  
  const {handlelogout,num,search,setSearch,cart,wish,isOpenW,toggleDrawer3,isOpenC,toggleDrawer2} = useContext(MyContext)
  const Token = sessionStorage.getItem('token')
  const Navigate = useNavigate()
  
  const [isDropdown,setIsDropdown] = useState(false)
  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
};

  const [isOpenS, setIsOpenS] = React.useState(false)
    const toggleDrawer1 = () => {
        setIsOpenS((prevState) => !prevState)
    }

  
 

  
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
    
        <HiSearch size={25} onClick={toggleDrawer1}/>
       {!Token ?  <Link to="/user"><TbUserHexagon size={25}/></Link>:
       <div className="dropdown">
       <LiaUserCheckSolid onClick={toggleDropdown} className="dropbtn" fontSize={25}/>
       <div className={`dropdown-content ${isDropdown ? 'show' : ''}`}>
           <Button onClick={handlelogout}>Logout</Button>
           <Button onClick={() => Navigate('/order') || setIsDropdown(false)} >Order Details</Button>
           <Button onClick={() => Navigate('/profile')|| setIsDropdown(false)}>Your Profile</Button>
           <Button onClick={() => Navigate('/shipping')|| setIsDropdown(false)}>Shipping Details</Button>
       </div>
   </div>
}
        <FaRegHeart onClick={toggleDrawer3} size={25}/> {wish ? wish.length:0}
        <LuShoppingBag onClick={toggleDrawer2} size={25} /> {cart ? cart.length:0}
       </div>
    </div>
              
  
             <Drawer
                open={isOpenS}
                onClose={toggleDrawer1}
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

  )
}

export default Header