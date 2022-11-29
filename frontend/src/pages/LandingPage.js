import "../components/styles/CardContainer.css"
import { useState, useEffect } from "react"
import axios from "axios"

const LandingPage = ({ user }) => {
  const API_URL = "/api/posts/"
  const [posts, setPost] = useState([])
  useEffect(() => {
    const axiosData = async (token) => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await axios.get(API_URL, config)
      setPost(posts.push(response.data))
      console.log(posts)
      return response.data
    }
    axiosData(user.token)
  }, [user.token])

  return (
    <>
      <div className='cards-container'>
        <div className='card-container'>
          {Array.from(posts).map((post) => (
            <div className='card'>
              <h1>post.title</h1>
              <h2>post.subtitle</h2>
              <p>post.text</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default LandingPage
