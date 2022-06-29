import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
        <Logo src="/images/logo.svg"></Logo>
      
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
      </NavMenu>
      <Container>
        <UserImg src="/images/Sample_User_Icon.png" />
      </Container>
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  height: 70px;
  background: black;
  display: flex;
  
  align-items: center;
  padding: 0 36px;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 2rem;
  a {
    display: flex;
    margin-left: 2rem;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
    img {
      height: 20px;
      margin-right: 0.2rem;
    }
    span {
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        bottom: -6px;
        left: 0;
        right: 0;
        opacity: 0;
        transform:scaleX(0);
      }
    }
    &:hover{
      span:after{
        transform:scaleX(1);
        opacity:1;
        transition:all 0.2s linear;
      }
    }
  }
`;
const Container = styled.div`
  background: #f0f0f0;
  align-self:right;
  border-radius: 50%;
  cursor:pointer;
`;
const UserImg = styled.img`
  width: 40px;
`;