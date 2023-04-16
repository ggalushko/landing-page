import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import alertReducer from "./alertSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    alert: alertReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
