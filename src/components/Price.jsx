import React from "react";

const Price = ({ priceData }) => {
  return (
    <div className="price">
      {priceData.map((coin) => (
        <div className="container" key={coin.name}>
          <h2 className="title">{coin.name}</h2>
          <div className="logo">
            <img className="logoImg" src={coin.image} alt={coin.name} />
          </div>
          <p>current price: {coin.current_price}</p>
          <p>rank: {coin.market_cap_rank}</p>
        </div>
      ))}
    </div>
  );
};
export default Price;
