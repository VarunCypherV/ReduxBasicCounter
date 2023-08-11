import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter"; // Make sure this path is correct

const store = configureStore({
  reducer: {
    counter: counterReducer, // Make sure this is correct
  },
});

export default store;
