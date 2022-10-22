import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchStock from "../components/SearchStock";
import Favourites from "../components/Favourites";

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
  color: ${(props) => props.theme.accentColor};
  text-align: center;
`;

function Home() {
  const [stocks, setStocks] = useState();
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async() => {

    })();
  },[])
  return (
    <Container>
        <Title>Stocks</Title>
        <SearchStock></SearchStock>
        <Favourites></Favourites>
    </Container>
  );
}
export default Home;
