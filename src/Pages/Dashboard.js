import React from "react";
import Sidebar from "../Components/sidebar";
import Portfolio from "../Components/portfolio";
import Celebrity from "../Components/celebrity";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-5">
        <div className="basis-1/5">
            <Sidebar />
        </div>
        <div className="bg-emerald-50 basis-4/5 col-span-4 border  h-screen rounded-xl container px-6 py-2 ">
          <Portfolio/>
          <Celebrity/>
        </div>
       
      </div>
    </>
  );
};


export default Dashboard