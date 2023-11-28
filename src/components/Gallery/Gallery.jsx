import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination, EffectCoverflow } from "swiper/modules";

import foto from "../../assets/fotos/3.jpg";
import foto1 from "../../assets/fotos/3.jpg";
import foto2 from "../../assets/fotos/3.jpg";
import foto3 from "../../assets/fotos/3.jpg";
import foto4 from "../../assets/fotos/3.jpg";
import foto5 from "../../assets/fotos/3.jpg";
import foto6 from "../../assets/fotos/3.jpg";
import foto7 from "../../assets/fotos/3.jpg";

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
  const [imageIndex, setImageIndex] = useState(foto);
  const [openModalImage, sertOpenModalImage] = useState(false);
  console.log("image index?", imageIndex);

  const handleSwipper = (index) => {
    console.log("index imagen?", index);
    sertOpenModalImage(true);
  };

  return (
    <div className="gallery">
      <Swiper
        onClick={(swiper) => handleSwipper(swiper.activeIndex)}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={4}
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
      {openModalImage === true && (
        <div className="modal">
          <div className="modal-content">
            <h3>Modal para ver la imagen seleccionada </h3>
            {/* aqui mostrar la foto correspondiente al index */}
          </div>
        </div>
      )}
    </div>
  );
}
