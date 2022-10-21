import { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import Item from "./Item";

const Map = () => {
    const { 
        allData 
    } = useContext(GlobalContext);
    const [showAll, setShowAll] = useState(false)
    
  return (
    <div className="px-6 md:px-10 py-4">
        <div className="flex items-center justify-between pr-6">
          <h3 className="mb-2 text-xl font-bold">Trending:</h3>
          <p className="cursor-pointer text-sm" onClick={() => setShowAll(!showAll)}>{!showAll ? 'Show All' : 'Show Less'} {'>>'}</p>
        </div>
        <div className="box">
            {allData.slice(!showAll && (1, -4))
            .map((items) => <Item 
              key={items.id}
              items={items}
            />)}
        </div>
    </div>
  )
}

export default Map