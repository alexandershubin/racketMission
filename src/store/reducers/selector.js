import { createSelector } from "reselect";

export const dataMission = (state) => state.mission;

export const getLoading = createSelector(dataMission, (data) => {
  return data?.loading;
});

