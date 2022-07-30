import './register.css'
import BGRegister from '../../assets/bgregister.jpg'
import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function Register() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [fullName,setFullName] = useState('')
    const [date,setDate]= useState('')
    const [phone,setPhone]=useState('')
    const [address,setAddress]=useState('')
    


     function RegisterUserAPI(){
        axios.post('https://62de98c89c47ff309e778075.mockapi.io/user', {
                fullName:fullName,
                username:username,
                password:password,
                phonenumber:phone,
                address:address,
                birthday:date,
                
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }
    function Register(){
        RegisterUserAPI()
    }
   console.log(date);
   console.log(phone);
   console.log(fullName);
  return (
    <div className="register">
        <img src={BGRegister} alt="" className='bgregister'/>
        <div className="close">X</div> 
        <div className="formregisterhandle">
          <p className='registerlable'>REGISTER</p>
          <p className='inputlabelregister'>Username</p>
          <input type='text' className='inputform' onChange={(e)=>setUsername(e.target.value)}></input>
          <p className='inputlabelregister' >Password</p>
          <input type='password'  className='inputform' onChange={(e)=>setPassword(e.target.value)}></input> 
          <p className='inputlabelregister' >FullName</p>
          <input type='text'  className='inputform' onChange={(e)=>setFullName(e.target.value)}></input> 
          <p className='inputlabelregister' >Date</p>
          <input type='date'  className='inputform' onChange={(e)=>setDate(e.target.value)}></input> 
          <p className='inputlabelregister' >Phone</p>
          <input type='text'  className='inputform'  onChange={(e)=>setPhone(e.target.value)}></input>
          <p className='inputlabelregister'>Address</p>
          <input type='text'  className='inputform' onChange={(e)=>setAddress(e.target.value)} ></input>  
          <button  className='btnregisterinlogin' onClick={RegisterUserAPI}>Register </button>
    </div>
</div>
  )
}
