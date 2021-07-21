import { CarInfo } from "../../types/carInfo";
import { createSlice } from "@reduxjs/toolkit";

interface State {
  cars: CarInfo[];
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
    sort: (state, { payload: sortFunction }) => {
      state.cars.sort(sortFunction);
    },
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
