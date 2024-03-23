import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const todosSlice = createSlice({
  name: 'todos',
  initialState: { items: [] },

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
  },
});

export const selectTodos = (state) => state.items

export const { addTodo } = todosSlice.actions;
const reducer = todosSlice.reducer;
export default reducer;
