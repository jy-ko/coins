import styled from "styled-components";

export const Box = styled.div`
  padding: 20px;
  background: ${(props) => props.theme.menuColor};
  position: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;


export const Icon = styled.span`
  color: ${(props) => props.theme.textColor};
  font-size: 2rem;
  margin: 1rem;
`
