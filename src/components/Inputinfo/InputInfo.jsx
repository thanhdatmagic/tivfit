import React,{useState,useEffect} from 'react'
import axios from 'axios'
import ChangePass from '../ChangePass/ChangePass'
import {Link} from 'react-router-dom'


export default function InputInfo({profile}) {
    const [username,setUsername]=useState()
    const [fullName,setFullName]=useState()
    const [birthday,setBirthday]=useState()
    const [edit,setEdit]=useState(true)
  

    console.log(username);
    console.log(fullName);
    console.log(birthday);
    const UpdateInfo= async ()=>{
       await axios.put(`https://62de98c89c47ff309e778075.mockapi.io/user/${profile.id}`,{
           username:username,
            fullName:fullName,
           birthday:birthday,
           password:profile.password,
           tdee:profile.tdee
        })
       await alert('ok')
        window.location.reload()
    }
   

  return (
    <div className="Inputinfo">
                
            <label className="labelinputinfo">Username</label>
            <input type="text" className="inputinfo" defaultValue={profile.username} onChange={(e)=>setUsername(e.target.value)}/>
            <label className="labelinputinfo">Password</label>
            <input type="password" className="inputinfo" defaultValue={profile.password} disabled /> <p><Link to='/changepass'>Change</Link></p>
            <label className="labelinputinfo">FullName</label>
            <input type="text" className="inputinfo"defaultValue={profile.fullName} onChange={(e)=>setFullName(e.target.value)} />
            <label className="labelinputinfo">Birthday</label>
            <input type="date" className="inputinfo"defaultValue={profile.birthday}  onChange={(e)=>setBirthday(e.target.value)}/>
            <label className="labelinputinfo" >TDEE</label>
            <input type="text" className="inputinfo"defaultValue={profile.tdee} disabled/>
            <label className="labelinputinfo">Status</label>
            <input type="text" className="inputinfo"/>
           
            <button onClick={UpdateInfo} className='btnUpdateInfo'>Update</button>
            
    </div>
  )
}
