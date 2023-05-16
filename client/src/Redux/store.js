import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Products/productSlice";
import userSlice from "./User/userSlice";
import navigationSlice from "./Navigation/navigationSlice";
const store = configureStore({
  reducer: {
    productSlice,
    userSlice,
    navigationSlice,
  },
});

export default store;
