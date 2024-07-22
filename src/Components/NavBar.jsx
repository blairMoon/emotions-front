import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import calendar from "./../assets/images/calendar.svg";
import setting from "./../assets/images/setting.svg";
const NavBarContainer = styled.nav`

`;

const NavList = styled.ul`
width: 100%;
  display: flex;
  justify-content: end;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;

 
`;

const NavBar = () => {
  return (
    
      
        <NavList>
           <NavItem>
            <NavLink to="/calendar"><img src={calendar}></img></NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/diary"><img src={setting}></img></NavLink>
          </NavItem>
        
        </NavList>

  
  );
};

export default NavBar;
