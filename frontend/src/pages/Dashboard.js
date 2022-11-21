import React from "react"

const Dashboard = ({ user }) => {
  return (
    <>
      <div>
        Dashboard
        {JSON.stringify(user)}
      </div>
    </>
  )
}

export default Dashboard
