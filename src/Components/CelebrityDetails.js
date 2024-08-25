import React from "react";
import { useParams } from "react-router-dom";
import { useCelebrities } from "./CelebrityContex";
import Sidebar from "../Components/sidebar";
import Navbar from "../Pages/navbar";
import { MdKeyboardCommandKey } from "react-icons/md";
import { FaSearch, FaBell } from "react-icons/fa";
const CelebrityDetail = () => {
  const { id } = useParams();
  const celebrities = useCelebrities();
  const celebrity = celebrities.find((c) => c.id.toString() === id);

  if (!celebrity) {
    return <div>Celebrity not found</div>;
  }

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
          <h4 className="text-yellow-400 text-2xl mb-3">Invest In your Stars</h4>
          <div className="grid md:grid-cols-5 sm:grid-cols-1 gap-3  w-full">
            <div className="h-44 pb-5 p-4 rounded-lg col-span-1">
              <img
                src={celebrity.image}
                alt={celebrity.name}
                className="w-full h-3/4 object-cover   rounded-tl-3xl"
              />
              <div className="mt-2 flex justify-between">
                <h3 className="text-md font-bold px-3 bg-emerald-200 rounded-bl-2xl w-full   h-8 text-pretty overflow-y-hidden  py-1">
                  {celebrity.name}
                </h3>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center w-full px-2 rounded-md justify-between bg-emerald-700">
                  <span className={`text-sm'}`}>24h chg%</span>
                  <span
                    className={`text-sm ${
                      celebrity.percentChange.startsWith("-")
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {celebrity.percentChange}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-2 pb-3 p-4 h-44 mt-4 bg-white rounded-tl-3xl">
              <div className="flex flex-col justify-between">
                <div className="flex items-center">
                  <p className="font-bold">Name: </p>
                  <p>{celebrity.fname}</p>
                </div>
                <div className="flex items-center">
                  <p className="font-bold">Stage name: </p>
                  <p>{celebrity.name}</p>
                </div>

                <div className="flex items-center">
                  <p className="font-bold">Date of Birth: </p>
                  <p>{celebrity.dob}</p>
                </div>

                <div className="flex items-center">
                  <p className="font-bold">Nationality: </p>
                  <p>{celebrity.nationality}</p>
                </div>

                <div className="flex items-center">
                  <p className="font-bold">Profession: </p>
                  <p>{celebrity.professions}</p>
                </div>

                <div className="flex items-center">
                  <p className="font-bold">Genres: </p>
                  <p>{celebrity.genres}</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 bg-white pb-3 p-4 h-44 mt-4 rounded-tl-3xl">
            <p>{celebrity.details}</p>

            </div>
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default CelebrityDetail;
