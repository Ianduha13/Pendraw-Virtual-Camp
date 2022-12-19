import axios from "axios"
const apiUrl = process.env.REACT_APP_API_URL

const register = async (userData) => {
	const response = await axios.post(apiUrl, userData)
	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data))
	}
	return response.data
}
const login = async (userData) => {
	const response = await axios.post(`${apiUrl}/login`, userData)
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
