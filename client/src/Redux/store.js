import { configureStore } from "@reduxjs/toolkit";
import transportSlice from "./Products/transportSlice";
export const store = configureStore({
  reducer: {
    transportSlice,
  },
});
