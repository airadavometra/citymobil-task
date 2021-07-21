import { createSlice } from "@reduxjs/toolkit";

interface State {
  key: string;
  isAscending: boolean;
}

const initialState: State = {
  key: "",
  isAscending: true,
};

const slice = createSlice({
  name: "sortParameters",
  initialState,
  reducers: {
    setKey: (state, { payload: newKey }) => {
      state.key = newKey;
      state.isAscending = true;
    },
    toggleDirection: (state) => {
      state.isAscending = !state.isAscending;
    },
  },
});

export const sortReducer = slice.reducer;
export const sortActions = slice.actions;
