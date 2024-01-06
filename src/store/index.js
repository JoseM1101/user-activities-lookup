import { configureStore } from "@reduxjs/toolkit"
import {
  usersSliceReducer,
  addUser,
  removeUser,
  setActiveUser,
} from "./slices/usersSlice"
import { navigationSliceReducer, navigate } from "./slices/navigationSlice"

const store = configureStore({
  reducer: {
    users: usersSliceReducer,
    navigation: navigationSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export { store, addUser, removeUser, setActiveUser, navigate }
