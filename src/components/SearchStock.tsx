import "./SearchStock.css";
import styled from "styled-components";
import { useState } from "react";

function SearchStock() {
  const [query, setQuery] = useState("");
  const [stocks, setStocks] = useState([]);
  const searchStock = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${process.env.REACT_APP_ALPHAVANTAGE_API_KEY}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setStocks(data["bestMatches"])

    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form className="form" onSubmit={searchStock}>
        <label className="label" htmlFor="query">
          Ticker Symbol
        </label>
        <input
          className="input"
          type="text"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="i.e. AAPL"
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
       <div className="card-list">
                {stocks.map((stock, index) => (
                    <div className="card" key={index}>
                      {stock["1. symbol"]} | {stock["2. name"]}
                    </div>
                ))} 
      </div>
    </>
  );
}

export default SearchStock;
