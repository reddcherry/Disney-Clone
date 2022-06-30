import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Results from "./Results";

function Header() {
  const [isSearching, setIsSearching] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResultMovies, setSearchResultMovies] = useState([]);

  


  useEffect(()=>{
   const Timer = search&& setTimeout(async ()=>{
    try{const resp = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=ee52549b20042c4a597febafe87343fe&query=${search}`
      )
        const data = await resp.json();
        setSearchResultMovies(data.results.length>5?data.results.slice(0,5):data.results);
       
    
    }catch(e){
      console.log(e.message);
      }
    }, 10)
  !search && setSearchResultMovies([])
    return ()=> clearTimeout(Timer);
  }, [search])

 
  const SearchChangeHandler = (e)=>{

  setSearch(e.target.value);

  }

  return (
    <Nav>
      <Logo src="/images/logo.svg"></Logo>

      <NavMenu>
        <NavLink to="/">
          <img src="/images/home-icon.svg" />
          <span>HOME</span>
        </NavLink>

        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        {!isSearching && (
          <a onClick={setIsSearching.bind("", true)}>
            <img src="/images/search-icon.svg" />
            <span>SEARCH</span>
          </a>
        )}
        {isSearching && (
          <SearchResults>
            <div>
              <Input
                onChange={SearchChangeHandler}
                style={{ width: "25rem" }}
              />
              <Img src="/images/search-icon.svg" />
            </div>
            <Results searchResultMovies ={searchResultMovies}/>
          </SearchResults>
        )}
      </NavMenu>
      <div>
        <Container>
          <UserImg src="/images/Sample_User_Icon.png" />
        </Container>
      </div>
    </Nav>
  );
}

export default Header;

const SearchResults= styled.div`
width = 25rem;
position:relative;
`

const Input = styled.input`
margin-left:1rem;
background : transparent;
color:white;
border: solid 1px rgba(249, 249, 249, 0.2);
border-radius:2%;
`

const Img = styled.img`
      height: 20px;
      margin-right: 0.2rem;
      margin-bottom:-0.3rem;
      cursor:pointer;
`;

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
    color:#fff;
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



/*       */