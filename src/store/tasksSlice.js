import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { fetchTasks, updateTask } from './apiData'

export const getTasksThunk = createAsyncThunk('tasks/getTasks', async userId => {
  const tasks = await fetchTasks(userId)
  return tasks
})

export const editTaskThunk = createAsyncThunk(
  'tasks/editTask',
  async ({ userId, taskId, updatedTaskData }) => {
    const updatedTask = await updateTask(userId, taskId, updatedTaskData)
    return updatedTask
  }
)

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {
    // звичайні події якщо треба
  },
  extraReducers: builder => {
    builder.addCase(getTasksThunk.fulfilled, (state, action) => {
      state.items = action.payload
    })
    builder.addCase(editTaskThunk.fulfilled, (state, action) => {
      const index = state.items.findIndex(task => task.id === action.payload.id)
      if (index !== -1) {
        state.items[index] = action.payload
      }
    })
  },
})

export default tasksSlice.reducer
