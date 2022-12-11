import { useState, useEffect } from "react"
import "../components/styles/CardContainer.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const apiUrl = process.env.REACT_APP_API_URL

const LandingPage = ({ user }) => {
  const [posts, setPost] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/posts/`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <div className='cards-container'>
        <div className='card-container'>
          {posts.map((post) => (
            <div className='card' key={`${post._id}`}>
              <h1>{post.title}</h1>
              <h4>{post.subtitle}</h4>
              <p>{post.text}</p>
            </div>
          ))}
          {user ? (
            <button className='button' onClick={() => navigate("/posts")}>
              Make a post!
            </button>
          ) : (
            <button className='button' onClick={() => navigate("/signup")}>
              Only users can make a post!
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default LandingPage
