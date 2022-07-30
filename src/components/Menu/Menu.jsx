import React from 'react';
import './Menu.css'
export const Menu = ({menu}) => {
  return (
    <div className='Menu'> 
      <ul className="MenuLabel">
      {menu.map((m)=>{
                return(
                    <li key={m.id}>
                        {m.name}
                    </li>
                )
        })}
      </ul>
       
    </div>
  )
}
