import { createContext, useState } from "react";

export const globalContext = createContext();

function CustomProvider({ children }) {
  const [data, setdata] = useState('');
  return (
    <globalContext.Provider value={{ data, setdata }}>
      {children}
    </globalContext.Provider>
  );
}

export default CustomProvider;