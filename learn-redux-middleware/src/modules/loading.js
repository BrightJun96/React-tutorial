import { handleActions, createAction } from "redux-actions";

const START_LOADING = "loading/START_LOADING";
const FINISH_LOADING = "loading/FINISH_LOADING";

export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType
);

export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType) => requestType
);

const initialState = {};

const loading = handleActions(
  {
    [startLoading]: (state, { payload }) => ({ ...state, [payload]: true }),
    [finishLoading]: (state, { payload }) => ({ ...state, [payload]: false }),
  },
  initialState
);

export default loading;
