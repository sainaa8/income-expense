import { useState, createContext } from "react";

export const mapdataContext = createContext();
export const MapDataProvider = ({ children }) => {
  const [mapdata, setMapdata] = useState();
  return (
    <mapdataContext.Provider value={{ mapdata, setMapdata }}>
      {children}
    </mapdataContext.Provider>
  );
};
