import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import arrow from "./../assets/images/ion_arrow-back.svg";

const NavList = styled.ul`
  display: flex;
  width: 100%;
  padding: 18px 0;
  margin: 0;
  height: 60px;
  background-color: var(--Black-03, #1a1a1a);
  display: flex;
  flex-direction: column;
  position: relative;
  list-style-type: none;
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  text-decoration: none;

  font-weight: bold;

  border-radius: 4px;
  transition: background-color 0.3s ease;
`;

const NavBarArrow = () => {
  return (
    <NavList>
      <NavItem>
        <NavLink to="/diary">
          <img src={arrow} alt="navigation arrow"></img>
        </NavLink>
      </NavItem>
    </NavList>
  );
};

export default NavBarArrow;
