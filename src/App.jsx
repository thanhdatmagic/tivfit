
import { Home } from "./pages/HomePage/index";
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { useState,useEffect } from "react";
import  LoginPage  from './pages/LoginPage/index'
import  RegisterPage  from './pages/RegisterPage/index'
import  ProfilePage  from './pages/Profile/Profile'
import ChangePass from './components/ChangePass/ChangePass'
import axios from "axios";
import {SetAllUser,SetProfiles} from './actions/user'
import { useDispatch,useSelector } from 'react-redux/es/exports';
import userAPI from './api/UserAPI'


function App() {
  const  [user,setUser]=useState(localStorage.getItem('userlog') ? JSON.parse(localStorage.getItem('userlog')):'')
  const [userlist,setUserlist]=useState([])

  const dispatch=useDispatch();


  async function UserAPICall(){
    try{
      const res= await userAPI.getAll();
      console.log(res)
       setUserlist(res)
       const user= SetAllUser(res)
       dispatch(user)
   }catch(error){
      console.log(error)
    }
  }
    useEffect(() => {
      UserAPICall()
    
    },[])

  const profile = async()=>{
    if (localStorage.getItem('userlog')){
      const id = await JSON.parse(localStorage.getItem('userlog')).checkUser[0].id
      try{
        const res=  await userAPI.getProfile(id);
        console.log(res)
         const user= SetProfiles(res)
         dispatch(user)
     }catch(error){
        console.log(error)
      } 
    }
  }
  useEffect(() => {
    profile()
  },[])
  const profiles= useSelector(state=>state.user.profile)
  console.log(profiles);
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home user={user} /> }/>
            <Route path='/login' element={<LoginPage userlist={userlist}/>}/>
            <Route path='changepass' element={<ChangePass user={user}/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/profile' element={<ProfilePage user={user}  />}/>      
          </Routes>
      </BrowserRouter> 
    </div>
  );
}
export default App;
