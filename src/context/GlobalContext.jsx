import { createContext, useContext, useEffect, useState } from "react";
import useTasks from "../hooks/useTasks";

export const GlobalContext = createContext();
const { VITE_API_URL } = import.meta.env;

export function GlobalProvider({ children }) {
    
    const taskData = useTasks();

    return (
        <GlobalContext.Provider value={{ ...taskData }}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobalContext() {
    return useContext(GlobalContext);
}

