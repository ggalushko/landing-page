import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpened: false,
    hideClass: "opacity-0 pointer-events-none",
    chosenPackage: "",
    chosenPrice: 0,
  },
  reducers: {
    closeModal(state) {
      state.isOpened = false;
    },
    openModal(state) {
      state.isOpened = true;
    },
    setPrice(state, action) {
      state.chosenPrice = action.payload.price;
    },
    setPackage(state, action) {
      state.chosenPackage = action.payload.name;
    },
  },
});

export const { closeModal, openModal, setPrice, setPackage } =
  modalSlice.actions;
export default modalSlice.reducer;
