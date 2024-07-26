import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import calendar from "./../assets/images/calendar.svg";
import setting from "./../assets/images/setting.svg";

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
  z-index: 2;
`;

const NavItemWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.div`
  width: 28px;
  height: 28px;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #007bff;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const NavBar = () => {
  return (
    <NavContainer>
      <NavItemWrapper>
        <NavItem>
          <NavLink to="/calendar">
            <img src={calendar} alt="calendar" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/setting">
            <img src={setting} alt="setting" />
          </NavLink>
        </NavItem>
      </NavItemWrapper>
    </NavContainer>
  );
};

export default NavBar;
