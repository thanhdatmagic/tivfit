import React from 'react'
import {useLocation} from 'react-router-dom'

export default function Welcome() {
    const location = useLocation();
    const username=location.state
    console.log(location);
  return (
    <div>Welcome {username.map(m=>m.fullName)}</div>
  )
}
