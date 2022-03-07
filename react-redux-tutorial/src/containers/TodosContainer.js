import React from "react";
import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { changeInput, insert, remove, toggle } from "../modules/todos";

const TodosContainer = ({
  input, //state
  todos, //state
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <TodoList
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};
// state는 counter state와 todos state가 combine되있다.
// mapStateToProps에서 state를 조회할 때 각 레듀서함수이름으로 접근해야 각 state에 접근할 수 있다.
const mapStateToProps = ({ todos }) => ({
  input: todos.input,
  todos: todos.todos,
});
const mapDispatchProps = { changeInput, insert, toggle, remove };
export default connect(mapStateToProps, mapDispatchProps)(TodosContainer);
