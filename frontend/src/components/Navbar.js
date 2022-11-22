import { FaSignInAlt, FaSignOutAlt, FaUser, FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logout as storeLogout } from "../features/auth/authSlice"
import { toast } from "react-toastify"

const Header = ({ user }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logout = () => {
    localStorage.removeItem("user")
    dispatch(storeLogout())
    navigate("/login")
    toast.success("Logged out correctly")
  }
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>PenDraw Virtual Camp</Link>
      </div>
      {user ? (
        <ul>
          <li>
            <Link to='/dashboard'>
              <FaHome /> Dashboard
            </Link>
          </li>
          <li>
            <Link to='/login' onClick={logout}>
              <FaSignOutAlt /> Logout
            </Link>
          </li>
        </ul>
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
