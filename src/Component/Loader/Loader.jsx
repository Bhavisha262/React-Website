import React from 'react'
import { ColorRing } from 'react-loader-spinner'
import "./Loader.scss"


const Loader = (props) => {
  return (
    <div className='loading'>

       <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#d72631', '#d9138a', '#b20238', '#322514', '#b85042']}
  />
  <h2>{props.title}</h2>
  <img src={props.src} alt={props.alt}/>
    </div>
  )
}

export default Loader