import { useEffect } from "react"

const useAlert = ({ isError, isSuccess, alert, reset }) => {
  useEffect(() => {
    if (!isError && !isSuccess) return
    alert({ type: isError ? "error" : "success" })
    reset()
  }, [isError, isSuccess])
}

export default useAlert
