import React from 'react';
import './SmallAvatar.css';


export default function SmallAvartar({UserLog}) {
   
  return (
    <div className='SmallAvatar'>
        <img src={UserLog.avatar} alt={UserLog.fullName} />
        <p>{UserLog.fullName}</p>
    </div>
  )
}
