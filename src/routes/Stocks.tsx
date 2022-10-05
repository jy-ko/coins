import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// interface ICoin {
//     id: string,
//     name: string,
//     symbol: string,
//     rank: number,
//     is_new: boolean,
//     is_active: boolean,
//     type: string,
// }

const Container = styled.div`
  padding: 50px 100px;
`;
const Header = styled.header`
  display: flex;
`;
const StocksList = styled.ul`
  margin: 10px 0px;
`;
const Stock = styled.li`
  font-size: 1.5rem;
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  padding: 10px;
  margin: 10px 0px;
  a {
    display: flex;
    padding: 20px;
    align-items: center;
  }
  &:hover {
    a {
        color: ${(props) => props.theme.accentColor};
    }
  }
`;
const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

const Title = styled.h1`
  font-size: 48px;
  display: flex;
  margin: 0 auto;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.div`
`

function Stocks() {
  const [stocks, setStocks] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async() => {
        // const res = await fetch(`https://www.alphavantage.co/query?function=LISTING_STATUS&apikey=${process.env.REACT_APP_ALPHAVANTAGE_API_KEY}`)
        // const json = await res.text()
        // const data = await res.json();
        console.log(json);
        setLoading(false);
    })();
  },[])
  return (
    <Container>
      <Header>
        <Title>Stocks</Title>
      </Header>
      {loading ? (<Loader>"Loading..."</Loader>) :
        (stocks)
       }
    </Container>
  );
}
export default Stocks;
