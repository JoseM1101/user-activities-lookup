import { createSlice } from "@reduxjs/toolkit"

const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    currentPath: window.location.pathname,
  },
  reducers: {
    navigate(state, action) {
      window.history.pushState({}, "", action.payload)
      state.currentPath = action.payload
    },
  },
})

export const { navigate } = navigationSlice.actions
export const navigationSliceReducer = navigationSlice.reducer
