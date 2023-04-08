import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpened: false,
    hideClass: "opacity-0 pointer-events-none",
  },
  reducers: {
    close(state) {
      state.isOpened = false;
      console.log(state.isOpened)

    },
    open(state) {
      state.isOpened = true;
      console.log(state.isOpened)
    },
  },
});

export const { close, open } = modalSlice.actions;
export default modalSlice.reducer;
