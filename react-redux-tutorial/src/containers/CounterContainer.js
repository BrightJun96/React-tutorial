import React, { useCallback } from "react";
import Counter from "../components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../modules/counter";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number); // store의 state를 가져옴
  const dispatch = useDispatch(); // store의 dispatch를 가져온다.

  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <div>
      <Counter
        number={number}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </div>
  );
};

export default CounterContainer;
/*
const mapStateToProps = (state) => ({ number: state.counter.number });
const mapDispatchToProps = { increase, decrease };

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
*/
