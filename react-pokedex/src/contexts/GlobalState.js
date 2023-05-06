import React from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalState = ({ children }) => {
  
  const data = {};
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalState;
