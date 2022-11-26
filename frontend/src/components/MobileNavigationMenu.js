import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"
import "./styles/Mobile.css"
import MobileNavigationOptions from "./MobileNavigationOptions"

const MobileNavigationMenu = ({ user, logout }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <div className="menu'container inactive">
        <button className='mobile-menu' onClick={() => setToggle(!toggle)}>
          {toggle === true ? <HiX /> : <HiMenu />}
        </button>
        {toggle === true && (
          <div className='option-container inactive'>
            <MobileNavigationOptions user={user} logout={logout} />
          </div>
        )}
      </div>
    </>
  )
}

export default MobileNavigationMenu
