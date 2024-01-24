// using createReducer;

// interface stateType {
//   counter: number;
// }
// type stateType = {
//   count: number;
// };

// actions;
// export const increment = createAction("increment");
// export const decrement = createAction("decrement");

// const initialState: stateType = { count: 0 };
// const rootReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(increment, (state) => {
//       state.count += 1;
//     })
//     .addCase(decrement, (state) => {
//       state.count -= 1;
//     });
// });

//**************************   <<   using createSlice      >>     */
import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
export interface stateType {
  count: number;
}
const initialState: stateType = { count: 0 };
const rootSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByValue } = rootSlice.actions;

export const store = configureStore({
  reducer: rootSlice.reducer,
});
