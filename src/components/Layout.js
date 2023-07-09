import React, { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  gap: 20px;
  border-bottom: 3px solid #ffffff;
`;

const Li = styled.ul`
  padding-top: 10px;
`;

const StyledLink = styled(NavLink)`
  display: block;
  padding: 7px 15px;
  color: #ffffff;
  text-decoration: none;

  &:hover {
    color: #808191;
    text-decoration: none;
  }

  &.active {
    font-weight: 700;
    background-color: #ffffff;
    border-radius: 6px 6px 0 0;
    color: #ea5f5f;
  }
`;

const Layout = () => {
  return (
    <>
      <Ul>
        <Li>
          <StyledLink to="/">Home</StyledLink>
        </Li>
        <Li>
          <StyledLink to="post">Post</StyledLink>
        </Li>
      </Ul>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
