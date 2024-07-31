import React from "react";
import Sidebar from "../Components/sidebar";
import Portfolio from "../Components/portfolio";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="basis-1/5">
            <Sidebar />
        </div>
        <div className="bg-emerald-50  w-full h-screen rounded-xl container px-6 py-2 ">
          <Portfolio/>
        </div>
       
      </div>
    </>
  );
};


export default Dashboard