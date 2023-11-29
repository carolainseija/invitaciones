import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination, EffectCoverflow } from "swiper/modules";

import foto from "../../assets/0.jpg";
import foto1 from "../../assets/1.jpg";
import foto2 from "../../assets/2.jpg";
import foto3 from "../../assets/3.jpg";
import foto4 from "../../assets/4.jpg";
import foto5 from "../../assets/5.jpg";
import foto6 from "../../assets/6.jpg";
import foto7 from "../../assets/7.jpg";

import "./styles.css";

const imagesSwiper = [
  {
    id: 1,
    src: "../../assets/imagen.jpg",
    alt: "imagen 001",
  },
  {
    id: 2,
    src: "../../assets/imagen.jpg",
  },
  {
    id: 3,
    src: "../../assets/imagen.jpg",
  },
  {
    id: 4,
    src: "../../assets/imagen.jpg",
  },
  {
    id: 5,
    src: "../../assets/fotos/imagen.jpg",
  },
];

export default function Gallery() {

  return (
    <div className="gallery">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={foto} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={foto1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={foto2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={foto3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={foto4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={foto5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={foto6} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
