import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const todosSlice = createSlice({
  name: 'todos',
  initialState: { items: [], currentTodo: null, isEdit: false },

  reducers: {
    addTodo: {
      reducer: (state, { payload }) => {
        state.items.push(payload);
      },
      prepare: (value) => {
        const id = nanoid();
        return {
          payload: { ...value, id },
        };
      },
    },
    deleteTodo: (state, { payload }) => {
      const index = state.items.findIndex((item) => item.id === payload);
      state.items.splice(index, 1);
    },
    setIsEdit: (state, { payload }) => {
      state.isEdit = payload;
    },
    setCurrentTodo: (state, { payload }) => {
      state.currentTodo = payload;
    },
    editTodo: (state, { payload }) => {
      const index = state.items.findIndex((item) => item.id === payload.id);
      state.items.splice(index, 1, payload);
    },
  },
});

export const selectTodos = (state) => state.todos.items;
export const selectIsEdit = (state) => state.todos.isEdit;
export const selectCurrentTodo = (state) => state.todos.currentTodo;

export const { addTodo, deleteTodo, setIsEdit, setCurrentTodo, editTodo } =
  todosSlice.actions;
const reducer = todosSlice.reducer;
export default reducer;
