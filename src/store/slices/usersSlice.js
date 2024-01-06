import { createSlice } from "@reduxjs/toolkit"

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    activeUser: undefined,
  },
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload)
    },
    removeUser(state, action) {
      const updated = state.users.filter((data) => {
        return data.id !== action.payload
      })

      state.users = updated
    },
    setActiveUser(state, action) {
      state.activeUser = action.payload
    },
  },
})

export const { addUser, removeUser, setActiveUser } = usersSlice.actions
export const usersSliceReducer = usersSlice.reducer
