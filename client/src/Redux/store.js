import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Products/productSlice";
export const store = configureStore({
  reducer: {
    productSlice,
  },
});
