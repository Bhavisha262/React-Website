import React, { useContext }  from 'react'
import { SpinnerDiamond} from 'spinners-react'
import "./LoaderForm.scss"
import MyContext from '../../Context/MyContext'

const LoaderForm  = () => {
   const{loader} = useContext(MyContext)

  return (
    <>
    {loader && 
    <div className='loading1'>
         <SpinnerDiamond size={50} thickness={100} speed={100} color="#800026" secondaryColor="rgba(0, 0, 0, 0.44)" />
    </div>
}
    </>
  )
}

export default LoaderForm