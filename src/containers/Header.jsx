import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Menu} from '../components/Menu/Menu'
export default function Header() {
    const [menu,setMenu]=useState([])
    
    async function MenuAPICall(){
        try{
            const res= await axios.get('https://62de98c89c47ff309e778075.mockapi.io/menu');
               setMenu(res.data)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        MenuAPICall()
    },[])

  return (
    <div>
        <div className="Header"> 
                        <Menu menu={menu}/>         
         </div>
    </div>
  )
}
