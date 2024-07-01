import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import peopleInfoDataReducer from "./people";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    people: peopleInfoDataReducer,
  },
});
