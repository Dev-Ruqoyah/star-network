import {React,useState} from "react";
import { FaSearch,FaEyeSlash, FaBell,FaEye,FaWallet,FaRegArrowAltCircleDown  } from "react-icons/fa";

import { FaArrowsDownToLine } from "react-icons/fa6";
const Portfolio = () => {
  
    const [isVisible, setIsVisible] = useState(true);
  
    const handleToggleVisibility = () => {
      setIsVisible(!isVisible);
    };

  return (
    <>
      <div className="container">
        <div className="header flex justify-center items-center mt-2 gap-2">
          <div className="search-bar  px-2 border bg-gray-200 flex rounded-sm items-center w-2/5">
            <FaSearch />
            <input type="text" className=" bg-transparent text-center w-full py-2 outline-0 border" placeholder="Enter KeyWord" />
          </div>
          <FaBell/>
        </div>
        <div className="welcome-content mt-3 bg-emerald-900 text-white p-3 container  px-5 rounded-md flex flex-col gap-8">
            <div className="balance flex justify-between items-center">
                <div>
                    <h4>Portfolio</h4>
                    <h3 className="font-semibold text-2xl">$,7825.96</h3>
                </div>
                <div className="flex flex-col items-end justify-center">
                <button onClick={handleToggleVisibility} className="mb-2">
            {isVisible ? <FaEye /> : <FaEyeSlash />}
              </button>

                    <h3 className="font-semibold text-xl m-0">
                    
                    {isVisible? "+3865.46" :"•••••••"}</h3>
                    <h6 className="font-semibold text-green-700 text-sm m-0">+157.909%</h6>
                </div>
            </div>
            <div className="balance-action flex justify-between items-center">
                <div className="flex items-center justify-center gap-2">
                    <div className="flex items-center justify-center bg-emerald-100 p-2 px-4 rounded-sm text-emerald-900 gap-1">
                        <FaRegArrowAltCircleDown />
                        <p >Deposit</p>
                    </div>

                    <div className="flex items-center justify-center bg-emerald-100 p-2 px-4 rounded-sm text-emerald-900 gap-1">
                        <FaArrowsDownToLine/>
                        <p >Withdrawal</p>
                    </div>
                </div>
                <div className="wallet flex items-center justify-center gap-2">
                    <FaWallet/>
                    <p>My Wallet</p>
                </div>

            </div>
        </div>
      </div>
    </>
  );
};


export default Portfolio;