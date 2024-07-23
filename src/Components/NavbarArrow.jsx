import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import calendar from "./../assets/images/calendar.svg";
import setting from "./../assets/images/setting.svg";
import arrow from "./../assets/images/ion_arrow-back.svg"
const NavBarContainer = styled.nav`

`;

const NavList = styled.ul`
display: flex;
width: 375px;
height: 60px;
  padding: 16px;

flex-shrink: 0;
 
  margin: 0 auto;
height: 60px;

  background-color: black;
  display: flex;
  flex-direction: column;
  position: relative;




`;

const NavItem = styled.li`
  
`;

const NavLink = styled(Link)`
  text-decoration: none;
 
  font-weight: bold;
//   padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;

 
`;

const NavBarArrow = () => {
  return (
    
      
        <NavList>
  

          <NavItem>
            <NavLink to="/diary"><img src={arrow}></img></NavLink>
          </NavItem>
        
        </NavList>

  
  );
};

export default NavBarArrow;
