import { configureStore } from "@reduxjs/toolkit";
import { sortReducer } from "./slices/sortParameters";
import { carsReducer } from "./slices/cars";
import { filterReducer } from "./slices/filter";

const reducer = {
  cars: carsReducer,
  filter: filterReducer,
  sortParameters: sortReducer,
};

export const store = configureStore({
  reducer,
});
