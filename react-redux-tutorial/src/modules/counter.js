import { createAction, handleActions } from "redux-actions";

// 액션 타입

const INCREASE = "counter/INCREASE"; // "모듈 이름/액션이름"
const DECREASE = "counter/DECREASE";

// 액션 생성 함수

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
/*
export const increase = () => {
  return {type:"INCRESE"}
}
export const decrease = () => {
  return {type:"DECRESE"}
}

*/

// 초기 상태
const initialState = {
  number: 0,
};

//reducer

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

/*
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return { number: state.number + 1 };

    case DECREASE: {
      return { number: state.number - 1 };
    }

    default:
      return state;
  }
}
*/
export default counter;
