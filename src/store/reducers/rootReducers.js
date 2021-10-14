import {configureStore} from "@reduxjs/toolkit";
import {missionSlice} from "./store";

const store = configureStore({
  reducer: {
    mission: missionSlice.reducer
  },
})

export default store
