import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Item from "./Item";

const Map = () => {
    const { 
        allData 
    } = useContext(GlobalContext);
    
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    <div className="px-6 md:px-10 py-4">
        <div className="mb-2 text-xl font-bold">Trending:</div>
        <div className="box">
            {allData.map((items) => <Item 
                key={items.id}
                items={items}
                SwiperSlide={SwiperSlide} 
            />)}
        </div>
    </div>
    </Swiper>
  )
}

export default Map