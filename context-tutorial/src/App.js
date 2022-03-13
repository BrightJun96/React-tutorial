import React from "react";
import MyContextProvider from "./context/MyContext";
import Parent from "./component/Parent";
const App = () => {
  return (
    <MyContextProvider>
      <Parent />
    </MyContextProvider>
  );
};

export default App;
