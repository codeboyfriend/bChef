import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const Item = ({
  items,
  SwiperSlide
}) => {
  const {
    fetchEachData,
    setUserInput
  } = useContext(GlobalContext);

  return (
    <div className="boxes max-w-[280px] bg-bgColor text-white" onClick={() => {
      setUserInput(items?.name)
      fetchEachData()
    }}>
      <div>
        <img className="w-[100%]" src={items?.cover} alt="" />
      </div>
      <div className="recipe text-sm md:text-xl p-2">{items?.name}</div>
    </div>
  )
}

export default Item