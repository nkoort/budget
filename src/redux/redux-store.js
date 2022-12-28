import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

export const store = configureStore({
  reducer: {},
  middleware: [thunk],
})

window.store = store

export default store
