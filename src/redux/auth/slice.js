import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: null,
  profile: {},
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMe(state, action) {
      state.id = action?.payload?.uid
    },
    setAuth(state, action) {
      state.profile = action.payload
    },
    logout(state) {
      state.profile = {}
      state.id = '1'
    },
    setError(state, action) {
      state.error = action.payload
    },
    setUrl(state, action) {
      state.profile.photoURL = action.payload
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(logOut.fulfilled, (state, action) => {
  //         state.id = '1'
  //       })

  //       .addCase(logIn.fulfilled, (state, action) => {
  //         state.id = action?.payload[0]?.uid
  //       })

  //       .addCase(getProfile.fulfilled, (state, action) => {
  //         state.profile = action.payload
  //       })
  //   },
})

export const { setMe, setAuth, logout, setError, setUrl } = authSlice.actions

export default authSlice.reducer
