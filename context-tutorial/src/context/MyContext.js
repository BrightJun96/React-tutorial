import React from "react";

export const MyContext = React.createContext();

const MyContextProvider = ({ children }) => {
  const name = "Jev";
  const height = 184;
  const weight = 82;

  return (
    <MyContext.Provider value={{ name, height, weight }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
