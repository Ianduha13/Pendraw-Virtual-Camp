import React from "react"
import { FaLinkedin, FaGithubSquare, FaUserTie } from "react-icons/fa"
import "./styles/footer.css"

const Footer = () => {
  return (
    <footer>
      <p>Designed by Ian Duhamel 2022</p>
      <button className='btn-options btn-login'>
        <a href='https://www.linkedin.com/in/ian-duhamel/'>
          <FaLinkedin />
          Linkedin
        </a>
      </button>
      <button className='btn-options btn-login'>
        <a href='https://github.com/Ianduha13'>
          <FaGithubSquare />
          Github
        </a>
      </button>
      <button className='btn-options btn-login'>
        <a href='/'>
          <FaUserTie />
          Portfolio
        </a>
      </button>
    </footer>
  )
}

export default Footer
