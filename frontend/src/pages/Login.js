import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {FaSignInAlt} from 'react-icons/fa'
import { toast } from 'react-toastify'
import { login, reset as resetAuth } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import useAlert from '../hooks/useAlert'

const Login = () => {
  const [formData, setFormData] = useState({
    email:'',
    password:'',
  })
  const { email, password } = formData

  const { isError, isSuccess, message} = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useAlert({
    alert: (config) => toast(message, config),
    reset: () => dispatch(resetAuth()),
    isError,
    isSuccess
  })

  const onChange =(e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const onSubmit = (e) =>{
    e.preventDefault()
    const userData = { email, password }
    dispatch(login(userData))
    navigate('/dashboard')
  }
  return(
  <>
    <section className="heading">
      <h1>
        <FaSignInAlt/> Login
      </h1>
      <p>Login and start setting goals!</p>
    </section>
    <section className="form">
      <form onSubmit={onSubmit}>
          <div className="form-group">
          <input 
          type="text" 
          className="form-control" 
          id= 'email' 
          name ='email' 
          value={email} 
          placeholder='Enter your email'
          onChange={onChange} />
        </div>
        <div className="form-group">
          <input 
          type="text" 
          className="form-control" 
          id= 'password' 
          name ='password' 
          value={password} 
          placeholder='Enter password'
          onChange={onChange} />
        </div>
        <div className="form-group">
          <button type = 'submit' className="btn btn-block">Log In</button>
        </div>
      </form>
    </section>
  </>)
}

export default Login