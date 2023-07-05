import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
const Header = () => {
  return (
    <MainHeader className="sticky">
      <NavLink to="/" className="logo">
        MY COMPANY.COM
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    text-decoration: none;
  }
`;
export default Header;
