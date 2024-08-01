import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperBox = (props) => {
  return(
    <>
        <SwiperSlide className="bg-white p-3 w-40">
              <div className="header flex items-center justify-start">
                <div className="image h-8 w-8 bg-black rounded-full">
                  <img src="{props.image}" alt="" className="w-full h-full"  />
                </div>
                <div className="celeb-name">
                  <h4 className="font-bold text-md m-0">{props.Cname}</h4>
                  <div className="flex justify-between gap-4 items-center m-0 font-normal">
                    <h4 className="m-0 font-normal">{props.price1}</h4>
                    <p className="m-0 p-0 text-emerald-500 font-normal">{props.price2}</p>
                  </div>
                </div>
              </div>
              <div className="chart-grade">{props.barimage}</div>
              <div className="celeb-money">
                <h4>{props.bprice1}</h4>
                <h4>{props.bprice2}</h4>
              </div>
            </SwiperSlide>

    </>
  )
};

export default SwiperBox