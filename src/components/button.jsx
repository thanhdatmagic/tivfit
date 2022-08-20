import React from 'react'

export const Button = (props) => {
 const {name,sytle}=props
 console.log(props.style);
 console.log(sytle);
  return (
    
        <button className={sytle}>{name}</button>

  )
}
