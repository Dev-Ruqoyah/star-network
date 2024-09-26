import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active styling
import { FaBars, FaChartLine, FaClock, FaExchangeAlt, FaIndustry, FaCog, FaHeadset, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FiBox } from 'react-icons/fi';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col justify-between items-start gap-10 mt-6">
      <div className="relative inline-block w-full text-center ms-1 h-72">
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-start items-center gap-2 w-full rounded-md shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700"
        >
          <FaBars /> <p className="md:hidden lg:block">MENU</p> {isOpen ? <FaChevronDown /> : <FaChevronUp />}
        </button>

        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-5 w-full rounded-md bg-white"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1 flex flex-col gap-2 w-full" role="none">
              <NavLink
                to="/"
                className={({ isActive }) => `text-gray-700 px-4 py-2 text-md flex items-center rounded-xl hover:bg-emerald-500 hover:text-black ${isActive ? 'bg-emerald-200' : ''}`}
              >
                <FiBox className="mr-3 text-xl md:block" />
                <span className="md:hidden lg:block">Portfolio</span>
              </NavLink>
              <NavLink
                to="/invest"
                className={({ isActive }) => `text-gray-700 px-4 py-2 text-md flex items-center rounded-xl hover:bg-emerald-500 hover:text-black ${isActive ? 'bg-emerald-200' : ''}`}
              >
                <FaChartLine className="mr-3 md:block" />
                <span className="md:hidden lg:block">Invest</span>
              </NavLink>
              <NavLink
                to="/stake"
                className={({ isActive }) => `text-gray-700 px-4 py-2 text-md flex items-center rounded-xl hover:bg-emerald-500 hover:text-black ${isActive ? 'bg-emerald-200' : ''}`}
              >
                <FaClock className="mr-3 md:block" />
                <span className="md:hidden lg:block">Stake</span>
              </NavLink>
              <NavLink
                to="/trade"
                className={({ isActive }) => `text-gray-700 px-4 py-2 text-md flex items-center rounded-xl hover:bg-emerald-500 hover:text-black ${isActive ? 'bg-emerald-200' : ''}`}
              >
                <FaExchangeAlt className="mr-3 md:block" />
                <span className="md:hidden lg:block">Trade</span>
              </NavLink>
              <NavLink
                to="/mine"
                className={({ isActive }) => `text-gray-700 px-4 py-2 text-md flex items-center rounded-xl hover:bg-emerald-500 hover:text-black ${isActive ? 'bg-emerald-200' : ''}`}
              >
                <FaIndustry className="mr-3 md:block" />
                <span className="md:hidden lg:block">Mine</span>
              </NavLink>
            </div>
          </div>
        )}
      </div>

      <div className="settings flex flex-col justify-end w-full">
        <NavLink
          to="/settings"
          className={({ isActive }) => `text-gray-700 px-4 py-2 text-md flex items-center rounded-xl hover:bg-emerald-500 hover:text-black ${isActive ? 'bg-emerald-200' : ''}`}
        >
          <FaCog className="mr-3 md:block" />
          <span className="md:hidden lg:block">Setting</span>
        </NavLink>
        <NavLink
          to="/support"
          className={({ isActive }) => `text-gray-700 px-4 py-2 text-md flex items-center rounded-xl hover:bg-emerald-500 hover:text-black ${isActive ? 'bg-emerald-200' : ''}`}
        >
          <FaHeadset className="mr-3 md:block" />
          <span className="md:hidden lg:block">Support</span>
        </NavLink>
      </div>
    </div>
  );
};

export default DropdownMenu;
