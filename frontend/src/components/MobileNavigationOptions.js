import {
  HiOutlineUser,
  HiOutlineLogout,
  HiOutlineLogin,
  HiOutlineHome,
  HiOutlineUserAdd,
  HiOutlineBell,
} from "react-icons/hi"
import "./styles/Mobile.css"
import { useNavigate } from "react-router-dom"

const MobileNavigationOptions = ({ user, logout }) => {
  const navigate = useNavigate()
  return (
    <>
      {user ? (
        <ul className='mobile-ul'>
          <li>
            <button
              className='mobile-options'
              onClick={() => navigate("/dashboard")}
            >
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
            <button className='mobile-options' onClick={() => navigate("/me")}>
              <HiOutlineUser />
              <p>Profile</p>
            </button>
          </li>
          <li>
            <button
              className='mobile-options'
              onClick={(() => navigate("/login"), logout)}
            >
              <HiOutlineLogout />
              <p>LogOut</p>
            </button>
          </li>
        </ul>
      ) : (
        <ul className='mobile-ul'>
          <li>
            <button
              className='mobile-options login'
              onClick={() => navigate("/login")}
            >
              <HiOutlineUserAdd />
              <p>Register</p>
            </button>
          </li>
          <li>
            <button
              className='mobile-options login'
              onClick={() => navigate("/login")}
            >
              <HiOutlineLogin /> <p>Login</p>
            </button>
          </li>
        </ul>
      )}
    </>
  )
}

export default MobileNavigationOptions
