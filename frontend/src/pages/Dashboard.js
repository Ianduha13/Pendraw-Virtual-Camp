import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout as storeLogout } from '../features/auth/authSlice'

const Dashboard = ({ user }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logout = () => {
    localStorage.removeItem('user')
    dispatch(storeLogout())
    navigate('/login')
  }

  return(
    <>
      <div>Dashboard
      {JSON.stringify(user)}
      <button onClick={logout}>logout</button>
      </div>
    </>
  )
}

export default Dashboard