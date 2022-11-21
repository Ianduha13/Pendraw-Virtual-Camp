import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logout as storeLogout } from "../features/auth/authSlice"

const Header = ({ user }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logout = () => {
    localStorage.removeItem("user")
    dispatch(storeLogout())
    navigate("/login")
  }
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>GoalSetter</Link>
      </div>
      {user ? (
        <button onClick={logout}>logout</button>
      ) : (
        <ul>
          <li>
            <Link to='/login'>
              <FaSignInAlt /> Login
            </Link>
          </li>
          <li>
            <Link to='/signup'>
              <FaUser /> Register
            </Link>
          </li>
        </ul>
      )}
    </header>
  )
}

export default Header
