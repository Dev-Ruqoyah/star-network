import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const SwiperComponent = () => {
  return (
   <div className="container my-4 mx-auto basis-1/4">
    <div className="header flex justify-between items-center  py-2">
      <h5 className='font-medium'>Asset</h5>
      <a href="#" className='text-emerald-400 font-medium'>View All</a>
    </div>
     <Swiper className='container '
      spaceBetween={50}
      slidesPerView={8}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      modules={[Navigation, Pagination, Autoplay]}
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
  );
};

export default SwiperComponent;
