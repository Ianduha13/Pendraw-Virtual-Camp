import React from "react"
import { Link } from "react-router-dom"

const Dashboard = ({ user }) => {
  return (
    <>
      <div className='left-container'>
        <ul>
          <li>
            <Link to='/'>Landing Page</Link>
          </li>
          <li>
            <Link to='/posts'>Create a post!</Link>
          </li>
          <li>
            <Link to='/classrooms'>Go to classrooms</Link>
          </li>
          <li>
            <Link to='/settings'>Settings</Link>
          </li>
        </ul>
      </div>
      <div className='right-container'>
        <div className='btn-container'>
          <button className='classroom-btn'>Classroom 1</button>
          <button className='classroom-btn'>Classroom 1</button>
          <button className='classroom-btn'>Classroom 1</button>
          <button className='classroom-btn'>Classroom 1</button>
          <button className='classroom-btn'>Classroom 1</button>
          <button className='classroom-btn'>Classroom 1</button>
          <button className='classroom-btn'>Classroom 1</button>
          <button className='classroom-btn'>Classroom 1</button>
          <button className='classroom-btn'>Classroom 1</button>
        </div>
      </div>
    </>
  )
}

export default Dashboard
