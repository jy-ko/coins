import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ICoin {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

const Container = styled.div`
  padding: 50px 100px;
`;
const Header = styled.header`
  display: flex;
`;
const CoinsList = styled.ul`
  margin: 10px 0px;
`;
const Coin = styled.li`
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

function Coins() {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async() => {
        const res = await fetch("https://api.coinpaprika.com/v1/coins")
        const json = await res.json();
        setCoins(json.slice(0,100))
        setLoading(false);
    })();
  },[])
  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      {loading ? (<Loader>"Loading..."</Loader>) :
      (<CoinsList>
        {coins.map((coin) => (
          <Coin key={coin.id}>
            <Link to={`/${coin.id}`} state={coin.name}>
            <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}/>
                {coin.name} &rarr;
            </Link></Coin>
        ))}
      </CoinsList>)
       }
    </Container>
  );
}
export default Coins;
