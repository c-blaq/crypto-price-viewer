import React, { useEffect, useState } from "react";

import axios from "axios";

import SearchCoin from "./SearchCoin";

const CoinCard = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getCoins = async () => {
      try {
        const { data } = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        setCoins(data);
      } catch (err) {
        console.log(err);
      }
    };

    getCoins();

    setInterval(() => {
      getCoins();
    }, 10000);
  }, []);

  return (
    <div className="my-4 w-5/6 sm:w-full sm:my-6 m-auto">
      <SearchCoin />

      <div className="mt-8">
        <h2 className="text-gray-600 font-bold sm:w-3/4 m-auto">Top Coins</h2>
        <div className="flex gap-4  m-auto items-center mt-4 justify-center flex-wrap flex-shrink-0">
          {coins.map(
            (
              {
                id,
                name,
                image,
                symbol,
                current_price,
                price_change_percentage_24h,
              },
              index
            ) =>
              index < 6 && (
                <div
                  className="bg-white rounded-lg shadow-md w-full sm:w-1/3 lg:w-1/4 p-4"
                  key={id}
                >
                  <div className=" uppercase">
                    <h2 className="text-[#9f9f9d] text-lg sm:text-xl ">
                      {name}
                    </h2>
                  </div>

                  <div className="my-4 flex flex-col justify-center items-center">
                    <img
                      src={image}
                      alt={symbol}
                      width={100}
                      height={100}
                      className="block"
                    />
                    <span className="text-3xl  my-3 sm:my-4 block">
                      <span className="text-gray-400">$</span>
                      {current_price.toFixed(2)}
                    </span>
                    <span
                      className={`py-2 px-4 rounded-md   ${
                        price_change_percentage_24h > 0
                          ? "bg-green-600"
                          : "bg-red-600"
                      } text-white`}
                    >
                      {price_change_percentage_24h > 0 ? "+" : ""}
                      {price_change_percentage_24h.toFixed(2)}%
                    </span>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
