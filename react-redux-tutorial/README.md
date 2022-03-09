# react with redux tutorial

## Overview

react와 함께 redux를 사용하는 기본적인 사용방법을 구현한 튜토리얼이다.

리덕스의 주된 메커니즘은 dispatch를 실행하면 state와 action을 가진 reducer가 실행된다.

<br>

## npm install

**redux 라이브러리와 react-redux 라이브러리를 설치해준다.**

- npm add redux
- npm add react-redux

**효율적인 액션 생성 함수를 위한 라이브러리**

- npm add react-actions

**객체 불변성 유지를 위한 라이브러리**

- npm add immer
  <br><br>

## Component structure

> 리액트 프로젝트에서 리덕스를 사용할 때 가장 많이 사용하는 패턴은 presentational component와 container component를 분리하는 것이다.

**presentational component**

주로 상태 관리가 이루어지지 않고, 그저 props를 받아 와서 화면에 UI를 보여 주기만 하는 컴포넌트

- presentational component와 관련된 컴포넌트는 `src/components`에 저장

**container component**

리덕스와 연동되어 있는 컴포넌트로, 리덕스로부터 상태를 받아오기도 하고
리덕스 스토어에 액션을 디스패치하기도 한다.

- container component와 관련된 컴포넌트는 `src/containers`에 저장
  <br><br>

## File structure(Ducks pattern)

**src/components**

- presentatial component

**src/containers**

- container component

**src/modules**

- action type
- create action
- reducer
- combine reducer(modules/index.js)

<br>

## API

### **Combine reducer**

`import { combineReducer } from "redux";`

리덕스에 reducer는 하나만 적용해야하기 때문에 여러 reducer로 구분해놨다면 통합시켜줘야한다.

이 작업은 리덕스에서 제공하는 combineReducers라는 유틸 함수를 사용하면 쉽게 처리할 수 있다.

```js
import { combineReducer } from "redux";

const rootReducer = combineReducer({ counter, todos });
```

<br>

### **createStore**

`import { createStore } from "redux";`

```js
import ReactDOM from "react-dom";
import { createStore } from "redux";

const store = createStore(reducer);
```

store를 생성하여 인자에 reducer를 할당함으로써 redux state,dispatch를 사용할 수 있게 해준다.

<br>

### **Provider**

`import { Provider } from "react-redux";`

```js
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

react- redux의 라이브러리의 Provider 함수를 사용하면 컴포넌트들이 redux state를 실시간으로 구독하게 해준다.

Provider prop으로 store를 전달해준다.

그리고 최상단 컴포넌트인 APP컴포넌트를 감싸주면 모든 컴포넌트가 redux state를 사용할 수 있도록 한다.

<br>

### **connect**

> Connect redux to Component

`import {connect} from "react-redux"`

컴포넌트를 리덕스와 연동하려면 react-redux에서 제공하는 connect 함수를 사용해야 한다.

```js
import {connect} from "react-redux"

connect(mapStateToProps, mapDispatchToProps)(Component to link);
```

connect 함수를 호출하고 나면 또 다른 함수를 반환한다  
반환된 함수에 컴포넌트를 파라미터로 넣어 주면 리덕스와 연동된 컴포넌트가 만들어진다.

```js
const makeContainer = connect(mapStateToProps, mapDispatchToProps)
makeContainer(target Component)
```

<br>

**mapStateToProps**

```js
const mapStateToProps = (state) => {
  number: state.counter.number; //state.reducerName.value
};
```

- 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
  <br><br>

**mapDispatchToProps**

```js
const mapDispatchToProps = (dispatch) => {};
```

- 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수

mapStateToProps,mapDispatchToProps에서 반환하는 객체 내부의 값들은 컴포넌트의 props로 전달된다.

mapStateToProps는 state를 파라미터로 받아 오며, 이 값은 현재 스토어가 지니고 있는 상태를 가리킨다.

mapDispatchToProps의 경우 store의 내장 함수 dispatch를 파라미터로 받아온다.
<br><br>

**dispatch를 전달하는 세 가지 방법**

```js
import { increase, decrease } from "../modules/counter";

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => {
      return dispatch(increase());
    },
    decrease: () => {
      return dispatch(decrease());
    },
  };
};
```

```js
import { increase, decrease } from "../modules/counter";
import { bindActionCreators } from "redux";

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({increase,decrease},dispatch)
```

```js
import { increase, decrease } from "../modules/counter";

