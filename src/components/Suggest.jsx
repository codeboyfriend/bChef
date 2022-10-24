import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import SItem from "./SItem";

const Suggest = () => {
    const { 
        sdata,
        sAll,
        setSAll 
    } = useContext(GlobalContext);

  return (
    <div className="px-6 md:px-10 py-4">
        <div className="flex items-center justify-between pr-6">
          <h3 className="mb-2 text-xl font-bold">For you:</h3>
          <p className="cursor-pointer text-sm" onClick={() => setSAll(!sAll)}>{!sAll ? 'Show All' : 'Show Less'} {'>>'}</p>
        </div>
        <div className="box">
        {sdata.slice(!sAll && (1, -4))
            .map((items) => <SItem 
              key={items.id}
              items={items}
            />)}
        </div>
    </div>
  )
}

export default Suggest
