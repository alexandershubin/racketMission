import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  mission: [],
  loading: true,
};

const apiUrl = 'https://api.spacexdata.com/v4/launches/';

export const missionSlice = createSlice({
  name: "mission",
  initialState,
  reducers: {
    getMission: (state, action) => {
      state.mission = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const selectMission = (state) => state.mission.mission; // получаю массив из стора прокидываю его в компонент
export const {getMission, setLoading} = missionSlice.actions;

export const fetchMission = () => async (dispatch) => {
  try {
    const {data} = await axios.get(apiUrl);
    dispatch(getMission(data));
    dispatch(setLoading(false));
  } catch (error) {
    console.error(error);
    dispatch(setLoading(true));
  }
};

