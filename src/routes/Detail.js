import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeButton from "../components/HomeButton";

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
  text-align: center;
  margin: 8px;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.menuColor};
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0px;
`

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Detail() {
  const [loading, setLoading] = useState(true);
  const { stockId } = useParams();
  const { state } = useLocation();
  const [overview, setOverview] = useState({});
  const [priceInfo, setPriceInfo] = useState("");
  useEffect(() => {
    (async () => {
      const overviewData = await (
        await fetch(
          `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stockId}&apikey=${process.env.REACT_APP_ALPHAVANTAGE_API_KEY}`
        )
      ).json();

      const priceData = await (
        await fetch(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockId}&apikey=${process.env.REACT_APP_ALPHAVANTAGE_API_KEY}`
        )
      ).json();
      // console.log(priceData["Time Series (Daily)"])
      if (priceData) {
        const lastPrice = Object.values(priceData["Time Series (Daily)"]).shift();
        setPriceInfo(lastPrice)
      }
      setOverview(overviewData);
      setLoading(false);
    })();
  }, [stockId]);
  return (
    <Container>
      <Link to="/">
        <HomeButton/>
      </Link>
      <Header>
        <Title>
          {overview.Name}
        </Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Price:</span>
              <span>{ priceInfo? priceInfo["4. close"] : ""}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>{overview.Symbol}</span>

            </OverviewItem>
            <OverviewItem>
              <span>PER:</span>
              <span>{overview.PERatio}</span>
            </OverviewItem>
          </Overview>
          <Description>
            <span>{overview.Description}</span>
          
          </Description>
          <Overview>
            <OverviewItem>
              <span>Sector:</span>
              <span>{overview.Sector}</span>
            </OverviewItem>
            <OverviewItem>
              <span>EPS:</span>
              <span>{overview.EPS}</span>
            </OverviewItem>
          </Overview>
        </>
      )}
    </Container>
  );
}

export default Detail;