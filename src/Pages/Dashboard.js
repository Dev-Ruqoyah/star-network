import React from "react";
import Sidebar from "../Components/sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="basis-1/5">
            <Sidebar />
        </div>
        {/* <div class="basis-1/4">02</div> */}
        {/* <div class="basis-1/2">03</div> */}
      </div>
    </>
  );
};


export default Dashboard