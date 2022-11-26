import React from "react"
import "../components/styles/Dashboard.css"
import { useNavigate } from "react-router-dom"
//god use from navigate
const Dashboard = ({ user }) => {
  const navigate = useNavigate()
  return (
    <div className='md-container'>
      <div className='left-container'>
        <ul className='options'>
          <li>
            <button onClick={() => navigate("/")}>Go to Landing Page!</button>
          </li>
          <li>
            <button onClick={() => navigate("/posts")}>Create a post!</button>
          </li>
          <li>
            <button onClick={() => navigate("/classrooms")}>
              Go to Classrooms
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/me")}>Settings</button>
          </li>
        </ul>
      </div>
      <div className='right-container'>
        <div className='btn-container'>
          <button className='classroom-btn art-btn'>Art 1</button>
          <button className='classroom-btn art-btn'>Art 2</button>
          <button className='classroom-btn art-btn'>Art 3</button>
          <button className='classroom-btn art-btn'>Art 1</button>
          <button className='classroom-btn art-btn'>Art 2</button>
          <button className='classroom-btn art-btn'>Art 3</button>
          <button className='classroom-btn music-btn'>Music 1</button>
          <button className='classroom-btn music-btn'>Music 2</button>
          <button className='classroom-btn music-btn'>Music 3</button>
          <button className='classroom-btn'>Classroom 1</button>
          <button className='classroom-btn'>Classroom 1</button>
          <button className='classroom-btn'>Add one</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
