import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './Login.css'
import BGLogin from '../../assets/bglogin.jpg'
import { useNavigate } from "react-router-dom";
import { Alert } from 'antd';

export default function LoginPage() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [userlist,setUserlist]=useState([])
  const [alertpopup,setAlertpopup]=useState(false)
  
  console.log('re-render')
    
    async function UserAPICall(){
        try{
            const res= await axios.get('https://62de98c89c47ff309e778075.mockapi.io/user');
            setUserlist(res.data)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
      UserAPICall()
    },[userlist])
    const navigate=useNavigate()
   async function Login(){
     const checkUser = await userlist.filter(user=>user.username === username && user.password === password)

      if (checkUser.length > 0){
        alert("Success")
        navigate('/')
        localStorage.setItem('userlog',JSON.stringify({checkUser}))
      }
      else if(username===''){
        setAlertpopup(!alertpopup)
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
             <button onClick={Login} className='btnnlogininlogin'>Login </button>
             <button onClick={Login} className='btnforgotpassword'>Forgot Password</button>   
         </div>
       </div>}
    
    </>
   
  )
}
