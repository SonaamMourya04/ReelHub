import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./userSlice";
import moviesReducer from "./moviesSlices"

const appStore = configureStore(
    {
        reducer:{
            user:useReducer,
            movies:moviesReducer,

        },
    }
);
export default appStore;