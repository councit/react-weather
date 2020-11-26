import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li>React To Weather</li>
        <li>About</li>
      </ul>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.div`
  height: 70px;
  width: 100%;
  background-color: #6c63ff;

  ul {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0rem 5rem;
    li {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;
