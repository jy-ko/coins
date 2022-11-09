import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"
import Icon from "../darkmode.png"

const Button = styled.button`
  background: ${({ theme }) => theme.bgColor};
  border: 2px solid ${({ theme }) => theme.accentColor};
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  right: 0;
  }
  img {
    width: 32px;
  }
  
`;
const Toggle = ({theme,  toggleTheme }) => {
    return (
        <Button onClick={toggleTheme} >
          <img src={Icon} alt="darkmode icon"/>
        </Button>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;
