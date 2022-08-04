import React from 'react'
import './Profile.css'

export default function ({user}) {
   
    const profile =user.checkUser[0]

       

  return (
    <div>
            {user?
             <div className="Profile">
                    <div className="leftprofile">
                        <img src={profile.avatar} alt={profile.fullName} className="profileimg" />
                        <p  className="profilefullName">{profile.fullName}</p>
                        <p  className="profilefullName">{profile.birthday}</p>
                        <p  className="profilefullName">TDEE:{profile.tdee}</p>
                        <p  className="profilefullName">Tình trạng: Khỏe mạnh</p>
                    </div>
                    <div className="rightprofile">
                            a
                    </div>
            </div>
            :
            <>
             Your r not logged loser
            </>}
    </div>
  )
}
