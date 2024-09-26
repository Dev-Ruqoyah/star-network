import { React, useState } from "react";
import {
  FaSearch,
  FaEyeSlash,
  FaBell,
  FaEye,
  FaWallet,

  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
} from "react-icons/fa";
import { MdKeyboardCommandKey, MdSearch } from "react-icons/md";
import { FaBars, FaHome,FaClock, FaUser, FaCog, FaInfoCircle, FaSignOutAlt, FaChartLine, FaExchangeAlt, FaIndustry, FaHeadset } from 'react-icons/fa';
import { FaChevronDown ,FaChevronUp} from 'react-icons/fa6';
import { FiBox } from 'react-icons/fi';


const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
    // localStorage.setItem('isVisible',isVisi)
  };
 
    const [isOpen, setIsOpen] = useState(true);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
      <div className="container">
        <div className="header flex justify-center items-center pt-14 md:pt-2 gap-2 ">
         
          <div className="image h-12 rounded-full md:hidden   w-12">
            <img
              src="https://img.freepik.com/free-photo/portrait-attractive-dark-skinned-student-wearing-checkered-shirt-with-confident-joyful-expression-standing-chalkboard-wall_273609-5907.jpg?t=st=1722160405~exp=1722164005~hmac=4861d708d64b1de37ecc6900a80d79dfaff85921efa1c49cde4c134e7e183a9f"
              className="rounded-full h-full w-full object-cover"
              alt="profile picture"
            />
          </div>
          <div className="search-bar  px-2 border bg-gray-200 flex rounded-sm items-center md:w-4/5 lg:w-2/5">
            <FaSearch className="text-xl" />
            <input
              type="text"
              className=" bg-transparent text-center w-full py-2 outline-0 border"
              placeholder="Enter KeyWord"
            />
            <MdKeyboardCommandKey className="text-xl" />
          </div>
          <FaBell />
        
        </div>

        {/* *********
            PORTFOLIO
        ********** */}
        <div className="welcome-content mt-3 bg-emerald-900 text-white p-3 container  px-5 rounded-md flex flex-col gap-8">
          <div className="balance flex justify-between items-center">
            <div>
              <h4>Portfolio</h4>
              <h3 className="font-semibold text-2xl">$,7825.96</h3>
            </div>
            <div className="flex flex-col items-end justify-center">
              <button onClick={handleToggleVisibility} className="mb-2">
                {isVisible ? <FaEyeSlash /> : <FaEye />}
              </button>

              <h3 className="font-semibold text-xl m-0">
                {isVisible ? "+3865.46" : "•••••••"}
              </h3>
              <h6 className="font-semibold text-green-700 text-sm m-0">
                +157.909%
              </h6>
            </div>
          </div>
          <div className="balance-action flex justify-between items-center">
            <div className="flex items-center justify-center gap-2">
              <button className="flex items-center justify-center bg-emerald-100 p-2 md:px-4 rounded-sm text-emerald-900 gap-1">
                <FaArrowAltCircleDown />
                <p>Deposit</p>
              </button>

              <button className="flex items-center justify-center bg-emerald-100 p-2 md:px-4 rounded-sm text-emerald-900 gap-1">
                <FaArrowAltCircleUp />
                <p>Withdrawal</p>
              </button>
            </div>
            <div className="wallet flex items-center justify-center gap-2">
              <FaWallet />
              <p>My Wallet</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
