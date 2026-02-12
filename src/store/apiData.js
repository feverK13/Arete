import { createAsyncThunk } from '@reduxjs/toolkit'

const apiUrl = 'https://698a159ac04d974bc6a14c92.mockapi.io/api/ver1/users'

export const fetchUserData = createAsyncThunk('users/fetchUserData', async userId => {
  const responce = await fetch(`${apiUrl}/${userId}`)
  const userData = await responce.json()

  return userData
})
