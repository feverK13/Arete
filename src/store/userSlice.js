import { createSlice } from '@reduxjs/toolkit'

import { fetchUserData } from './apiData'

const initialState = {
  name: 'Player 1',
  currentLvl: 1,
  currentXp: 0,
  balance: 0,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addXp: state => {
      state.currentXp += 10
    },
    levelUp: state => {
      state.currentLvl += 1
      state.currentXp = 0
    },
    addBalance: (state, action) => {
      state.balance += action.payload
    },
    setName: (state, action) => {
      state.name = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.name = action.payload.name
      state.currentLvl = action.payload.currentLvl
      state.currentXp = action.payload.currentXp
      state.balance = action.payload.balance
    })
  },
})

export const { addXp, addBalance, levelUp, setName } = userSlice.actions
export default userSlice.reducer
