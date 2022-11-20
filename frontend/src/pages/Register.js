import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import { register, reset as resetAuth } from '../features/auth/authSlice'
import useAlert from '../hooks/useAlert'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email:'',
    password:'',
    password2:'',
  })
  const {name, email, password, password2} = formData
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

  useAlert({
    alert: (config) => toast(message, config),
    reset: () => dispatch(resetAuth()),
    isError,
    isSuccess
  })

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const onSubmit = (e) =>{
    e.preventDefault()
    if(password !== password2)
      return toast.error('Password do not match')
    const userData = { name, email, password }
    dispatch(register(userData))
    navigate('/dashboard')
  }

  return(
  <>
    <section className="heading">
      <h1>
        <FaUser/> Register
      </h1>
      <p>Please create an account</p>
    </section>
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input 
          type="text" 
          className="form-control" 
          id= 'name' 
          name='name' 
          value={name} 
          placeholder='Enter your name'
          onChange={onChange} />
        </div>
        <div className="form-group">
          <input 
          type="text" 
          className="form-control" 
          id= 'email' 
          name='email' 
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
          <input 
          type="text" 
          className="form-control" 
          id= 'password2' 
          name ='password2' 
          value={password2} 
          placeholder='Confirm your password'
          onChange={onChange} />
        </div>
        <div className="form-group">
          <button type = 'submit' className="btn btn-block">Submit</button>
        </div>
      </form>
    </section>
  </>)
}

export default Register