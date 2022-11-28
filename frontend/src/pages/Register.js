import { useState } from "react"
import { FaUser } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"
import { register, validationError } from "../features/auth/authSlice"
import "../components/styles/Form.css"

const Register = ({ user }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  })
  const { name, email, password, password2 } = formData

  const dispatch = useDispatch()
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== password2)
      return dispatch(validationError("Password do not match"))
    const userData = { name, email, password }
    dispatch(register(userData))
  }

  return (
    <>
      {user && <Navigate to='/dashboard' replace={true} />}
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              placeholder='Enter your name'
              onChange={onChange}
            />
          </div>
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
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Confirm your password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register
