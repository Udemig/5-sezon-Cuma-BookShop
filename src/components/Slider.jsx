// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Banner from "./Banner";

import sliderone from '../assets/sliderone.jpg'
import slidertwo from '../assets/slidertwo.jpg'
import sliderthree from '../assets/sliderthree.jpg'

const Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}

      style={{height:'300px'}}
    >
      <SwiperSlide>
        <Banner 
        btnTitle={'İncele'}
        title={'Öğrenciler İçin İndirim Kampanyası'}
        
        src={sliderone} />
      </SwiperSlide>
      <SwiperSlide>
        <Banner btnTitle={'İncele'} title={'Öğrenciler İçin İndirim Kampanyası'} src={slidertwo} />
      </SwiperSlide>
      <SwiperSlide>
        <Banner title={'En Yeni Kitablar '} btnTitle={'Keşfet'} src={sliderthree} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
