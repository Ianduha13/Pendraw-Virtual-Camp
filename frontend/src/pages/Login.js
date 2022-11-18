import e from 'express'
import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email:'',
    password:'',
    password2:'',
  })
  const {name, email, password, password2} = formData

  const onChange =() => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const onSubmit = (e) =>{
    e.preventDefault()
  }
  return(
  <>
    <section className="heading">
      <h1>
        <FaUser/> Login
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
          email='email' 
          value={email} 
          placeholder='Enter your email'
          onChange={onChange} />
        </div>
        <div className="form-group">
          <input 
          type="text" 
          className="form-control" 
          id= 'password' 
          password='password' 
          value={password} 
          placeholder='Enter password'
          onChange={onChange} />
        </div>
        <div className="form-group">
          <input 
          type="text" 
          className="form-control" 
          id= 'password2' 
          password2='password2' 
          value={password2} 
          placeholder='Enter your password2'
          onChange={onChange} />
        </div>
        <div className="form-group">
          <button type = 'submit' className="btn btn-block">Submit</button>
        </div>
      </form>
    </section>
  </>)
}

export default Login