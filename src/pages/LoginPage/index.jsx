import React,{useState,useEffect} from 'react'

import './Login.css'
import BGLogin from '../../assets/bglogin.jpg'
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux/es/exports';
import axios from "axios";
import Fomrinput from '../../components/inputform/index'
import { Button } from '../../components/button';


export default function LoginPage() {
  const Userlist= useSelector(state=>state.user.allUser)
  const dispatch=useDispatch()
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
    const navigate=useNavigate()
 
  async function Login(){
      const checkUser = await Userlist.filter(user=>user.username === username && user.password === password)
      if (checkUser.length > 0){
        alert("Success")
        navigate('/')
        localStorage.setItem('userlog',JSON.stringify({checkUser}))
       
       
      }
      else if(username===''){
        alert ('Please Fill Username')
      }
      else if(password===''){
        alert ('Please Fill Password')
      }
      else{
        alert('Wrong User')
      }
      window.location.reload()
  }
 

  

  const isLogged =localStorage.getItem('userlog')
  const profiles= useSelector(state=>state.user.profile)
console.log(profiles)
  return (
    
    <>
        { isLogged ? 'You are logged King':
         <div className='login'>
         <img src={BGLogin} alt="" className='bglogin'/>
         
         <div className="formloginhandle">
            <div className="close">X</div> 
             <p className='loginlabel'>LOG IN</p>
             <p className='inputlabel'>Username</p>
             <input type='text' onChange={(e)=>setUsername(e.target.value)} className='inputform'></input>
         
             <p className='inputlabel'>Password</p>
             <input type='password' onChange={(e)=>setPassword(e.target.value)} className='inputform' ></input> 
             
             <Button name='login'/>
             <Button name='password' sytle='btnforgotpassword'/>
             <button onClick={Login} className='btnforgotpassword'>Forgot Password</button>   
         </div>
       </div>}
    
    </>
   
  )
}
