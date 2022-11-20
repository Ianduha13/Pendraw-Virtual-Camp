import {createSlice} from '@reduxjs/toolkit'
import authService from './authService'

const user = JSON.parse(localStorage.getItem('user'))

const initialState ={
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

export const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{
    reset: () =>{
      return { ...initialState }
    },
    loading: (state) => {
      return{
        ...state,
        isLoading: true
      }
    },
    loggedIn: (state, action) => {
      const newState = {
        ...state,
        isLoading : false,
        isSuccess : true,
        message: action.payload.message,
        user: action.payload.user
      }
      console.log({ newState });
      return newState
    },
    rejected: (state, action) => {
      return{
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload,
        user: null
      }
    }
  }
})

export const register = (user) => async dispatch => {
  try{
    dispatch(loading())
    await authService.register(user)
    dispatch(loggedIn({
      user,
      message: 'Registered correctly, please verify your email'
    }))
  } catch(error){
    const message = error?.response?.data?.message
    dispatch(rejected(message))
  }
}

export const login = (user) => async dispatch => {
  try{
    dispatch(loading())
    await authService.login(user)
    dispatch(loggedIn({
      user,
      message: 'Logged in correctly'
    }))
  } catch(error){
    const message = error?.response?.data?.message
    dispatch(rejected(message))
  }
}

export const { reset, loading, loggedIn, rejected } = authSlice.actions
export default authSlice.reducer
