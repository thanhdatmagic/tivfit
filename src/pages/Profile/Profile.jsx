import React,{useState,useEffect,useLayoutEffect} from 'react'
import './Profile.css'
import axios from "axios";
import InputInfo from '../../components/Inputinfo/InputInfo';
import ChangePass from '../../components/ChangePass/ChangePass'
import { useDispatch,useSelector } from 'react-redux/es/exports';
import {SetProfiles} from '../../actions/user'
export default  function Profile ({user}) {

  const dispatch=useDispatch()
  const [profile,setProfile]= useState()
//   function ProfileAPICALL(){
//         axios.get(`https://62de98c89c47ff309e778075.mockapi.io/user/${id}`)

//   .then(function (response) {    
//     console.log(response);
//     setProfile(response.data)
//     const action =SetProfiles(response.data)
//     dispatch(action)

//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
// }
// useEffect(()=>{
//     ProfileAPICALL()
//   return (()=>{
    
//   })   
// },[])


const profiles= useSelector(state=>state.user.profile)
console.log(profiles)

  return (
    <>
    { user ? <div>
            
             <div className="Profile">
                <></>
                    <div className="leftprofile">
                        <img src={profiles?.avatar} alt={profiles?.fullName} className="profileimg" />
                        <p  className="profilefullName">{profiles?.fullName}</p>
                        <p  className="profilefullName">{profiles?.birthday}</p>
                        <p  className="profilefullName">TDEE:{profiles?.tdee}</p>
                        <p  className="profilefullName">Tình trạng: Khỏe mạnh</p>
                    </div>
                    <div className="rightprofile">
                            <InputInfo profile={profiles}/>
                    </div>
            </div>
    </div>:
      'You are not logged'
    
    }
    
    </>
    
  )
}
