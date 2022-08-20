import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Background from '../../assets/motivation.mp4'
import SmallAvartar from '../../components/SmallAvatar/SmallAvartar'
import {useSelector } from 'react-redux/es/exports';

export const Home =({user}) => {
  const profiles= useSelector(state=>state.user.profile)

    function Logout(){
     localStorage.removeItem('userlog')
      window.location.reload()
}

  
  return (
    <div className="Home">
      <video src={Background} className='HomeBG' autoPlay loop muted/>
        <div className="slogan">
        {user? <>WELCOME <br/> {profiles.fullName}</>: <>WORK HARD <br/>TRAIN SMART</>}
        <SmallAvartar/>
        </div>
        {user? 
        <>
        <Link className='goprofilebtn' to='/profile'>GO TO YOUR PROFILE </Link>
        <Link className='btnLogout' to='/' onClick={Logout}>Logout</Link>
        </>:
         <>
        <Link className='btnLogin' to='/login'>Login</Link>
        <Link className='btnRegister' to='/register'>Register</Link> 
        </>
        }
    </div>
  )
}
