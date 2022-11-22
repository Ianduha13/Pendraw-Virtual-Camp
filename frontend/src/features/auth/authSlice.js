import { createSlice } from "@reduxjs/toolkit"
import authService from "./authService"

const user = JSON.parse(localStorage.getItem("user")) ?? null

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    ...initialState,
    user,
  },
  reducers: {
    reset: (state) => {
      return { ...state, ...initialState }
    },
    logout: () => {
      return { ...initialState, user: null }
    },
    loading: (state) => {
      return {
        ...state,
        isLoading: true,
      }
    },
    loggedIn: (state, action) => {
      const newState = {
        ...state,
        isLoading: false,
        isSuccess: true,
        message: action.payload.message,
        user: action.payload.user,
      }
      return newState
    },
    rejected: (state, action) => {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload,
        user: null,
      }
    },
    validationError: (state, action) => {
      return {
        ...state,
        isError: true,
        message: action.payload,
      }
    },
  },
})

export const register = (user) => async (dispatch) => {
  try {
    dispatch(loading())
    await authService.register(user)
    dispatch(
      loggedIn({
        user,
        message: "Registered correctly, please verify your email",
      })
    )
  } catch (error) {
    const message = error?.response?.data?.message
    dispatch(rejected(message))
  }
}

export const login = (userData) => async (dispatch) => {
  try {
    dispatch(loading())
    const user = await authService.login(userData)
    dispatch(
      loggedIn({
        user,
        message: "Logged in correctly",
      })
    )
  } catch (error) {
    const message = error?.response?.data?.message
    dispatch(rejected(message))
  }
}

export const { reset, logout, loading, loggedIn, rejected, validationError } =
  authSlice.actions
export default authSlice.reducer
