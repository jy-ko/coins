import styled from "styled-components";
import SearchStock from "../components/SearchStock";

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  min-height: 80vh;
  padding: 2rem;
  @media (max-width: 768px) {
    width: 100%;
  }
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
