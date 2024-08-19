import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaPlus } from "react-icons/fa";
import burna from '../images/burna1.jpg';
import rihanna from '../images/rihanna1.jpg';
import willsmith from '../images/willsmith.jpg';
import ronaldo from '../images/ronaldo.jpg';
import colepalmer from '../images/colepalmer.jpg';
import scarlet from '../images/scarlet.jpg';
import brainjotter from '../images/brainjotter.jpg';
import greenchart from '../images/chart-green.png';

const celebrities = [
  { name: 'Burna Boy', image: burna, earnings: '$74.34', change: '$28.07', growth: '$2.79', percentage: '+32.45%' },
  { name: 'Rihanna', image: rihanna, earnings: '$74.34', change: '$28.07', growth: '$2.79', percentage: '+32.45%' },
  { name: 'Will Smith', image: willsmith, earnings: '$74.34', change: '$28.07', growth: '$2.79', percentage: '+32.45%' },
  { name: 'Ronaldo', image: ronaldo, earnings: '$74.34', change: '$28.07', growth: '$2.79', percentage: '+32.45%' },
  { name: 'Cole Palmer', image: colepalmer, earnings: '$74.34', change: '$28.07', growth: '$2.79', percentage: '+32.45%' },
  { name: 'Scarlet Johannson', image: scarlet, earnings: '$74.34', change: '$28.07', growth: '$2.79', percentage: '+32.45%' },
  { name: 'Brain Jotter', image: brainjotter, earnings: '$74.34', change: '$28.07', growth: '$2.79', percentage: '+32.45%' },
];

const Celebrity = () => {
  return (
    <div className="container mx-auto">
      <div className="container my-4 mx-auto basis-1/4">
        <div className="header flex justify-between items-center py-2">
          <h5 className="font-medium">Asset</h5>
          <a href="#" className="text-emerald-400 font-medium">
            View All
          </a>
        </div>
        <div className="assets flex items-center gap-3">
          <div className="py-2 px-3 bg-white h-36 border border-emerald-500 rounded-2xl flex items-center justify-center">
            <FaPlus />
          </div>
          <Swiper
            className="container"
            spaceBetween={4}
            slidesPerView={2}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            modules={[Navigation, Pagination, Autoplay]}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 4 },
              768: { slidesPerView: 2, spaceBetween: 5 },
              1024: { slidesPerView: 4, spaceBetween: 6 },
              1280: { slidesPerView: 5, spaceBetween: 7 },
            }}
          >
            {celebrities.map((celeb, index) => (
              <SwiperSlide key={index} className="bg-white p-3 w-40 rounded-xl shadow">
                <div className="header flex gap-1">
                  <div className="image w-10 h-10 border rounded-full">
                    <img src={celeb.image} alt="" className="w-full h-full rounded-full object-cover border" />
                  </div>
                  <div className="celeb-name">
                    <h4 className="font-bold text-md m-0 leading-none">{celeb.name}</h4>
                    <div className="flex justify-between gap-4 items-start m-0 font-normal leading-none">
                      <h4 className="m-0 font-normal"><small>{celeb.earnings}</small></h4>
                      <p className="m-0 p-0 text-emerald-500 font-normal"><small>{celeb.change}</small></p>
                    </div>
                  </div>
                </div>
                <div className="chart-grade h-12 w-2/3 container ms-2">
                  <img src={greenchart} className="h-full w-full object-cover" alt="" />
                </div>
                <div className="celeb-money mt-2 flex flex-col">
                  <h3 className="font-semibold text-md m-0 leading-none">{celeb.growth}</h3>
                  <p className="text-emerald-500 font-medium m-0 leading-none"><small>{celeb.percentage}</small></p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <style jsx>{`
        .swiper-pagination {
          bottom: -6px !important;
        }
      `}</style>
    </div>
  );
};

export default Celebrity;
