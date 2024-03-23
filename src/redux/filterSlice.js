import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },

  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const selectFilter = (state) => state.filter.filter;

export const { setFilter } = filterSlice.actions;
const reducer = filterSlice.reducer;
export default reducer;
