import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./slices/cars";
import { filterReducer } from "./slices/filter";

const reducer = {
  cars: carsReducer,
  filter: filterReducer,
};

export const store = configureStore({
  reducer,
});
