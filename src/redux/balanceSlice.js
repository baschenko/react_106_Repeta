import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "balance",
  initialState: { value: 500 },
  reducers: {
    deposit: (state, action) => {
      state.value += action.payload;
    },
    withdraw: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { deposit, withdraw } = slice.actions;

export default slice.reducer;
