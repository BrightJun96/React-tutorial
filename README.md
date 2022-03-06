# 본 저장소는 리액트 개념을 배우며 연습한 튜토리얼입니다.

## react-memo-tutorial

함수형 컴포넌트에서 불필요한 리렌더링을 방지할 수 있는 방법으로 React.memo를 활용하는 연습을 한 tutorial이다.

Parent라는 부모컴포넌트안에 여러개의 Child라는 자식컴포넌트가 있을 때에 Parent가 바뀌어도 Child가 변경사항이 없다면 리렌더링이 되지 않도록 하였다.

방법은 Child 컴포넌트를 React.memo로 감싸주는 것이다.

`React.memo(Child)`

이러한 방법으로 변경되지 않는 컴포넌트를 리렌더링해주지않음으로써 성능 향상을 할 수 있다

## authentication-tutorial

react router을 이용하여 Protected Route를 구현한 튜토리얼이다.

fakeauth를 만들어 auth state를 최상단 컴포넌트에 두어 여러 컴포넌트에서 authed 상태를 사용하였고 authed 상태에 따라 Protected Page를 보여주는 것에 대한 결정을 하였다.

또한 login하였을 때 protected Route로 이동하게 해주는 기능도 부가하였다.

주요 API

> useNavigate
> Navigate
> useLocation

## react-tictactoe-tutorial

react 공식 문서에 있는 tutorial을 연습하며 기존의 클래스형 컴포넌트를 함수형 컴포넌트로 imgration하였다.

주로 사용된 훅 => useState

## vanilla-redux

react없이 vanilla javascript에 redux를 적용한 tutorial이다.
redux의 기본적인 메커니즘과 사용법을 알 수 있다.

tech : parcel , redux

- npm i parcel
- npm i redux
