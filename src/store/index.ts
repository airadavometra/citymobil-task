import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./slices/cars";

const reducer = {
  cars: carsReducer,
};

export const store = configureStore({
  reducer,
});
