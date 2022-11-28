import {
  HiOutlineUser,
  HiOutlineLogout,
  HiOutlineLogin,
  HiOutlineHome,
  HiOutlineUserAdd,
} from "react-icons/hi"
import { MdOutlineDraw } from "react-icons/md"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logout as storeLogout } from "../features/auth/authSlice"
import { toast } from "react-toastify"
import "./styles/Navbar.css"
import MobileNavigationMenu from "./MobileNavigationMenu"
import NotificationButton from "./NotificationButton"

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
    <nav className='header'>
      <div className='logo'>
        <MdOutlineDraw className='logo-svg' />
        <Link to='/'>
          <p>PenDraw Virtual Camp</p>
        </Link>
      </div>
      {user ? (
        <ul>
          <li>
            <button
              className='btn-options main-btn'
              onClick={() => navigate("/dashboard")}
            >
              <HiOutlineHome />
              <p>Dashboard</p>
            </button>
          </li>
          <li>
            <NotificationButton />
          </li>
          <li>
            <button className='btn-options' onClick={() => navigate("/me")}>
              <HiOutlineUser />
            </button>
          </li>
          <li>
            <button
              className='btn-options'
              onClick={(() => navigate("/dashboard"), logout)}
            >
              <HiOutlineLogout />
            </button>
          </li>
          <li>
            <MobileNavigationMenu user={user} logout={logout} />
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <button
              className='btn-options main-btn'
              onClick={() => navigate("/signup")}
            >
              <HiOutlineUserAdd />
              <p>Register</p>
            </button>
          </li>
          <li>
            <button
              className='btn-options btn-login'
              onClick={() => navigate("/login")}
            >
              <HiOutlineLogin /> Login
            </button>
          </li>
          <li>
            <MobileNavigationMenu />
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Header
