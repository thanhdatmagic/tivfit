import React from 'react';
import './SmallAvatar.css';
import { useSelector } from 'react-redux/es/exports';


export default function SmallAvartar() {
  const profiles= useSelector(state=>state.user.profile)
  console.log(profiles);
  return (
    <div className='SmallAvatar'>
        <img src={profiles.avatar} alt="" />
    </div>
  )
}
