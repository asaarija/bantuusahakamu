import { CLIENTS_LOGO } from "../contants/index.js";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function Swipper() {
  return (
    <>
      <Swiper
        watchSlidesProgress={true}
        breakpoints={{
          // Ukuran ekstra kecil (mobile portrait)
          300: {
            // Ini akan menjadi default untuk layar sangat kecil jika slidesPerView utama dimaksudkan untuk desktop
            slidesPerView: 3,
          },
          550: {
            // Ini akan menjadi default untuk layar sangat kecil jika slidesPerView utama dimaksudkan untuk desktop
            slidesPerView: 6,
          },
        }}
        className="mySwiper"
      >
        {CLIENTS_LOGO.map((client, index) => (
          <SwiperSlide key={index} className="w-[200px]  m-0">
            <a href="" className="m-10 hover:scale-200">
              <img
                src={client.logo}
                className="m-3"
                width="100px"
                height="100px"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

const Clients = () => {
  return (
    <section className="w-full flex justify-center bg-white">
      <div className="w-[90%] mx-10 my-5">
        <h1 className="text-5xl m-5">Our Clients</h1>
        <div className="m-4 flex">
          <div className="w-[50px] shadow-sm bg-gray-100"></div>
          <Swipper />
          <div className="w-[50px] shadow-sm bg-gray-100"></div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
