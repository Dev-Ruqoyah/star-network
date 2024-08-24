import React from 'react';
import { Link } from 'react-router-dom';

const CelebrityBox = ({ celebrities }) => {
  return (
    <div className="grid grid-cols-5 gap-3">
      {celebrities.map(celebrity => (
        <div key={celebrity.id} className="border p-4 m-4 rounded-lg">
          <img
            src={celebrity.image}
            alt={celebrity.name}
            className="w-full h-24 object-cover rounded-md"
          />
          <div className="bottom-detail">
            <h3 className="text-lg font-bold mt-2">{celebrity.name}</h3>
          </div>
          <div className="flex items-center justify-between mt-2">
            <Link
              to={`/celebrity/${celebrity.id}`}
              className="text-blue-500"
            >
              View Details
            </Link>
            <div className="flex flex-col items-end">
              <span
                className={`text-sm ${celebrity.change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}
              >
                {celebrity.change}
              </span>
              <span
                className={`text-sm ${celebrity.percentChange.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}
              >
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
