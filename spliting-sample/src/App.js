import React, { useState, Suspense } from "react";
import loadable from "@loadable/component";
//const SplitMe = React.lazy(() => import("./SplitMe"));
const SplitMe = loadable(() => import("./SplitMe"), {
  fallback: <h1>Loading...</h1>,
});

const onMouseOver = () => {
  SplitMe.preload();
};
const App = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => setVisible(true);
  return (
    <div>
      <h1 onClick={onClick} onMouseOver={onMouseOver}>
        Hello, React!
      </h1>
      {visible && <SplitMe />}
    </div>
  );
};

export default App;
