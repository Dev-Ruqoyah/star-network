// import React from 'react';
import React, { useState } from "react";
import {
  FaBars,
  FaHome,
  FaClock,
  FaUser,
  FaCog,
  FaInfoCircle,
  FaSignOutAlt,
  FaChartLine,
  FaExchangeAlt,
  FaIndustry,
  FaHeadset,
} from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="container md:hidden overflow-y-hidden">
        <div className="flex justify-center items-center absolute top-0 py-2 px-4 bg-white w-full">
          <div className="relative inline-block w-full text-center ms-1">
            {/* Hide on medium and larger screens */}
            <button
              onClick={toggleDropdown}
              className="inline-flex justify-start items-center gap-2 w-full rounded-md shadow-sm px-4 py-2 text-sm font-medium text-gray-700"
            >
              <FaBars /> <p className="md:hidden lg:block"></p>
              {isOpen ? <FaChevronDown /> : <FaChevronUp />}
            </button>
            {isOpen && (
              <div
                className="origin-bottom-right absolute right-0 mb-5 w-full rounded-md bg-white"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1 flex flex-col gap-2 w-full" role="none">
                  <a
                    href="#home"
                    className="text-gray-700 hover:text-black px-4 py-2 text-md hover:bg-emerald-500 rounded-xl flex items-center"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    <FiBox className="mr-3 text-xl md:block" />
                    <span className="md:hidden lg:block">Portfolio</span>
                  </a>
                  <a
                    href="#profile"
                    className="text-gray-700 hover:text-black px-4 py-2 text-md hover:bg-emerald-500 rounded-xl flex items-center"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    <FaChartLine className="mr-3 md:block" />
                    <span className="md:hidden lg:block">Invest</span>
                  </a>
                  <a
                    href="#settings"
                    className="text-gray-700 hover:text-black px-4 py-2 text-md hover:bg-emerald-500 rounded-xl flex items-center"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-2"
                  >
                    <FaClock className="mr-3 md:block" />
                    <span className="md:hidden lg:block">Stake</span>
                  </a>
                  <a
                    href="#about"
                    className="text-gray-700 hover:text-black px-4 py-2 text-md hover:bg-emerald-500 rounded-xl flex items-center"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-3"
                  >
                    <FaExchangeAlt className="mr-3 md:block" />
                    <span className="md:hidden lg:block">Trade</span>
                  </a>
                  <a
                    href="#logout"
                    className="text-gray-700 hover:text-black px-4 py-2 text-md hover:bg-emerald-500 rounded-xl flex items-center"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-4"
                  >
                    <FaIndustry className="mr-3 md:block" />
                    <span className="md:hidden lg:block">Mine</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="settings flex justify-end w-full">
            <a
              href="#settings"
              className="text-gray-700 hover:text-black px-4 py-2 text-md hover:bg-emerald-500 rounded-xl flex items-center"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-5"
            >
              <FaCog className="mr-3 md:block" />
              <span className="md:hidden lg:block">Setting</span>
            </a>
            <a
              href="#settings"
              className="text-gray-700 hover:text-black px-4 py-2 text-md hover:bg-emerald-500 rounded-xl flex items-center"
              role="menuitem"
              tabIndex="3"
              id="menu-item-6"
            >
              <FaHeadset className="mr-3 md:block" />
              <span className="md:hidden lg:block">Support</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
