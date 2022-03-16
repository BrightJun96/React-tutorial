// 액션 타입 선언
import * as api from "./../lib/api";
import { handleActions } from "redux-actions";
import creatRequestThunk from "./../lib/createRequestThunk";
// 한 요청당 세 개를 만들어야 한다.

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

// thunk 함수를 생성한다.
// thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치한다.

export const getPost = creatRequestThunk(GET_POST, api.getPost);

export const getUsers = creatRequestThunk(GET_USERS, api.getUsers);

// 초기 상태 선언
// 요청의 로딩 중 상태는 loading이라는 객체에서 관리한다.

const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: false,
  },
  post: null,
  users: null,
};

// Reducer
const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: { ...state.loading, GET_POST: false },
      post: action.payload,
    }),

    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      loading: { ...state.loading, GET_USERS: false },
      users: action.payload,
    }),
  },
  initialState
);

export default sample;