const mapDispatchToProps = { increase, decrease };
```

> Note  
> connect 함수를 사용하여 컨테이너 컴포넌트를 만들었을 경우, 해당 컨테이너 컴포넌트의 부모 컴포넌트가 리렌더링될 때 해당 컨테이너 컴포넌트의 props가 바뀌지 않았다면 리렌더링이 자동으로 방지되어 성능이 최적화된다.

<br><br>

## Note

- redux와 react-redux 라이브러리를 함께 사용해줘야한다.

- store에 reducer를 저장함으로써 state와 dispatch를 사용할 수 있다.

- react에서 redux를 사용할 때는 store 인스턴스를 직접 사용하다기보단 주로 react-redux 라이브러리의 connect함수와 Provider를 사용한다.

  - Provider는 redux state 변경이 될 때마다 state를 사용하는 컴포넌트가 리렌더링되게 해준다. 즉, store,subscribe기능을 해준다.
  - connect는 컴포넌트가 redux state와 dispatch를 사용하게 해준다. store.dispatch(),store.getState() 기능을 해준다.

> vanilla js에서 state는 가져오기 위해서는 store.getState()를 통해 가져와야했고 dispatch를 사용하기 위해서는 store.dispatch로 가져와야했으며
> render함수를 상태변경때마다 호출하기 위하여
> store.subscribe(render)를 해줬다.

<br><br>

## Library

### **redux-actions**

`npm i redux-actions`

redux-actions를 사용하면 액션 생성함수를 더 짧은 코드로 작성할 수 있다.
리듀서를 작성할 때도 switch/case 문이 아닌 handleActions라는 함수를 사용하여 각 액션마다 업데이트 함수를 설정하는 형식으로 작성해 줄 수 있다.

**`Before`**

```js
import { createAction } from "redux-actions";

// 액션 타입

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성 함수

export const increase = () => {
  return { type: "INCRESE" };
};
export const decrease = () => {
  return { type: "DECRESE" };
};
```

**`After`**

```js
import { createAction } from "redux-actions";

// 액션 타입

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
```

createAction이라는 함수를 불러와 액션타입을 인자로 넣어주면 된다.

**리듀서** 또한 간단하고 가독성 높게 작성할 수 있다.

`import {handleActions} from "redux-actions"`

**`Before`**

```js
const initialState = {
  number: 0,
};

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
```

**`After`**

```js
const initialState = {
  number: 0,
};

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);
```

<br>

### **immer**

객체의 구조가 복잡해지거나 객체로 이루어진 배열을 다룰 경우, immer를 사용하면 훨씬 편리하게 상태를 관리할 수 있다.

**`Before`**

```js
// reducer

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
    [INSERT]: (state, { payload: todo }) => ({
      ...state,
      todos: state.todos.concat(todo),
    }),

    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.map(todo => todo.id===id?{...todo,!todo.done}:todo),
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    }),
  },
  initialState
);
```

**`After`**

```js
// reducer

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),

    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState
);
```

<br><br>

## redux hook

### **useSelector**

useSelector Hook을 사용하면 connect 함수를 사용하지 않고도 리덕스의 상태를 조회할 수 있다.

**`Before`**

```js
const mapStateToProps = (state) => ({ number: state.counter.number });
const mapDispatchToProps = { increase, decrease };

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
```

**`After`**

```js
const number = useSelector((state) => state.counter.number);
```

> Note  
> useSelector를 사용하여 리덕스 상태를 조회했을 때는 최적화 작업(부모 컴포넌트가 리렌더링됬을 때, 컴포넌트 props가 바뀌지 않으면 리렌더링되지 않는 것)이 자동으로 이루어지지 않아 React.memo로 최적화해줘야한다.

<br>

### **useDispatch**

useDispatch는 컴포넌트 내부에서 스토어의 내장 함수 dispatch를 사용할 수 있게 해준다.

**`Before`**

```js
const mapStateToProps = (state) => ({ number: state.counter.number });
const mapDispatchToProps = { increase, decrease };

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
```

**`After`**

```js
const dispatch = useDispatch();
return (
  <div>
    <Counter
      number={number}
      onIncrease={() => dispatch(increase())}
      onDecrease={() => dispatch(decrease())}
    />
  </div>
);
```

## Reference

**리액트를 다루는 기술 17장**

**리덕스를 사용하여 리액트 애플리케이션 상태 관리하기**
