import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slice/UserSlice.js";


const store= configureStore({
  reducer:{
    workers:userSlice
  }
})

export default store;