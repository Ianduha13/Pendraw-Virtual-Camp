import { useState } from "react"
import { MdOutlineDraw } from "react-icons/md"
import { useDispatch } from "react-redux"
import "../components/styles/Form.css"
import { post } from "../features/post/postSlice"

const Register = ({ user }) => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    text: "",
  })
  const { title, subtitle, text } = formData

  const dispatch = useDispatch()
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const postData = { title, subtitle, text }
    dispatch(post(postData, user.token))
    setFormData({ title: "", subtitle: "", text: "" })
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <MdOutlineDraw className='logo-svg' />
          Posts
        </h1>
        <p>Create a post!</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='title'
              name='title'
              placeholder='Enter the title'
              value={title}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='subtitle'
              name='subtitle'
              placeholder='Enter the sub-title'
              value={subtitle}
              onChange={onChange}
            />
          </div>
          <div className='form-group '>
            <textarea
              type='text'
              className='form-control form-text'
              id='text'
              name='text'
              placeholder='Enter the post text'
              value={text}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Publish your Post!
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register
