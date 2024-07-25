import React from 'react'

const HeaderComponent = (props) => {
  return (
    <div>
    <h1>{props.title}</h1>
    <p>{props.subtitle}</p>
    </div>
  )
}

export default HeaderComponent
  