import { useState } from "react"
import { MdOutlineDraw } from "react-icons/md"
import { useDispatch } from "react-redux"
import "../components/styles/Form.css"
import { createPost } from "../features/post/postSlice"

const Register = ({ user }) => {
  const [title, setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")
  const [text, setText] = useState("")

  const dispatch = useDispatch()
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createPost({ title, subtitle, text }))
    setTitle("")
    setSubtitle("")
    setText("")
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
              onChange={(e) => setTitle(e.target.value)}
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
              onChange={(e) => setSubtitle(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='post'
              name='post'
              placeholder='Enter the post text'
              value={text}
              onChange={(e) => setText(e.target.value)}
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
