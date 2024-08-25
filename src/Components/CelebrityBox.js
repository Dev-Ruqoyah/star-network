import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowTrendUp } from 'react-icons/fa6';

const CelebrityBox = ({ celebrities }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 p-4 ">
      {celebrities.map(celebrity => (
        <div key={celebrity.id} className="h-64 pb-5 p-4 rounded-lg">
          <img
            src={celebrity.image}
            alt={celebrity.name}
            className="w-full h-3/4 object-cover   rounded-tl-3xl"
          />
          <div className="mt-2 flex justify-between">
            <h3 className="text-md font-bold px-3 bg-emerald-200 rounded-bl-2xl w-2/3   h-8 text-pretty overflow-y-hidden  py-1">{celebrity.name}</h3>
            <Link to={`/celebrity/${celebrity.id}`} className="text-white bg-black px-3 flex items-center rounded-box">
              <FaArrowTrendUp />
            </Link>
          </div>
          <div className="flex items-center justify-between mt-2">
            
            <div className="flex items-center w-full px-2 rounded-md justify-between bg-emerald-700">
              <span className={`text-sm'}`}>
               24h chg%
              </span>
              <span className={`text-sm ${celebrity.percentChange.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
                {celebrity.percentChange}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CelebrityBox;
