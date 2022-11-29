import { createSlice } from "@reduxjs/toolkit"
import postService from "./postService"

const posts = null
const initialState = {
  posts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    ...initialState,
    posts,
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
    posted: (state, action) => {
      const newState = {
        ...state,
        isLoading: false,
        isSuccess: true,
        message: action.payload.message,
        post: action.payload.post,
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
  },
})

export const post = (post, token) => async (dispatch) => {
  try {
    dispatch(loading())
    await postService.post(post, token)
    dispatch(
      posted({
        post,
        message: "Registered correctly, please verify your email",
      })
    )
  } catch (error) {
    const message = error?.response?.data?.message
    dispatch(rejected(message))
  }
}

export const { reset, gettingPosts, posted, loading, rejected } =
  postSlice.actions
export default postSlice.reducer
