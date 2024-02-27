import { useState, createContext } from "react";

export const IncomeExpenceContext = createContext();

const IncomeExpenceProvider = ({ children }) => {
  const [records, setRecords] = useState([]);
  return (
    <IncomeExpenceContext.Provider value={{ records, setRecords }}>
      {children}
    </IncomeExpenceContext.Provider>
  );
};

export default IncomeExpenceProvider;
