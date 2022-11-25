import React from "react"
import "../components/styles/Profile.css"

const Profile = ({ user }) => {
  const userNamejson = JSON.stringify(user.name)
  const emailjson = JSON.stringify(user.email)
  const userName = userNamejson.replace(/"([^"]+)":/g, "$1:")
  const email = emailjson.replace(/"([^"]+)":/g, "$1:")
  return (
    <div className='profile-container'>
      <div className='photo'>
        <button>dd your photo</button>
      </div>
      <div className='data-container'>
        <p>Name: {userName}</p>
        <p>Email: {email}</p>
      </div>
      <div className='bot-container'>
        <div className='history-container'>
          <h2>Post History</h2>
          <section>Make a post to add it to your history</section>
        </div>
        <div className='classroom-container'>
          <h2>Your Classrooms</h2>
          <section>Join a Classroom to add it to your history</section>
        </div>
      </div>
    </div>
  )
}

export default Profile
