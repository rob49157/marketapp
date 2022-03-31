import React, { useEffect, useState } from "react";
import coingecko from "../Apis/coingecko";
import { ReactDOM } from "react-dom";
import axios from "axios";
import "./crypto.css"

export default function Crypto() {
  const [coins, setCoins] = useState([]);
  // usestate to search for coins
  const [search, setSearch] = useState("");

  //useeffect to fetch data from coingecko
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=400&page=1&sparkline=false"
      )
      .then((response) => {
        setCoins(response.data);
        console.log(response.data);
      });
  }, []);

  // create a handle change function for the searchbar

  const handlechange = (e) => {
    setSearch(e.target.value);
  };

  //create function to filter thru coins and display what users types in

  const filteredcoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  //JSX function destructioring returning data
  const Coin = ({ name, image, symbol, price, volume, pricechange, marketcap }) => {
    return (
      <div className="coin-container">
        <div className="coin-row">
          <div className="coin">
            <img src={image} alt="crypto" />
            <h1>{name}</h1>
            <p className="coin-symbol">{symbol}</p>
          </div>
          <div className="coin-data">
            <p className="coin-price">${price}</p>
            <p className="coin-volume">${volume.toLocaleString()}</p>
            {pricechange < 0 ? (
              <p className="coin-percent red">{pricechange.toFixed(2)}%</p>
            ) : (
              <p className="coin-percent green">{pricechange.toFixed(2)}%</p>
            )}
            <p className=" coin-marketcap"> Market cap :$ {marketcap.toLocaleString()}</p>
          </div>
        </div>
      </div>
    );
  };

  // Displayed JSX and Map thru api to retrieve data
  return (
    <div className="Crypto">
      <div className="coin-search">
        <h1 className="coin-text"> search a crypto</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handlechange}
          ></input>
        </form>
      </div>
      
      {filteredcoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            pricechange={coin.price_change_percentage_24h}
            volume={coin.total_volume}

          />
        );
      })}
    </div>
  );
}
