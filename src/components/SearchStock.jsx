import "./SearchStock.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchStock = ({favourites}) => {
  const [query, setQuery] = useState("");
  const [stocks, setStocks] = useState([]);
  const searchStock = async (e) => {

    if(query == "" ) {
      setQuery("aapl")
    }
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

  function handleSubmit(e){
    e.preventDefault();
    // console.log("hi");
  }

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
                  <Link to={`${stock["1. symbol"]}`}>
                    <div className="card" key={index}>
                      <div className="card-left">
                        {stock["1. symbol"]} | {stock["2. name"]} 
                      </div>
                      {/* <span className="star" style={styles.fav} onClick={handleFavourite(index)} value={index}>&#9734;</span> */}
                    </div>
                  </Link>
                ))} 
      </div>
    </>
  );
}

export default SearchStock;
