import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    isVisible: false,
  },
  reducers: {
    showAlert(state) {
      state.isVisible = true;
    },
    hideAlert(state) {
      state.isVisible = false;
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;
