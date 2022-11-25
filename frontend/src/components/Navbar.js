import {
  HiOutlineUser,
  HiMenu,
  HiOutlineLogout,
  HiOutlineLogin,
  HiOutlineHome,
  HiOutlineUserAdd,
  HiOutlineBell,
} from "react-icons/hi"
import { MdOutlineDraw } from "react-icons/md"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logout as storeLogout } from "../features/auth/authSlice"
import { toast } from "react-toastify"
import "./styles/Navbar.css"

const Header = ({ user }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logout = () => {
    localStorage.removeItem("user")
    dispatch(storeLogout())
    navigate("/login")
    toast.success("Logged out correctly")
  }
  const toggleMenu = (e) => {}
  return (
    <header className='header'>
      <div className='logo'>
        <MdOutlineDraw className='logo-svg' />
        <Link to='/'>
          <p>PenDraw Virtual Camp</p>
        </Link>
      </div>
      {user ? (
        <ul>
          <li>
            <button className='btn-options main-btn'>
              <Link to='/dashboard'>
                <HiOutlineHome />
                <p>Dashboard</p>
              </Link>
            </button>
          </li>
          <li>
            <button className='btn-options'>
              <Link to='/notifications'>
                <HiOutlineBell />
              </Link>
            </button>
          </li>
          <li>
            <button className='btn-options'>
              <Link to='/me'>
                <HiOutlineUser />
              </Link>
            </button>
          </li>
          <li>
            <button className='btn-options'>
              <Link to='/login' onClick={logout}>
                <HiOutlineLogout />
              </Link>
            </button>
          </li>
          <li>
            <button
              className='btn-menu btn-options inactive'
              onClick={toggleMenu()}
            >
              <HiMenu />
            </button>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <button className='btn-options main-btn'>
              <Link to='/signup'>
                <HiOutlineUserAdd />
                <p>Register</p>
              </Link>
            </button>
          </li>
          <li>
            <button className='btn-options btn-login'>
              <Link to='/login'>
                <HiOutlineLogin /> Login
              </Link>
            </button>
          </li>
          <li>
            <button
              className='btn-menu btn-options inactive'
              onClick={toggleMenu()}
            >
              <HiMenu />
            </button>
          </li>
        </ul>
      )}
    </header>
  )
}

export default Header
