import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const NavBarContainer = styled.nav`
  background-color: #f8f9fa;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

const NavBar = () => {
  return (
    <div>
      <NavBarContainer>
        <NavList>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/diary">DiaryForm</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/calendar">Calendar</NavLink>
          </NavItem>
        </NavList>
      </NavBarContainer>
    </div>
  );
};

export default NavBar;
