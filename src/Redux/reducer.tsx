import { combineReducers, configureStore } from '@reduxjs/toolkit';

import Products from "./Products";


export const rootReducer = combineReducers({
  products:Products
})
type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>


