import React from "react";
import Sidebar from "../Components/sidebar";
import Portfolio from "../Components/portfolio";
import Celebrity from "../Components/celebrity";
import PopularListing from "../Components/Populartable";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-5 overflow-hidden h-screen">
        <div className="basis-1/5 h-screen">
          <Sidebar />
        </div>
        <div className="bg-emerald-50 basis-4/5 col-span-4 border overflow-y-scroll  h-full rounded-xl container px-6 py-2 ">
          <Portfolio />
          <Celebrity/>
          <PopularListing />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
