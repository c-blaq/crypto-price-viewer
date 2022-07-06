import React, { useRef, useState } from "react";
import axios from "axios";

const SearchCoin = () => {
  const searchRef = useRef();
  const [coins, setCoins] = useState(null);

  const handleCoinSearch = async () => {
    const { data: searchData } = await axios.get(
      `https://api.coingecko.com/api/v3/search?query=${searchRef.current.value}`
    );

    const { data: coinData } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${searchData.coins[0].id}`
    );
    setCoins(coinData);
    searchRef.current.value = "";
  };

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
          ref={searchRef}
          onKeyUp={(e) => (e.key === "Enter" ? handleCoinSearch() : "")}
        />
      </div>

      {coins && (
        <div className="my-4 ">
          <h2 className="font-bold text-gray-600 my-2">Result:</h2>

          <div className="bg-white rounded-lg shadow-md w-full lg:w-1/3 p-4">
            <div className=" uppercase">
              <h2 className="text-[#9f9f9d] text-lg sm:text-xl ">
                {coins.name}
              </h2>
            </div>

            <div className="my-4 flex flex-col justify-center items-center">
              <img
                src={coins.image.large}
                alt={coins.symbol}
                width={100}
                height={100}
                className="block"
              />
              <span className="text-3xl  my-3 sm:my-4 block">
                <span className="text-gray-400">$</span>
                {coins.market_data.current_price.usd}
              </span>
              <span className="py-2 px-4 rounded-md bg-green-600 text-white">
                {coins.market_data.price_change_percentage_24h}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchCoin;
