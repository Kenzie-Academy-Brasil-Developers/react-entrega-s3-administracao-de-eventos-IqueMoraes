import { createContext, useContext, useState } from "react";

const InfoDetailsContext = createContext();

export const InfoDetailsProvider = ({ children }) => {
  const [infoDetails, setInfoDetails] = useState("");

  return (
    <InfoDetailsContext.Provider value={{ infoDetails, setInfoDetails }}>
      {children}
    </InfoDetailsContext.Provider>
  );
};

export const useInfoDetails = () => useContext(InfoDetailsContext);
