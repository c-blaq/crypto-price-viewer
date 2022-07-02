import React from "react";

import coin from "../assets/images/coin-logo.png";

const CoinCard = () => {
  return (
    <div>
      <div className="flex gap-4 w-5/6 sm:w-full m-auto items-center mt-8 justify-center flex-wrap flex-shrink-0">
        <div className="bg-white shadow-md w-full sm:w-1/3 lg:w-1/4 p-4">
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
            <span className="text-3xl  my-2 block">$557.36</span>
            <span className="py-2 px-4 rounded-md bg-green-600 text-white">
              1.78%
            </span>
          </div>
        </div>

        <div className="bg-white shadow-md w-full sm:w-1/3 lg:w-1/4  p-4">
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
            <span className="text-3xl  my-2 block">$557.36</span>
            <span className="py-2 px-4 rounded-md bg-green-600 text-white">
              1.78%
            </span>
          </div>
        </div>

        <div className="bg-white shadow-md w-full sm:w-1/3 lg:w-1/4  p-4">
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
            <span className="text-3xl  my-2 block">$557.36</span>
            <span className="py-2 px-4 rounded-md bg-green-600 text-white">
              1.78%
            </span>
          </div>
        </div>

        <div className="bg-white shadow-md w-full sm:w-1/3 lg:w-1/4  p-4">
          <div className="uppercase">
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
            <span className="text-3xl  my-2 block">$557.36</span>
            <span className="py-2 px-4 rounded-md bg-green-600 text-white">
              1.78%
            </span>
          </div>
        </div>

        <div className="bg-white shadow-md w-full sm:w-1/3 lg:w-1/4  p-4">
          <div className="uppercase">
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
            <span className="text-3xl  my-2 block">$557.36</span>
            <span className="py-2 px-4 rounded-md bg-green-600 text-white">
              1.78%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
