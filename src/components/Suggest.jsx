import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const Suggest = () => {
    const { 
        allData,
        showAll,
        setShowAll 
    } = useContext(GlobalContext);

  return (
    <div className="px-6 md:px-10 py-4">
        <div className="flex items-center justify-between pr-6">
          <h3 className="mb-2 text-xl font-bold">For you:</h3>
          <p className="cursor-pointer text-sm" onClick={() => setShowAll(!showAll)}>{!showAll ? 'Show All' : 'Show Less'} {'>>'}</p>
        </div>
        <div className="box">
            Suggest
        </div>
    </div>
  )
}

export default Suggest
