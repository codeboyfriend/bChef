import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => { 
    const [userInput, setUserInput] = useState("");
    const [allData, setAllData] = useState([]);
    const [data, setData] = useState(null);
    const [isInputBlank, setIsInputBlank] = useState(false);
    const [isNotFound, setIsNotFound] = useState(false);
    const [showAll, setShowAll] = useState(false)

    const url = `/server/db.json`;
    const urls = `/server/allData.json`;
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

    const fetchEachData = () => {
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

    const fetchAllData = () => {
        fetch(`${urls}`)
          .then((response) => {
            if (!response.ok) {
              throw Error("Resource not found.");
            }
              return response.json();
          })      
          .then ((data) => {
            setAllData(data);
          })
      }

      useEffect(() => {
        fetchAllData();
      }, 
      // eslint-disable-next-line
      [])
      

    return (
        <GlobalContext.Provider value={{ 
            userInput,  
            setUserInput,
            data,
            allData,
            setData,
            fetchData,
            fetchEachData,
            isInputBlank,
            isNotFound,
            showAll,
            setShowAll
        }}>
            { children }
        </GlobalContext.Provider>
    )
}

export default GlobalContext;