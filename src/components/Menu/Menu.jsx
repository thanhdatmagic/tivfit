import React from 'react';
import './Menu.css'
import { useState } from 'react';
export const Menu = ({menu}) => {
  const [changePage,setchangePage]=useState('')

  function handleChange(){
    setchangePage(menu.filter(m=>m.name))
  }
  console.log(changePage) 
  return (
    <div className='Menu'> 
      <ul className="MenuLabel">
      {menu.map((m)=>{
                return(
                    <li key={m.id} onClick={handleChange}>
                        {m.name}
                    </li>
                )
        })}
      </ul>
       
    </div>
  )
}
