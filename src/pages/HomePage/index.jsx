import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Background from '../../assets/motivation.mp4'

export const Home =  ({user}) => {
 
    function Logout(){
     localStorage.removeItem('userlog')
    window.location.reload()
}
  return (
    <div className="Home">
      <video src={Background} className='HomeBG' autoPlay loop muted/>
        <div className="slogan">
        {user? <>WELCOME <br/> {user.checkUser[0].fullName}</>: <>WORK HARD <br/>TRAIN SMART</>}
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
