import React, { useState } from "react";
import Sidebar from "../Components/sidebar";
import Navbar from "./navbar";
import { MdKeyboardCommandKey } from "react-icons/md";
import { FaSearch, FaBell } from "react-icons/fa";

const Invest = () => {
  const [activeTab, setActiveTab] = useState("favourite");
  return (
    <>
      <div className="grid grid-cols-1 static md:grid-cols-5 overflow-hidden h-screen">
        <div className="hidden md:block md:basis-1/6 lg:basis-2/6 h-screen">
          <Sidebar />
        </div>
        <div className="bg-emerald-50 col-span-1 md:col-span-4 md:basis-5/6 lg:basis-4/6 border overflow-y-scroll h-full rounded-xl container px-6 py-2">
          {/* Search bar */}

          <div className="flex justify-center items-center gap-3 mb-2">
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

          {/* INVEST NAVBAR */}
          <div className="w-full h-screen p-4">
            <nav className="flex space-x-4 border-b pb-2 mb-4">
              <button
                className={`py-2 px-4 ${
                  activeTab === "favourite" ? "border-b-2 border-blue-500" : ""
                }`}
                onClick={() => setActiveTab("favourite")}
              >
                Favourite
              </button>
              <button
                className={`py-2 px-4 ${
                  activeTab === "trending" ? "border-b-2 border-blue-500" : ""
                }`}
                onClick={() => setActiveTab("trending")}
              >
                Trending
              </button>
              <button
                className={`py-2 px-4 ${
                  activeTab === "gainers" ? "border-b-2 border-blue-500" : ""
                }`}
                onClick={() => setActiveTab("gainers")}
              >
                Gainers
              </button>
              <button
                className={`py-2 px-4 ${
                  activeTab === "losers" ? "border-b-2 border-blue-500" : ""
                }`}
                onClick={() => setActiveTab("losers")}
              >
                Losers
              </button>
              <button
                className={`py-2 px-4 ${
                  activeTab === "new" ? "border-b-2 border-blue-500" : ""
                }`}
                onClick={() => setActiveTab("new")}
              >
                New Listing
              </button>
            </nav>

            <div>
              {activeTab === "favourite" && (
                <div className="content">
                  <h2>Favourite Content</h2>
                  <p>This is the favourite section.</p>
                </div>
              )}
              {activeTab === "trending" && (
                <div className="content">
                  <h2>Trending Content</h2>
                  <p>This is the trending section.</p>
                </div>
              )}
              {activeTab === "gainers" && (
                <div className="content">
                  <h2>Gainers Content</h2>
                  <p>This is the gainers section.</p>
                </div>
              )}
              {activeTab === "losers" && (
                <div className="content">
                  <h2>Losers Content</h2>
                  <p>This is the losers section.</p>
                </div>
              )}
              {activeTab === "new" && (
                <div className="content">
                  <h2>New Listing Content</h2>
                  <p>This is the new listing section.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default Invest;
