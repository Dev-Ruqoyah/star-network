import React from "react";
import logo from "../images/logo.jpg";
import { FaBars,FaCog } from 'react-icons/fa';
import { MdDehaze } from 'react-icons/md';
import DropdownMenu from "./dropdown";


const Sidebar = () => {
  return (
    <>
      
      <div className="container  px-6 md:py-0 lg:py-3 sm:hidden md:block ">
        <div className="logo lg:flex gap-3 items-center md:hidden  ">
            <img src={logo} className="rounded-md" alt="" width={'20%'} />
            <h2 className="text-black text-2xl font-bold">B-WALLET</h2>
        </div>
        <div className="profile border py-2   px-2 md:border-0  lg:border-emerald-800 rounded-xl flex  items-center  justify-between mt-8">
            <div className="image h-12 rounded-full   w-12">
                <img src="https://img.freepik.com/free-photo/portrait-attractive-dark-skinned-student-wearing-checkered-shirt-with-confident-joyful-expression-standing-chalkboard-wall_273609-5907.jpg?t=st=1722160405~exp=1722164005~hmac=4861d708d64b1de37ecc6900a80d79dfaff85921efa1c49cde4c134e7e183a9f" className="rounded-full h-full w-full object-cover"  alt="profile picture" />
            </div>
            <div className="profile-details md:hidden lg:block ">
                <p className="text-md font-semibold">BraineyTechBro</p>
                <p className="">@braineytech13</p>
            </div>
            <div className="icon md:hidden lg:block ">
                <MdDehaze />
            </div>
        </div>

        <DropdownMenu/>
        
     
      </div>
    </>
  );
};

export default Sidebar;
