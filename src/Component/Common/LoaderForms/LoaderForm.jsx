import React, { useContext }  from 'react'
import { BallTriangle } from 'react-loader-spinner'
import "./LoaderForm.scss"
import MyContext from '../../Context/MyContext'

const LoaderForm  = () => {
   const{loader} = useContext(MyContext)

  return (
    <>
    {loader && 
    <div className='loading1'>
         
    <BallTriangle
    height={100}
    width={100}
    radius={5}
    ariaLabel="ball-triangle-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}  
    color="#aa336a"
  />
    </div>
}
    </>
  )
}

export default LoaderForm