import React from "react"
import { Link } from "react-router-dom"
import "../components/styles/Dashboard.css"
const Dashboard = ({ user }) => {
  return (
    <div className='md-container'>
      <div className='left-container'>
        <ul>
          <li>
            <button>
              <Link to='/'>Landing Page</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to='/posts'>Create a post!</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to='/classrooms'>Go to classrooms</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to='/settings'>Settings</Link>
            </button>
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
