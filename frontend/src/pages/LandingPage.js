import "../components/styles/CardContainer.css"
import { useState, useEffect } from "react"

const LandingPage = () => {
  const [posts, setPost] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        `https://api.unsplash.com/photos?client_id=xIphgH7aVd4uy4bYRavSS5T_tu7KqJWv9tbR5XAknSY`
      )
      const data = await response.json()
      console.log(data)
      setPost(data.urls)
    }

    fetchImages()
  }, [])
  return (
    <>
      <div className='cards-container'>
        <div className='card-container'>
          {posts.map((urls) => (
            <div className='card'>
              <img src={urls.small} alt={urls.regular} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default LandingPage
