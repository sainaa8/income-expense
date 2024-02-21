import { useState, createContext } from "react";

export const AddCatigoryContext = createContext();

const AddCatigoryProvider = ({ children }) => {
  const [addCati, setAddCati] = useState(true);
  return (
    <AddCatigoryContext.Provider value={{ addCati, setAddCati }}>
      {children}
    </AddCatigoryContext.Provider>
  );
};
export default AddCatigoryProvider