import React, { useContext, useState } from 'react'
import "./Product.scss"
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import { FaRegHeart } from "react-icons/fa";

import MyContext from '../Context/MyContext';


const Product = () => {
  const Navigate = useNavigate()
  const {products} = useParams()
  const {num} =useContext(MyContext)
 
  const [sortOrder, setSortOrder] = useState("");

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    const sortedProducts = num.map((Item) => {
        const sortedVariants = [...Item.pro].filter(a => {
          return sortOrder === 'bestseller' ? a.bestseller === true:products
        })
        .filter(a => {
          return sortOrder === 'new' ? a.new === true:products
        })
        .sort((a, b) => {
          return sortOrder === 'asc' ? a.price - b.price : sortOrder === 'desc' ? b.price - a.price :null 
      })
      .sort((c, d) => {
        return sortOrder === 'ratings1' ? c.ratings - d.ratings : sortOrder === 'ratings2' ? d.ratings - c.ratings :null 
    })
      ;
     
        return { ...Item, pro: sortedVariants};
});
  
 
 
  return (
    <>
  
        {
          sortedProducts
          .filter(Data => products === Data.category_url)
        
          .map((Data) =>{
            return(
            
              <>
           
            <div className="title2" >
              <div className="content">
              <img src={Data['pro_icon']} alt='' width={50} height={50} />
              <h1>{Data['pro_title']}</h1>
              
              </div>
             
              <select onChange={handleSortChange} className='contents'>
                
            <option selected disabled >Sort By</option>
            <option value="all">All Products</option>
            <option value="bestseller">Bestsellers</option>
            <option value="new">New</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
            <option value="ratings1">Ratings: Low to High</option>
            <option value="ratings2">Ratings: High to Low</option>
            
            </select>
              </div><br/>
            
            <div className='product-section'>
                      {
                Data.pro
                .map((pro) =>{
                  return(
                    <div key={pro.id} className="product-card" >
                    <img src={pro.pro_main_img} alt={pro.name} onClick={() => Navigate(`/category/${Data.category_url}/${pro.url}`)} />
                    <h3>{pro.name}</h3>
                    <p>{pro.price} &nbsp; <del>{pro.del}</del> &nbsp; &nbsp; {pro.off}</p>
                    <h4><span>⭐</span>{pro.ratings} |<span>☑️</span> {pro.numofverify}</h4>
                   
                    <div className="button">
                  <h4><FaRegHeart fontSize={25} color='maroon' /></h4>  
                    <Button variant='contained'>Add to Cart</Button>
                    </div>
                    
                  </div>
                  )
                })
              }
              </div>
              </>
            )
          })
        }
       
      
      
   
    </>
  )
}

export default Product