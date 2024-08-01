import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Celebrity = () => {
  return (
    <>
      <div 
        
      className="container  mx-auto">
        <div className="container my-4 mx-auto basis-1/4">
          <div className="header flex justify-between items-center  py-2">
            <h5 className="font-medium">Asset</h5>
            <a href="#" className="text-emerald-400 font-medium">
              View All
            </a>
          </div>
          <Swiper
            className="container "
            spaceBetween={50}
            slidesPerView={8}
          
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            modules={[Navigation, Pagination, Autoplay]}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              // when window width is >= 1280px
              1280: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
  
          >
            <SwiperSlide>
              <img src="https://via.placeholder.com/600x300" alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://via.placeholder.com/600x300" alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://via.placeholder.com/600x300" alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://via.placeholder.com/600x300" alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://via.placeholder.com/600x300" alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://via.placeholder.com/600x300" alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://via.placeholder.com/600x300" alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://via.placeholder.com/600x300" alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://via.placeholder.com/600x300" alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://via.placeholder.com/600x300" alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://via.placeholder.com/600x300" alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://via.placeholder.com/600x300" alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://via.placeholder.com/600x300" alt="Slide 3" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Celebrity;
