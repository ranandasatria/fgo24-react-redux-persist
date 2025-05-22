import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: []
}

const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const id = state.data.length + 1
      state.data.push({
        id,
        todo: action.payload.todo,
        completed: false
      })
    },
    toggleTodo: (state, action) => {
      const index = action.payload
      state.data[index].completed = !state.data[index].completed
    },
    deleteTodo: (state, action) => {
      state.data = state.data.filter((_, index) => index !== action.payload)
    },
    editTodo: (state, action) => {
      const { index, todo } = action.payload
      state.data[index].todo = todo
    }
  }
})

export const { addTodo, toggleTodo, deleteTodo, editTodo } = users.actions
export default users.reducer