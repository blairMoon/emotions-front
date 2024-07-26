import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import arrow from "./../assets/images/ion_arrow-back.svg";

const NavList = styled.div`
  width: 100%;
  padding: 18px 0;
  margin: 0;
  height: 60px;
  background-color: var(--Black-03, #1a1a1a);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  height: 24px;
`;

const CenterText = styled.div`
  color: var(--White-01, #f4f4f4);
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.36px;
`;

const NavBarArrow = ({ text, to }) => {
  return (
    <NavList>
      <NavLink to={to}>
        <img src={arrow} alt="navigation arrow"></img>
      </NavLink>
      <CenterText>{text}</CenterText>
      <div style={{ width: "24px" }}></div>
    </NavList>
  );
};

export default NavBarArrow;
