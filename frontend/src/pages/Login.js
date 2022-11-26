import { useState } from "react"
import { useDispatch } from "react-redux"
import { HiOutlineLogin } from "react-icons/hi"
import { Navigate } from "react-router-dom"
import { login } from "../features/auth/authSlice"
import "../components/styles/Form.css"

const Login = ({ user }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const { email, password } = formData

  const dispatch = useDispatch()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const userData = { email, password }
    dispatch(login(userData))
  }

  return (
    <>
      {user && <Navigate to='/' replace={true} />}
      <section className='heading'>
        <h1 className='title'>
          <HiOutlineLogin /> Login
        </h1>
        <p>Login and start learning!</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn'>
              Log In
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
