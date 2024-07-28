import React from "react";
import logo from "../images/logo.jpg";
import { FaBars } from 'react-icons/fa';
import { MdDehaze } from 'react-icons/md';

const Sidebar = () => {
  return (
    <>
      
      <div className="container  px-6  py-3 ">
        <div className="logo flex gap-3 items-center j ">
            <img src={logo} className="rounded-md" alt="" width={'20%'} />
            <h2 className="text-white text-3xl font-bold">B-WALLET</h2>
        </div>
        <div className="profile border py-2  px-2 border-emerald-800 rounded-xl flex gap-3 items-center  justify-around mt-5">
            <div className="image h-12 rounded-full border  w-12">
                <img src="https://img.freepik.com/free-photo/close-up-smiley-man-with-headphones_23-2148937643.jpg?t=st=1722115217~exp=1722118817~hmac=58f3d5317f1a90a8d4be68830734dfd7379f646c2be754d08209708683595314&w=740" className="rounded-full" width={'100%'} height={'100%'} alt="" />
            </div>
            <div className="profile-details ">
                <p className="text-md font-semibold">BraineyTechBro</p>
                <p className="">@braineytech13</p>
            </div>
            <div className="icon">
                <MdDehaze />
            </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
