import React from "react";
import coin from "../assets/images/coin-logo.png";

const SearchCoin = () => {
  return (
    <div className="m-auto sm:w-3/4 mb-8">
      <div className="flex flex-wrap sm:justify-center sm:gap-4 justify-between lg:justify-between lg:gap-0 items-center">
        <label htmlFor="" className="text-gray-600 font-bold">
          Search for coin:
        </label>
        <input
          type="text"
          placeholder="Enter coin name"
          className="p-2 w-full sm:w-2/3 lg:w-5/6 outline-none text-gray-500"
        />
      </div>

      <div className="my-4 ">
        <h2 className="font-bold text-gray-600 my-2">Result:</h2>
        <div className="bg-white rounded-lg shadow-md w-full lg:w-1/3 p-4">
          <div className=" uppercase">
            <h2 className="text-[#9f9f9d] text-lg sm:text-xl ">Etherium</h2>
          </div>

          <div className="my-4 flex flex-col justify-center items-center">
            <img
              src={coin}
              alt="Coin Logo"
              width={100}
              height={100}
              className="block"
            />
            <span className="text-3xl  my-3 sm:my-4 block">
              <span className="text-gray-400">$</span>557.36
            </span>
            <span className="py-2 px-4 rounded-md bg-green-600 text-white">
              1.78%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCoin;
