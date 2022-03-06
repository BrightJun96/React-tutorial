// 스토어를 만드는 모듈
import { createStore } from "redux";

// DOM
const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// action name
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE ";
const DECREASE = "DECREASE";

// action creator
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// initial value
const initialState = {
  toggle: false,
  counter: 0,
};

// reducer
function reducer(state = initialState, action) {
  // 왜 reducer가 처음 호출될 때 undefined일까?  reducer는 initialstate와 연관성이 없기 때문에
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      };

    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };

    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
}

// create store
// createStore() 인자에 reducer를 담으면 dispatch에 액션값을 넣었을 때
// reducer가 실행된다. reducer에 action 인자가 할당되면
// dispatch는 reducer를 실행시킨다.ㅌ`

const store = createStore(reducer);

// render function

const render = () => {
  const state = store.getState(); // 현재 상태 불러오기
  console.log("render");
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }

  counter.innerText = state.counter; // innerText? 태그들의 속성을 인식함.
};

store.subscribe(render); // 스토어의 상태가 바뀔 때마다 render함수 호출

// dispatch
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};

btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
