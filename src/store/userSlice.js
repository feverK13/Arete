import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.currentUser = action.payload
    },
    logoutUser(state) {
      state.currentUser = null
    },
    updateStats(state, action) {
      if (state.currentUser) {
        state.currentUser.currentXp = action.payload.currentXp
        state.currentUser.currentLvl = action.payload.currentLvl
        state.currentUser.balance = action.payload.balance
      }
    },
  },
})

export const { setUser, logoutUser, updateStats } = userSlice.actions
export default userSlice.reducer
