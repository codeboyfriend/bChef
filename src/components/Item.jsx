import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const Item = ({
  items
}) => {
  const {
    fetchEachData,
    fetchData,
    setUserInput
  } = useContext(GlobalContext);  

  // console.log(userInput)
  return (
    <div className="box max-w-[300px] bg-bgColor text-white" onClick={() => {
      setUserInput(items?.name)
      fetchEachData()
    }}>
      <div>
        <img className="w-[100%]" src={items?.cover} alt="" />
      </div>
      <div className="recipe text-xl p-2">{items?.name}</div>
    </div>
  )
}

export default Item