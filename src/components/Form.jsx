import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const Form = () => {
    const {
        userInput, 
        setUserInput, 
        setData,
        fetchData
    } = useContext(GlobalContext);    
    

  return (
    <div>
        <form onSubmit={fetchData}>
            <input 
              type="text" 
              className="outline-none text-black py-1 max-w-[400px] px-3 rounded-l-lg" 
              placeholder='Enter Meal' 
              value={userInput}
              onChange={(e) => {
                setUserInput(e.target.value.toLocaleLowerCase())
                setData(null)
              }}
            />

            <button type="submit" className="outline-none py-1 px-3 font-bold bg-darkBlue text-white rounded-r-lg">
               {">"}
            </button>
        </form>
    </div>
  )
}

export default Form