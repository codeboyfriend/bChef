import { createContext, useState } from "react";

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => { 
    const [userInput, setUserInput] = useState("");
    const [data, setData] = useState(null);
    const [isInputBlank, setIsInputBlank] = useState(false);
    const [isNotFound, setIsNotFound] = useState(false);

    const url = `/server/db.json`;
    const fetchData = (e) => {
      e.preventDefault();

      fetch(`${url}`)
        .then((response) => {
            if (!response.ok) {
            throw Error("Resource not found.");
            }
            return response.json();
        })      
        .then ((data) => {
            if (userInput.trim().length === 0) {
                setIsInputBlank(true);
                setIsNotFound(false);
            } else if (!(userInput in data)) {
                setIsNotFound(true);
                setIsInputBlank(false);
            } else {
                setData(data);
                setIsInputBlank(false);
                setIsNotFound(false);        
            }
        })
    }

    return (
        <GlobalContext.Provider value={{ 
            userInput,  
            setUserInput,
            data,
            setData,
            fetchData,
            isInputBlank,
            isNotFound
        }}>
            { children }
        </GlobalContext.Provider>
    )
}

export default GlobalContext;