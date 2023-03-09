import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Products/productSlice";
import userSlice from "./User/userSlice";
export const store = configureStore({
  reducer: {
    productSlice,
    userSlice,
  },
});
