import React, { useState } from 'react';
import { FaBars, FaHome,FaClock, FaUser, FaCog, FaInfoCircle, FaSignOutAlt, FaChartLine, FaExchangeAlt, FaIndustry, FaHeadset } from 'react-icons/fa';
import { FaChevronDown ,FaChevronUp} from 'react-icons/fa6';
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
          <FaBars /> <p>MENU</p> {isOpen ? <FaChevronDown/> :<FaChevronUp /> }
        </button>

        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-5 w-full rounded-md bg-white "
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
                <FiBox className="mr-3 text-xl" /> Portfolio
              </a>
              <a
                href="#profile"
                className="text-gray-700 hover:text-black px-4 py-2 text-md hover:bg-emerald-500 rounded-xl flex items-center"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
              >
                <FaChartLine className="mr-3" /> Invest
              </a>
              <a
                href="#settings"
                className="text-gray-700 hover:text-black px-4 py-2 text-md hover:bg-emerald-500 rounded-xl flex items-center"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-2"
              >
                <FaClock className="mr-3" /> Stake
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-black px-4 py-2 text-md hover:bg-emerald-500 rounded-xl flex items-center"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-3"
              >
                <FaExchangeAlt className="mr-3" /> Trade
              </a>
              <a
                href="#logout"
                className="text-gray-700 hover:text-black px-4 py-2 text-md hover:bg-emerald-500 rounded-xl flex items-center"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-4"
              >
                <FaIndustry className="mr-3" /> Mine
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="settings flex flex-col justify-end w-full">
        <a
          href="#settings"
          className="text-gray-700 hover:text-black px-4 py-2 text-md hover:bg-emerald-500 rounded-xl flex items-center"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-5"
        >
          <FaCog className="mr-3" /> Setting
        </a>
        <a
          href="#settings"
          className="text-gray-700 hover:text-black px-4 py-2 text-md hover:bg-emerald-500 rounded-xl flex items-center"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-6"
        >
          <FaHeadset className="mr-3" /> Support
        </a>
      </div>
    </div>
  );
};

export default DropdownMenu;
