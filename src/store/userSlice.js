import { createSlice } from '@reduxjs/toolkit'

import { act } from 'react'

const initialState = {
  name: 'Player 1',
  level: 1,
  experience: 0,
  balance: 10,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addXp: (state, action) => {
      state.currentXp += action.payload
    },
    levelUp: state => {
      state.currentLvl += 1
    },
    addBalance: (state, action) => {
      state.balance += action.payload
    },
    setName: (state, action) => {
      state.name = action.payload
    },
  },
})

export const { addXp, addBalance, levelUp, setName } = userSlice.actions
export default userSlice.reducer
