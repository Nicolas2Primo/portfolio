import React, { createContext, useState } from "react";

const DevModeContext = createContext();

export function DevModeProvider({ children }) {
  const [devMode, setDevMode] = useState(0);
  return (
    <DevModeContext.Provider value={{ devMode, setDevMode }}>
      {children}
    </DevModeContext.Provider>
  );
}

export default DevModeContext;
