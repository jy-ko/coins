import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: ${(props) => props.theme.menuColor};
  width: 100%;
  margin-top: auto;
  bottom: 0;
  position: absolute;
`;


export const Icon = styled.span`
  color: ${(props) => props.theme.textColor};
  font-size: 2rem;
  margin: 1rem;
`
