import { useState, createContext } from "react";

export const AddRecordContext = createContext();

const AddRecordProvider = ({ children }) => {
  const [record, setRecord] = useState(false);

  return (
    <AddRecordContext.Provider value={{ record, setRecord }}>
      {children}
    </AddRecordContext.Provider>
  );
};
export default AddRecordProvider;
