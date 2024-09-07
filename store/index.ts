import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 18,
    username: "chhiring",
  },
  reducers: {
    increaseCount: (state) => {
      state.value += 10;
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
