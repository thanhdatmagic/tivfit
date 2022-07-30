import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Background from '../../assets/motivation.mp4'

export const Home = () => {
  return (
    <div className="Home">
      <video src={Background} className='HomeBG' autoPlay loop muted/>
        <div className="slogan">
            WORK HARD <br/>TRAIN SMART
        </div>
          <Link className='btnLogin' to='/login'>Login</Link>
          <Link className='btnRegister' to='/register'>Register</Link> 
    </div>
  )
}
