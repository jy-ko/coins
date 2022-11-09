import React from "react";
import Icon from "../homeIcon.png";
import styled from "styled-components";

const Button = styled.button`
  background: ${({ theme }) => theme.bgColor};
  border: 2px solid ${({ theme }) => theme.accentColor};
  color: ${({ theme }) => theme.accentColor};
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  right: 0;
  }
  img {
    width: 32px;
  }
  
`;
const HomeButton = () => {
  return (
    <Button>
      <img src={Icon} alt="home icon" />
    </Button>
  );
};

export default HomeButton;
