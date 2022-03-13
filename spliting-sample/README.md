# code spliting

## import function

- import를 함수형태로 사용하면 promise를 반환한다.
- default 값을 사용하기 위해서는 then메서드의 첫 번째 인자의 default메서드를 호출해야한다

```js
import("./notify").then((result) => result.default());
```

## React.lazy

- 컴포넌트를 렌더링하는 시점에서 비동기적으로 로딩할 수 잇게 해주는 유틸 함수

```js
//React.lazy함수 안에 메서드로 콜백함수를 넣는다.
//콜백함수의 반환값으로 import함수를 넣는다. 이때 then default code는 구성안해도된다.

const SplitMe = React.lazy(() => import("./splitMe"));
```

## Suspense

- 리액트 내장 컴포넌트로서 코드 스플리팅된 컴포넌트를 로딩하도록 발동시킬 수 있고,
  로딩이 끝나지 않았을 때 보여 줄 UI를 설정할 수도 있다.

- fallback : loading중일 때 보여줄 UI 설정

- <Suspense> 컴포넌트안에 lazy할 컴포넌트를 할당한다.

```js
import React, { Suspense } from "react";

<Suspense fallback={<div>loading...</div>}>
  <SplitMe />
</Suspense>;
```

## Loadable Components

Loadable Components는 code spliting을 편하게 하도록 도와주는 third-party library이다.

이 라이브러리의 이점은 서버 사이드 렌더링을 지원한다는 것이다.  
(React.lazy와 Suspense는 아직 서버 사이드 렌더링을 지원하지 않는다.)  
 (추후 18버전에서는 지원이 된다고 공식문서에 나와있음.)

> **서버 사이드 렌더링(SSR)이란?**
>
> - SSR이란 웹 서비스의 초기 로딩 속도 개선, 캐싱 및 검색 엔진 최적화를 가능하게 해주는 기술
>
> - 서버 사이드 렌더링을 사용하면 웹 서비스의 초기렌더링을 사용자의 브라우저가 아닌 서버족에서 처리한다.
>
> - 사용자는 서버에서 렌더링한 html 결과물을 받아와서 그대로 사용하기 대문에 초기 로딩 속도도 개선되고, 검색 엔진에서 크롤링할 때도 문제가 없다.

또한 렌더링하기 전에 필요할 때 스플리팅된 파일을 미리 불러올 수 있는 기능도 있다.

- 사용법은 React.lazy와 비슷하지만 Suspense를 사용하지 않아도 된다.

```js
import React, { useState, Suspense } from "react";
import loadable from "@loadable/component";
//const SplitMe = React.lazy(() => import("./SplitMe"));
const SplitMe = loadable(() => import("./SplitMe"), {
  fallback: <h1>Loading...</h1>,
});
const App = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => setVisible(true);
  return (
    <div>
      <h1 onClick={onClick}>Hello, React!</h1>
      {visible && <SplitMe />}
    </div>
  );
};

export default App;
```

- loadable함수에 콜백함수를 할당한다.

- 콜백 함수의 값으로 import함수를 할당한다.

- 로딩 중 다른 UI를 보여주고 싶다면 loadable의 두 번째 인자에 fallback을 요소로하는 객체를 할당한다.

### <lazyComponent>.preload

- 컴포넌트를 미리 불러오는 방법

```js
const onMouseOver = SplitMe.preload()

<h1 onMouseOver ={onMouseOver}> React</h1>
```

**Loadable Components는 미리 불러오는 기능 외에도 타임아웃, 로딩 UI 딜레이, 서버 사이드 렌더링 호환 등 다양한 기능을 제공한다.**

## End

서버 사이드 렌더링을 할 계획이 없다면 React.lazy와 Suspense로 구현하고,
계획이 있다면 Loadable Components를 사용해야 한다.

리액트 공식 문서에서도 서버사이드 렌더링을 할 경우 Loadable Components 라이브러리를 사용하도록 권장하고 있다.
