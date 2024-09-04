import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    username: 'chhiring'
  },
  reducers: {
    increaseCount: (state) => {
      state.value += 1;
    },
    decreaseCount: (state) => {
      state.value -= 1;
    },
  },
});

export const { increaseCount, decreaseCount } = counterSlice.actions;

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
