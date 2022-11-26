import {
  HiOutlineUser,
  HiOutlineLogout,
  HiOutlineLogin,
  HiOutlineHome,
  HiOutlineUserAdd,
  HiOutlineBell,
} from "react-icons/hi"
import { Link } from "react-router-dom"
import "./styles/Mobile.css"
import { useNavigate } from "react-router-dom"

const MobileNavigationOptions = ({ user, logout }) => {
  const navigate = useNavigate()
  return (
    <>
      {user ? (
        <ul className='mobile-ul'>
          <li>
            <button className='mobile-options'>
              <HiOutlineHome />
              <p>Dashboard</p>
            </button>
          </li>
          <li>
            <button className='mobile-options'>
              <HiOutlineBell />
              <p>Notifications</p>
            </button>
          </li>
          <li>
            <button className='mobile-options'>
              <Link to='/me'>
                <HiOutlineUser />
                <p>Profile</p>
              </Link>
            </button>
          </li>
          <li>
            <button className='mobile-options'>
              <Link to='/login' onClick={logout}>
                <HiOutlineLogout />
                <p>LogOut</p>
              </Link>
            </button>
          </li>
        </ul>
      ) : (
        <ul className='mobile-ul'>
          <li>
            <button className='mobile-options login'>
              <Link to='/signup'>
                <HiOutlineUserAdd />
                <p>Register</p>
              </Link>
            </button>
          </li>
          <li>
            <button className='mobile-options login'>
              <Link to='/login'>
                <HiOutlineLogin /> <p>Login</p>
              </Link>
            </button>
          </li>
        </ul>
      )}
    </>
  )
}

export default MobileNavigationOptions
