import { HiOutlineBell, HiX } from "react-icons/hi"
import { useState } from "react"

const NotificationButton = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <button className='btn-options' onClick={() => setShow(!show)}>
        {show === true ? <HiX /> : <HiOutlineBell />}
      </button>
      {show === true && (
        <div className='notification-display'>
          <span className='model-notification'>
            You dont have notifications yet
          </span>
        </div>
      )}
    </>
  )
}

export default NotificationButton
