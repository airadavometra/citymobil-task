import { Car } from "../../types/car";
import { createSlice } from "@reduxjs/toolkit";

interface State {
  cars: Car[];
  tariffs: string[];
}

const initialState: State = {
  cars: [],
  tariffs: [],
};

const slice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    addCars: (state, { payload: newCars }) => {
      state.cars.push(...newCars);
    },
    addTafiffs: (state, { payload: newTariffs }) => {
      state.tariffs.push(...newTariffs);
    },
  },
});

export const carsReducer = slice.reducer;
export const carsActions = slice.actions;
