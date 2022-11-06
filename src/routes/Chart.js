import React, { useEffect, useState } from "react";
import axios from "axios";
import ApexChart from "react-apexcharts";

const BASE_URL = "https://www.alphavantage.co/query?function=";

const Chart = ({ stockId, priceData }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [ohlcv, setOhlcv] = useState();

//   useEffect(() => {
//     const url = `${BASE_URL}TIME_SERIES_DAILY&symbol=${stockId}&apikey=${process.env.REACT_APP_ALPHAVANTAGE_API_KEY}`;
//     axios
//       .get(url)
//       .then((response) =>  {
//         const raw = response.data["Time Series (Daily)"]
//         const ohlcv = Object.keys(raw).map((key) => [
//             key,
//             +raw[key]["1. open"],
//             +raw[key]["2. high"],
//             +raw[key]["3. low"],
//             +raw[key]["4. close"],
//             +raw[key]["5. volume"],
//           ]);
//           setOhlcv(ohlcv);
//           setIsLoading(false);

//       })
//   });
    const raw = priceData["Time Series (Daily)"]
    useEffect(() => {
        const priceArray = Object.keys(raw).map((key) => [
            key,
            +raw[key]["1. open"],
            +raw[key]["2. high"],
            +raw[key]["3. low"],
            +raw[key]["4. close"],
            +raw[key]["5. volume"],
            ]);
        setOhlcv(priceArray);
        setIsLoading(false);
    })

  const series = [
    {
      name: "candlestick",
      data: [
        ohlcv?.map((day) => {
          return {
            x: new Date(day[0]).getTime() / 1000, 
            y: [day[1], day[2], day[3], day[4]]
          }
        }),
      ],
    },
  ];
  console.log(series)

  const options = {
    chart: {
      type: "candlestick",
      height: 350,
    },
    colors:['#F44336', '#E91E63', '#9C27B0'], 
    fill: {
        colors: "white"
    },
    title: {
      text: "CandleStick Chart",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    candlestick: {
      colors: {
        upward: "#DF7D46",
        downward: "#3C90EB",
      },
    },
  };

  return (
    <div>
      {isLoading ? (
        "loading..."
      ) : (
        <ApexChart
          type="candlestick"
          options={options}
          series={series}
          width="450"
        />
      )}
    </div>
  );
};

export default Chart;
