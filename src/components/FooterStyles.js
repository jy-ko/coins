import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  background: ${(props) => props.theme.menuColor};
  width: 100%;
`;


export const Icon = styled.span`
  color: ${(props) => props.theme.textColor};
  font-size: 2rem;
  margin: 1rem;
`
