import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { detailSliceActions } from "../store/movieDetailSlice";
import { useHistory } from "react-router";

function Movies() {
  const [movieList, setMovieList] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  const moveToPage = ()=>{
    history.push('/detail');
  }

  const fetchMovies = async () => {
    const APIKEY = "ee52549b20042c4a597febafe87343fe";
    const resp = await fetch(`
https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_video=false&page=1`);
    const data = await resp.json();
    setMovieList(data.results);
    console.log(data.results);
    dispatch(detailSliceActions.setMovieDetail({movieDetail: data.results[0]}));
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  console.log(movieList);

  const renderMovies = (first, last) => {
    return movieList.length >= last
      ? movieList.slice(first, last).map((movie) => {
          return (
            <Wrap key={movie.id} onClick={moveToPage}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              />
              <Name>{movie.title}</Name>
            </Wrap>
          );
        })
      : "";
  };

  const RecommendedMovies = renderMovies(0, 8);
  const TrendingMovies = renderMovies(8, 16);

  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>{RecommendedMovies}</Content>
      <h4>Trending Movies</h4>
      <Content>{TrendingMovies}</Content>
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
