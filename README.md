# 본 저장소는 리액트 개념을 배우며 연습한 튜토리얼입니다.

## react-memo-tutorial

함수형 컴포넌트에서 불필요한 리렌더링을 방지할 수 있는 방법으로 React.memo를 활용하는 연습을 한 tutorial이다.

Parent라는 부모컴포넌트안에 여러개의 Child라는 자식컴포넌트가 있을 때에 Parent가 바뀌어도 Child가 변경사항이 없다면 리렌더링이 되지 않도록 하였다.

방법은 Child 컴포넌트를 React.memo로 감싸주는 것이다.

`React.memo(Child)`

이러한 방법으로 변경되지 않는 컴포넌트를 리렌더링해주지않음으로써 성능 향상을 할 수 있다
