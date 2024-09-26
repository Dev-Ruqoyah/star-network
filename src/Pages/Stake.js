import React from "react";
import Sidebar from "../Components/sidebar";
import Portfolio from "../Components/portfolio";
import Celebrity from "../Components/celebrity";
import PopularListing from "../Components/Populartable";
import Navbar from "./navbar";

const   Stake = () => {
  return (
    <>
      <div className="grid grid-cols-1 static md:grid-cols-5 overflow-hidden h-screen">
        <div className="hidden md:block md:basis-1/6 lg:basis-2/6 h-screen">
          <Sidebar />
        </div>
        <div className="bg-emerald-50 col-span-1 md:col-span-4 md:basis-5/6 lg:basis-4/6 border overflow-y-scroll h-full rounded-xl container px-6 py-2">
          <Portfolio />
          <Celebrity />
          <PopularListing />
        </div>
        <Navbar/>
      </div>
    </>
  );
};

export default  Stake;
