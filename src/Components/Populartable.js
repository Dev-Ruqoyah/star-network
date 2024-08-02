import React from "react";
import ronaldo from "../images/ronaldo.jpg";
import greenchart from "../images/chart-green.png";

const PopularListing = () => {
  return (
    <>
      <div className="container">
        <div className="overflow-x-auto">
          <table className="table rounded-3 ">
            {/* head */}
            <thead className="">
              <tr className="bg-white py-3 p-2 rounded-2">
                <th>
                  {" "}
                  <p className="bg-emerald-300 p-2 w-24 rounded-md">
                    Most Popular
                  </p>
                </th>
                <th>Top Gainers</th>
                <th>New Listing</th>
              </tr>
            </thead>
            <div className="my-2"></div>

            <tbody className="d-flex gap-2">
              {/* row 1 */}
              <tr className="border-emerald-500 border-2 mt-2 rounded-sm">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12 rounded-full">
                        <img
                          src={ronaldo}
                          alt="Avatar Tailwind CSS Component"
                          className="rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Ronaldo</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="chart-grade h-12 w-1/3 container rounded-2xl overflow-hidden">
                    <img
                      src={greenchart}
                      className="h-full w-full object-cover"
                      alt=""
                    />
                  </div>
                </td>
                <td className="rounded-2xl">
                  <div className="celeb-money mt-2 flex flex-col items-end">
                    <h3 className="font-semibold text-md m-0 leading-none">
                      $2.79
                    </h3>
                    <p className="text-emerald-500 font-medium m-0 leading-none text-sm">
                      +32.45%
                    </p>
                  </div>
                </td>
              </tr>
              <div className="my-1"></div>
              {/* row 1 */}
              <tr className="border-emerald-500 border-2 mt-2 rounded-sm">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12 rounded-full">
                        <img
                          src={ronaldo}
                          alt="Avatar Tailwind CSS Component"
                          className="rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Ronaldo</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="chart-grade h-12 w-1/3 container rounded-2xl overflow-hidden">
                    <img
                      src={greenchart}
                      className="h-full w-full object-cover"
                      alt=""
                    />
                  </div>
                </td>
                <td className="rounded-2xl">
                  <div className="celeb-money mt-2 flex flex-col items-end">
                    <h3 className="font-semibold text-md m-0 leading-none">
                      $2.79
                    </h3>
                    <p className="text-emerald-500 font-medium m-0 leading-none text-sm">
                      +32.45%
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PopularListing;
