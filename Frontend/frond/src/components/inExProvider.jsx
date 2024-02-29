import { useState, createContext } from "react";

export const inExContext = createContext();

export const InExProvider = ({ children }) => {
  const [inc, setInc] = useState(0);
  return (
    <inExContext.Provider value={{ inc, setInc }}>
      {children}
    </inExContext.Provider>
  );
};
