import React from "react"
import Card from "./Card"
import "./styles/CardContainer.css"

const API_URL =
  "http://api.mediastack.com/v1/news?access_key=43bd5c7b46a8a880c4e7821c43695d72"

const CardContainer = () => {
  const fetchNews = async (API_URL) => {
    fetch(API_URL)
    await ((res) => {
      return res.json()
    })
    await ((data) => {
      console.log(data)
    })
  }

  fetchNews(API_URL)

  return (
    <>
      <div className='container-md '>
        <Card />
      </div>
    </>
  )
}

export default CardContainer
