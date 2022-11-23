import React from "react"
import "../components/styles/Profile.css"

const Profile = ({ user }) => {
  const userName = JSON.stringify(user.name)
  const email = JSON.stringify(user.email)
  return (
    <div className='profile-container'>
      <div className='data-container'>
        <p>Name: {userName}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  )
}

export default Profile
