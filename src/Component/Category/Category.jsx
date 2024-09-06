import React, { useContext } from 'react';
import './Category.scss';
import { useNavigate } from 'react-router-dom';
import MyContext from '../Context/MyContext';
import up from "../../Assets/Slider/down.jpg";
const Category = () => {
  const Navigate = useNavigate()
  const {num,setIsDropdown} = useContext(MyContext)
    
  return (
    <>

    <div className="category-section">
    <div className="title1">
    <div className="wavy-heading-container">
      <h1 className="wavy-heading">Shop By Category</h1>
    </div>
    </div><br/>
      {num.map( Data => (
        <div key={Data.id} className="category" onClick={() => Navigate(`/category/${Data.category_url}`)|| setIsDropdown(false)}>
         <div className="image-wrapper">
         <img
            src={Data.category_img}
            alt={Data.name}
            className="image"
          />

           
         
          </div> 
        <div className="category-info">
          <h2>{Data.name}</h2>
        </div>
        </div>
          
      ))}
    </div>
    </>
  );
};

export default Category;
