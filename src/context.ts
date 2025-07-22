import React, { createContext } from "react";

interface StateContextType {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

export const StateContext = createContext<undefined | StateContextType>(undefined);
