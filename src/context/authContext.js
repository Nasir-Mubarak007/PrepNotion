import { View, Text } from "react-native";
import React, { createContext } from "react";

export const authcContext = createContext();

export const authProvider = ({ children }) => {
  return <authcContext.Provider>{children}</authcContext.Provider>;
};
