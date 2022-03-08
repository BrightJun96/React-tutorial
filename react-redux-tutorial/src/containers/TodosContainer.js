import React, { useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import TodoList from "../components/TodoList";
import useActions from "../lib/useActions";
import { changeInput, insert, remove, toggle } from "../modules/todos";

const TodosContainer = () => {
  // state
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));

  // dispatch
  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    []
  );
  /*
  const dispatch = useDispatch();

  const onChangeInput = useCallback(
    (input) => dispatch(changeInput(input)),
    [dispatch]
  );
  const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
*/
  return (
    <TodoList
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default TodosContainer;
// state는 counter state와 todos state가 combine되있다.
// mapStateToProps에서 state를 조회할 때 각 레듀서함수이름으로 접근해야 각 state에 접근할 수 있다.

/*
const mapStateToProps = ( { todos } ) => ( {
  input: todos.input,
  todos: todos.todos,
});
const mapDispatchProps = { changeInput, insert, toggle, remove };
export default connect(mapStateToProps, mapDispatchProps)(TodosContainer);
*/
