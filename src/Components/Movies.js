import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { useRef } from "react";

function Movies() {
  const [movieList, setMovieList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const history = useHistory();
  const containerRef = useRef();
  const location = useLocation().pathname;
  const movieDetails = useSelector((state) => state.watchlist.movieDetails);

  if (location == "/movies") {
    window.addEventListener("scroll", () => {
      if (
        containerRef.current &&
        window.scrollY > containerRef.current.offsetHeight - 400
      ) {
        setPageNumber((state) => state + 1);
      }
    });
  }

  const moveToPage = (id) => {
    history.push("/detail/" + id);
  };

  const fetchMovies = async () => {
    const APIKEY = "ee52549b20042c4a597febafe87343fe";
    const resp = await fetch(`
https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_video=false&page=${pageNumber}`);
    const data = await resp.json();

    setMovieList((prevState) =>
      prevState.length > 0 && prevState[0].id === data.results[0].id
        ? [...prevState]
        : [...prevState, ...data.results]
    );
  };

  useEffect(() => {
    if (location === "/") {
      fetchMovies();
    }

    if (location === "/movies") {
      fetchMovies();
    }
  }, [pageNumber]);

  const renderMovies = (renderList) => {
    return renderList.map((movie) => {
      return (
        <Wrap key={movie.id} onClick={moveToPage.bind("", movie.id)}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
          <Name>{movie.title}</Name>
        </Wrap>
      );
    });
  };

  const RecommendedMovies = renderMovies(movieList.slice(0, 8));
  const TrendingMovies = renderMovies(movieList.slice(9, 17));
  const AllMovies = renderMovies(movieList);
  const watchlistMovies = renderMovies(movieDetails);

  if (location == "/watchlist") {
    if (movieDetails.length == 0)
      return (
        <Container>
          <h1 style={{ textAlign: "center" }}>Your watchlist is empty!!</h1>
        </Container>
      );
    
    return (
      <Container>
        <h4>Your WatchList</h4>
        <Content>{watchlistMovies}</Content>
      </Container>
    );
  }

  return location == "/" ? (
    <Container>
      <h4>Recommended for you</h4>
      <Content>{RecommendedMovies}</Content>
      <h4>Trending Movies</h4>
      <Content>{TrendingMovies}</Content>
    </Container>
  ) : (
    <Container ref={containerRef}>
      <Content>{AllMovies}</Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;
const Name = styled.div`
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px;
  margin-bottom: 2rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    &:hover {
      opacity: 0.5;
    }
  }

  &:hover {
    transform: scaleX(1.2);
    transform: scaleY(1.2);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
