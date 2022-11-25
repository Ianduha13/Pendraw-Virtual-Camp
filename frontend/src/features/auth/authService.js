const API_URL = "https://pendraw-campus-backend.vercel.app/api/users"

const register = async (userData) => {
  const response = await fetch.post(API_URL, userData)
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }
  return response.data
}
const login = async (userData) => {
  const response = await fetch.post(`${API_URL}/login`, userData)
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }
  return response.data
}

const authService = {
  register,
  login,
}

export default authService
