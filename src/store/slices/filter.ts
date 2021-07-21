import { createSlice } from "@reduxjs/toolkit";

interface State {
  filter: string;
}

const initialState: State = {
  filter: "",
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, { payload: newFilter }) => {
      state.filter = newFilter;
    },
  },
});

export const filterReducer = slice.reducer;
export const filterActions = slice.actions;
