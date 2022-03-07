// 액션 타입
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

// 액션 생성 함수
export const changeInput = (input) => {
  return { type: CHANGE_INPUT, input };
};

let id = 3;
export const insert = (text) => {
  return {
    type: INSERT,
    todo: {
      id: id++,
      text,
      done: false,
    },
  };
};

export const toggle = (id) => {
  return {
    type: TOGGLE,
    id,
  };
};

export const remove = (id) => {
  return {
    type: REMOVE,
    id,
  };
};

// initial state

const initialState = {
  input: "",
  todos: [
    { id: 1, text: "Learing React", done: true },
    { id: 2, text: "Learing Redux", done: false },
  ],
};

// reducer

function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return { ...state, input: action.input };

    case INSERT:
      return { ...state, todos: state.todos.concat(action.todo) };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo.id === action.todo ? { ...todo, done: !todo.done } : todo;
        }),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.id;
        }),
      };

    default:
      return state;
  }
}

export default todos;
