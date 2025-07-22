import { SLIDES_DATA_REVIEW } from "../contants/index.js";

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
          400: {
            // Ini akan menjadi default untuk layar sangat kecil jika slidesPerView utama dimaksudkan untuk desktop
            slidesPerView: 1,
          },
          550: {
            // Ini akan menjadi default untuk layar sangat kecil jika slidesPerView utama dimaksudkan untuk desktop
            slidesPerView: 2,
          },

          // Ukuran besar (laptop besar / desktop)
          1024: {
            slidesPerView: 3, // Misalnya, ingin 4 slide di layar yang lebih besar
          },
        }}
        className="mySwiper"
      >
        {SLIDES_DATA_REVIEW.map((review, index) => (
          <SwiperSlide key={index} className="w-[250px] h-[110px] m-4">
            <div className=" bg-white shadow-2xl flex justify-center items-center ">
              <p className="text-[12px] m-4">{review.description}</p>
            </div>
            <div className="flex m-2">
              <img
                src={review.image}
                className="rounded-full"
                width="30px"
                height="30px"
              />
              <h3 className="font-bold italic text-[12px] m-2">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

const Reviews = () => {
  return (
    <section
      className="w-full flex justify-center bg-[#49e146] p-6"
      id="Review"
    >
      <div className="w-[100%] md:min-md:w-[80%] m-2">
        <div className="m-2">
          <h1 className="text-2xl lg:text-5xl md:text-4xl text-center font-bold">
            Read and Reviews, <br />
            ride with confidence.
          </h1>
          <p className="text-center">100/100 BantuUsahaKamu.com</p>
        </div>
        <div className="flex ">
          <div className="p-3 shadow-sm hidden md:block lg:block xl:block">
            <h1 className="text-8xl">"</h1>
            <h2 className="text-2xl">What our customers say about us</h2>
          </div>
          <Swipper />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
