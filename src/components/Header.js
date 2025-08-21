import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../styles/variables";
import { Link } from "react-router-dom";

const AppHeader = styled.header`
    background-color: ${colors.teritiary};
    padding: 20px;
    text-align: center;
    borer-bottom: 2px solid ${colors.primary};
`;

const Title = styled(Link)`
    color: ${colors.primary};
    font-size: 3em;
    text-decoration: none;
    font-family: ${fonts.starwars ? fonts.starwars : 'Impact, san-serif'};
    text-shadow: 0 0 10px ${colors.primary};
    transition: transform 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
    }
`;

const Header = () => {
  return (
    <AppHeader>
      {/* <Title to="/">Star Wars Explorer</Title> */}
      <Title>
        <Link to="/" >Star Wars Explorer</Link>
        </Title>
        
    </AppHeader>
  );
};

export default Header;