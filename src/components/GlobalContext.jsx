"use client"

import { createContext, useState } from "react";
import comida from './ComidaContext'

// Crear el contexto
export const GlobalContext = createContext();

// Crear el proveedor del contexto
export const GlobalContextProvider = ({ children }) => {
  const [saveFavoritos, setSaveFavoritos] = useState([]);
  const [getComida, setGetComida] = useState(comida);

  return (
    <GlobalContext.Provider value={{ saveFavoritos, setSaveFavoritos , getComida , setGetComida}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
