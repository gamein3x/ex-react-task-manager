import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();
const { VITE_API_URL } = import.meta.env;

export function GlobalProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`${VITE_API_URL}/tasks`)
            .then(res => res.json())
            .then(data => {
                console.log("Tasks:", data);
                setTasks(data);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <GlobalContext.Provider value={{ tasks, setTasks }}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobalContext() {
    return useContext(GlobalContext);
}

