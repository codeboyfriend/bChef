import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import Item from "./Item";

const Map = () => {
    const { 
        allData 
    } = useContext(GlobalContext);

  return (
    <div className="px-6 md:px-10 py-4">
        <div className="mb-2 text-xl font-bold">Trending:</div>
        <div className="flex flex-col md:flex-row space-x-3">
            {allData.map((items) => <Item 
                key={items.id}
                items={items} 
            />)}
        </div>
    </div>
  )
}

export default Map