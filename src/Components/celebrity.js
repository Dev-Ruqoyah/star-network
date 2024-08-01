import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaPlus } from "react-icons/fa";
import burna from '../images/burna1.jpg'
import rihanna from '../images/rihanna1.jpg'
import willsmith from '../images/willsmith.jpg'
import ronaldo from '../images/ronaldo.jpg'
import colepalmer from '../images/colepalmer.jpg';
import scarlet from '../images/scarlet.jpg';
import brainjotter from '../images/brainjotter.jpg'
import greenchart from '../images/chart-green.png'
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
          <div className="assets flex items-center gap-3">
            <div className="py-2 px-3 bg-white h-36 border border-emerald-500 rounded-2xl flex items-center justify-center ">
              <FaPlus/>
            </div>
          <Swiper
            className="container "
            spaceBetween={5}
            slidesPerView={6}
          
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
            {/* CELEBRITY ONE */}
            <SwiperSlide className="bg-white p-3 w-40 rounded-xl shadow">
              <div className="header flex gap-1">
                <div className="image w-10 h-10 border rounded-full">
                  <img src={burna} alt="" className="w-full h-full rounded-full object-cover border"  />
                </div>
                <div className="celeb-name">
                  <h4 className="font-bold text-md m-0 leading-none">Burna Boy</h4>
                  <div className="flex justify-between gap-4 items-start m-0  font-normal leading-none">
                    <h4 className="m-0 font-normal"><small>$74.34</small></h4>
                    <p className="m-0 p-0 text-emerald-500 font-normal"><small>$28.07</small></p>
                  </div>
                </div>
              </div>
              <div className="chart-grade h-12  w-2/3 container ms-2">
                <img src={greenchart} className="h-full w-full object-cover" alt="" />
              </div>
              <div className="celeb-money mt-2 flex flex-col">
                  <h3 className="font-semibold text-md m-0 leading-none">
                    $2.79
                  </h3>
                  <p className="text-emerald-500 font-medium m-0 leading-none"><small>+32.45%</small></p>
              </div>
            </SwiperSlide>
             {/* CELEBRITY TWO */}
            <SwiperSlide className="bg-white p-3 w-40 rounded-xl shadow">
              <div className="header flex gap-1">
                <div className="image w-10 h-10 border rounded-full">
                  <img src={rihanna} alt="" className="w-full h-full rounded-full object-cover border"  />
                </div>
                <div className="celeb-name">
                  <h4 className="font-bold text-md m-0 leading-none">Rihanna</h4>
                  <div className="flex justify-between gap-4 items-start m-0  font-normal leading-none">
                    <h4 className="m-0 font-normal"><small>$74.34</small></h4>
                    <p className="m-0 p-0 text-emerald-500 font-normal"><small>$28.07</small></p>
                  </div>
                </div>
              </div>
              <div className="chart-grade h-12  w-2/3 container ms-2">
                <img src={greenchart} className="h-full w-full object-cover" alt="" />
              </div>
              <div className="celeb-money mt-2 flex flex-col">
                  <h3 className="font-semibold text-md m-0 leading-none">
                    $2.79
                  </h3>
                  <p className="text-emerald-500 font-medium m-0 leading-none"><small>+32.45%</small></p>
              </div>
            </SwiperSlide>
             {/* CELEBRITY THREE */}
            <SwiperSlide className="bg-white p-3 w-40 rounded-xl shadow">
              <div className="header flex gap-1">
                <div className="image w-10 h-10 border rounded-full">
                  <img src={willsmith} alt="" className="w-full h-full rounded-full object-cover border"  />
                </div>
                <div className="celeb-name">
                  <h4 className="font-bold text-md m-0 leading-none">Will Smith</h4>
                  <div className="flex justify-between gap-4 items-start m-0  font-normal leading-none">
                    <h4 className="m-0 font-normal"><small>$74.34</small></h4>
                    <p className="m-0 p-0 text-emerald-500 font-normal"><small>$28.07</small></p>
                  </div>
                </div>
              </div>
              <div className="chart-grade h-12  w-2/3 container ms-2">
                <img src={greenchart} className="h-full w-full object-cover" alt="" />
              </div>
              <div className="celeb-money mt-2 flex flex-col">
                  <h3 className="font-semibold text-md m-0 leading-none">
                    $2.79
                  </h3>
                  <p className="text-emerald-500 font-medium m-0 leading-none"><small>+32.45%</small></p>
              </div>
            </SwiperSlide>
             {/* CELEBRITY FOUR */}
             <SwiperSlide className="bg-white p-3 w-40 rounded-xl shadow">
              <div className="header flex gap-1">
                <div className="image w-10 h-10 border rounded-full">
                  <img src={ronaldo} alt="" className="w-full h-full rounded-full object-cover border"  />
                </div>
                <div className="celeb-name">
                  <h4 className="font-bold text-md m-0 leading-none">Ronaldo</h4>
                  <div className="flex justify-between gap-4 items-start m-0  font-normal leading-none">
                    <h4 className="m-0 font-normal"><small>$74.34</small></h4>
                    <p className="m-0 p-0 text-emerald-500 font-normal"><small>$28.07</small></p>
                  </div>
                </div>
              </div>
              <div className="chart-grade h-12  w-2/3 container ms-2">
                <img src={greenchart} className="h-full w-full object-cover" alt="" />
              </div>
              <div className="celeb-money mt-2 flex flex-col">
                  <h3 className="font-semibold text-md m-0 leading-none">
                    $2.79
                  </h3>
                  <p className="text-emerald-500 font-medium m-0 leading-none"><small>+32.45%</small></p>
              </div>
            </SwiperSlide>
                {/* CELEBRITY FIVE */}
            <SwiperSlide className="bg-white p-3 w-40 rounded-xl shadow">
              <div className="header flex gap-1">
                <div className="image w-10 h-10 border rounded-full">
                  <img src={colepalmer} alt="" className="w-full h-full rounded-full object-cover border"  />
                </div>
                <div className="celeb-name">
                  <h4 className="font-bold text-md m-0 leading-none">Cole Palmer</h4>
                  <div className="flex justify-between gap-4 items-start m-0  font-normal leading-none">
                    <h4 className="m-0 font-normal"><small>$74.34</small></h4>
                    <p className="m-0 p-0 text-emerald-500 font-normal"><small>$28.07</small></p>
                  </div>
                </div>
              </div>
              <div className="chart-grade h-12  w-2/3 container ms-2">
                <img src={greenchart} className="h-full w-full object-cover" alt="" />
              </div>
              <div className="celeb-money mt-2 flex flex-col">
                  <h3 className="font-semibold text-md m-0 leading-none">
                    $2.79
                  </h3>
                  <p className="text-emerald-500 font-medium m-0 leading-none"><small>+32.45%</small></p>
              </div>
            </SwiperSlide>

              {/* CELEBRITY SIX */}
            <SwiperSlide className="bg-white p-3 w-40 rounded-xl shadow">
              <div className="header flex gap-1">
                <div className="image w-10 h-10 border rounded-full">
                  <img src={scarlet} alt="" className="w-full h-full rounded-full object-cover border"  />
                </div>
                <div className="celeb-name">
                  <h4 className="font-bold text-md m-0 leading-none">Scarlet Johannson</h4>
                  <div className="flex justify-between gap-4 items-start m-0  font-normal leading-none">
                    <h4 className="m-0 font-normal"><small>$74.34</small></h4>
                    <p className="m-0 p-0 text-emerald-500 font-normal"><small>$28.07</small></p>
                  </div>
                </div>
              </div>
              <div className="chart-grade h-12  w-2/3 container ms-2">
                <img src={greenchart} className="h-full w-full object-cover" alt="" />
              </div>
              <div className="celeb-money mt-2 flex flex-col">
                  <h3 className="font-semibold text-md m-0 leading-none">
                    $2.79
                  </h3>
                  <p className="text-emerald-500 font-medium m-0 leading-none"><small>+32.45%</small></p>
              </div>
            </SwiperSlide>

              {/* CELEBRITY SIX */}
              <SwiperSlide className="bg-white p-3 w-40 rounded-xl shadow">
              <div className="header flex gap-1">
                <div className="image w-10 h-10 border rounded-full">
                  <img src={brainjotter} alt="" className="w-full h-full rounded-full object-cover border"  />
                </div>
                <div className="celeb-name">
                  <h4 className="font-bold text-md m-0 leading-none">Brain Jotter</h4>
                  <div className="flex justify-between gap-4 items-start m-0  font-normal leading-none">
                    <h4 className="m-0 font-normal"><small>$74.34</small></h4>
                    <p className="m-0 p-0 text-emerald-500 font-normal"><small>$28.07</small></p>
                  </div>
                </div>
              </div>
              <div className="chart-grade h-12  w-2/3 container ms-2">
                <img src={greenchart} className="h-full w-full object-cover" alt="" />
              </div>
              <div className="celeb-money mt-2 flex flex-col">
                  <h3 className="font-semibold text-md m-0 leading-none">
                    $2.79
                  </h3>
                  <p className="text-emerald-500 font-medium m-0 leading-none"><small>+32.45%</small></p>
              </div>
            </SwiperSlide>

         
          </Swiper>
          </div>
        </div>
        <style jsx>{`
        .swiper-pagination {
          bottom: -6px !important;
        }
      `}</style>
      </div>
    </>
  );
};

export default Celebrity;
