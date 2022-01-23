import React from "react";
import Counter from "./components/Counter";
import ButtonCounter from "./components/ButtonCounter";
import InputCounter from "./components/InputCounter";
import HoverCounter from "./components/HoverCounter";

// prop으로 렌더링할 내용을 전달?
const App = () => {
  return (
    <div>
      <Counter
        render={(count, increment) => (
          <ButtonCounter count={count} increment={increment} />
        )}
      />

      <Counter
        render={(count, increment) => (
          <InputCounter count={count} increment={increment} />
        )}
      />

      <Counter
        render={(count, increment) => (
          <HoverCounter count={count} increment={increment} />
        )}
      />
    </div>
  );
};

export default App;
