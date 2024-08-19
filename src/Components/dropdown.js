import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { FaBars, FaChartLine, FaClock, FaExchangeAlt, FaIndustry, FaCog, FaHeadset, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FiBox } from 'react-icons/fi';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activePage, setActivePage] = useState('Dashboard');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
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
              <Link
                to="/"
                className={`text-gray-700 px-4 py-2 text-md flex items-center rounded-xl hover:bg-emerald-500 hover:text-black ${
                  activePage === 'Dashboard' ? 'bg-emerald-200' : ''
                }`}
                onClick={() => handlePageChange('Dashboard')}
              >
                <FiBox className="mr-3 text-xl md:block" /> 
                <span className="md:hidden lg:block">Portfolio</span>
              </Link>
              <Link
                to="/invest.js"
                className={`text-gray-700 px-4 py-2 text-md flex items-center rounded-xl hover:bg-emerald-500 hover:text-black ${
                  activePage === 'Invest' ? 'bg-emerald-200' : ''
                }`}
                onClick={() => handlePageChange('Invest')}
              >
                <FaChartLine className="mr-3 md:block" /> 
                <span className="md:hidden lg:block">Invest</span>
              </Link>
              <Link
                to="/stake"
                className={`text-gray-700 px-4 py-2 text-md flex items-center rounded-xl hover:bg-emerald-500 hover:text-black ${
                  activePage === 'Stake' ? 'bg-emerald-200' : ''
                }`}
                onClick={() => handlePageChange('Stake')}
              >
                <FaClock className="mr-3 md:block" /> 
                <span className="md:hidden lg:block">Stake</span>
              </Link>
              <Link
                to="/trade"
                className={`text-gray-700 px-4 py-2 text-md flex items-center rounded-xl hover:bg-emerald-500 hover:text-black ${
                  activePage === 'Trade' ? 'bg-emerald-200' : ''
                }`}
                onClick={() => handlePageChange('Trade')}
              >
                <FaExchangeAlt className="mr-3 md:block" /> 
                <span className="md:hidden lg:block">Trade</span>
              </Link>
              <Link
                to="/mine"
                className={`text-gray-700 px-4 py-2 text-md flex items-center rounded-xl hover:bg-emerald-500 hover:text-black ${
                  activePage === 'Mine' ? 'bg-emerald-200' : ''
                }`}
                onClick={() => handlePageChange('Mine')}
              >
                <FaIndustry className="mr-3 md:block" /> 
                <span className="md:hidden lg:block">Mine</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="settings flex flex-col justify-end w-full">
        <Link
          to="/settings"
          className={`text-gray-700 px-4 py-2 text-md flex items-center rounded-xl hover:bg-emerald-500 hover:text-black ${
            activePage === 'Settings' ? 'bg-emerald-200' : ''
          }`}
          onClick={() => handlePageChange('Settings')}
        >
          <FaCog className="mr-3 md:block" /> 
          <span className="md:hidden lg:block">Setting</span>
        </Link>
        <Link
          to="/support"
          className={`text-gray-700 px-4 py-2 text-md flex items-center rounded-xl hover:bg-emerald-500 hover:text-black ${
            activePage === 'Support' ? 'bg-emerald-200' : ''
          }`}
          onClick={() => handlePageChange('Support')}
        >
          <FaHeadset className="mr-3 md:block" /> 
          <span className="md:hidden lg:block">Support</span>
        </Link>
      </div>
    </div>
  );
};

export default DropdownMenu;
