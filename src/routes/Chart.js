import React, { useEffect, useState } from "react";
import ApexChart from "react-apexcharts";
import "./Chart.css"

const Chart = ({ priceData }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [ohlcv, setOhlcv] = useState();
  const raw = priceData["Time Series (5min)"];

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
    // setDate(priceArray[0].slice(0,11))
  }, []);

  const chartData = ohlcv?.map((day) => {
      return {
        x: new Date(day[0]).getTime() / 1000,
        y: [day[1], day[2], day[3], day[4]],
      };
  });

  return (
    <div>
      {isLoading ? (
        "loading..."
      ) : (
        <ApexChart
          type="candlestick"
          options={{
            chart: {
              height: 500,
              width: 500,
              background: '#fff',
              toolbar: {
                show: false
              },
            },
            title: {
              text: "CandleStick Chart",
              align: "center",
            },
            grid: { show: false },
            yaxis: {
              show: true, 
              tooltip: {
                enabled: true,
              },
            },
            xaxis: {
              axisBorder: { show: true },
              axisTicks: { show: false },
              labels: { show: false }, 
              tooltip: {
                enabled: false,
              },
          },}}
          series={[
            {
              name: "price data",
              data: chartData
              ,
            },
          ]}
        />
      )}
    </div>
  );
};

export default Chart;
