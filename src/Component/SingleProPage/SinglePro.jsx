import React, { useContext, useState } from 'react'
import "./SinglePro.scss"
import { useParams } from 'react-router-dom'
import { SlMinus } from "react-icons/sl";
import { SlPlus } from "react-icons/sl";
import { Button } from '@mui/material';
import ReactImageGallery from 'react-image-gallery';

import { LuShoppingBag } from "react-icons/lu";
import MyContext from '../Context/MyContext';
import Link from './Link';
import { FaRegHeart } from 'react-icons/fa';


const SinglePro = () => {

  const{product} = useParams()
  const{single} = useParams()
  const {num,handleCart} = useContext(MyContext)
  
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    }
  }

  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen1, setIsOpen1] = useState(false);
  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
  };

  const [isOpen2, setIsOpen2] = useState(false);
  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <div className='single-product-page'>
      
      {num
      .filter(item => item.category_url===product)
      .map((item) =>{
        return(
          <>
          {
            item.pro
            .filter(pro => pro.url ===single)
           .map((pro) => {
              return(
                <>
               <div className='product-image'>
               <ReactImageGallery items={pro.images} />
               </div>  
               <div className="box"> 
                
                <h2>{pro.name}</h2>
                <span>{pro.price} &nbsp; <del>{pro.del}</del> &nbsp; &nbsp; {pro.off}</span>
                <h5><span>⭐</span>{pro.ratings} | <span>☑️</span> {pro.numofverify}</h5>
                <b>Shade:</b>&nbsp;<i>{pro.color}</i>
                <h6>Free Shipping on orders above ₹750</h6>
                
              <div className="number">
                <button className='full'>
                <button onClick={decrement}><SlMinus fontSize={20} /></button>
                <span className="count">{count}</span>
                <button onClick={increment}><SlPlus fontSize={20}/></button>
                </button>
                <Button variant='contained' className='buy' ><FaRegHeart fontSize={25} color='mediumvioletred'/>Add To Wishlist</Button>
              </div>
              <br/>

              <div className="add">
              <Button variant='contained' onClick={()=>handleCart(item.id,pro.id,pro.pro_main_img,pro.price,pro.name)}><LuShoppingBag fontSize={25} color='darkblue' />Add to Cart</Button>
              </div>
              <br/>

              <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{pro.ques}</h3>
        <div className="arrow-icon">&#9660;</div>
      </div>
      {isOpen && <div className="accordion-content">{pro.ans}</div>}
              </div>
<br/>

      <div className={`accordion1 ${isOpen1 ? 'open' : ''}`}>
      <div className="accordion-header1" onClick={toggleAccordion1}>
        <h3>{pro.ques1}</h3>
        <div className="arrow-icon1">&#9660;</div>
      </div>
      {isOpen1 && <div className="accordion-content1">{pro.ans1}</div>}
      </div>
<br/>
      <div className={`accordion2 ${isOpen2 ? 'open' : ''}`}>
      <div className="accordion-header2" onClick={toggleAccordion2}>
        <h3>{pro.ques2}</h3>
        <div className="arrow-icon2">&#9660;</div>
      </div>
      {isOpen2 && <div className="accordion-content2">{pro.ans2}</div>}
      </div>
      <br/>         
                
      <div className="social-media">
        <h3>Share us on : </h3>
        <div className="icons">
       <Link/>
        </div>
      </div>
              
              </div>
               
                </>
                
              )
            })
          }
          
          </>
         

        )
      })}
    
    </div>

  )
}

export default SinglePro