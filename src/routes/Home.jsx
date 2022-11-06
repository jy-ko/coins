import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchStock from "../components/SearchStock";

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 2rem;
  @media (max-width: 768px) {
    width: 100%;
  }
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
  return (
    <Container>
        <Title>Stocks</Title>
        <SearchStock></SearchStock>
    </Container>
  );
}
export default Home;
