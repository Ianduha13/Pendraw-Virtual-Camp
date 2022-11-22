import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Header from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { useSelector, useDispatch } from "react-redux"
import useAlert from "./hooks/useAlert"
import { reset as resetAuth } from "./features/auth/authSlice"
import { toast } from "react-toastify"

function App() {
  const dispatch = useDispatch()

  const authState = useSelector((state) => state.auth)
  const { user, isError, isSuccess, message } = authState

  useAlert({
    alert: (config) => toast(message, config),
    reset: () => dispatch(resetAuth()),
    isError,
    isSuccess,
  })

  return (
    <>
      <BrowserRouter>
        <div className='container'>
          <Header user={user} />
          <Routes>
            {/* TO-DO protect dashboard route */}
            <Route path='/' element={<LandingPage user={user} />} />
            <Route path='/dashboard' element={<Dashboard user={user} />} />
            <Route path='/login' element={<Login user={user} />} />
            <Route path='/signup' element={<Register user={user} />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
