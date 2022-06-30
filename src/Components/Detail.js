import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux/es/exports";

function Detail() {
  const movieDetail = useSelector(state=>state.detail.movieDetail)
console.log(movieDetail);
  return 
  // (
  //   <Container>
  //     <Background>
  //       <img
  //         src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
  //       />
  //     </Background>
      
  //     <Controls>
  //       <PlayButton>
  //         <img src="/images/play-icon-black.png" />
  //         <span>Play</span>
  //       </PlayButton>
  //       <TrialerButton>
  //         <img src="/images/play-icon-white.png" />
  //         <span>Trailer</span>
  //       </TrialerButton>
  //       <AddButton>
  //         <span>+</span>
  //       </AddButton>
  //     </Controls>
  //     <SubTitle>
  //       {movieDetail.release_date.slice(0, 4)} • 107m • Fantasy •IMDB Rating:
  //       {movieDetail.vote_average}
  //     </SubTitle>
  //     <Description>{movieDetail.overview}</Description>
  //   </Container>
  // );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 250px);
  padding: 0 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity:0.8;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  margin-top:3rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
margin-top:10rem;
display:flex;
margin-left:2rem;
`;
const PlayButton = styled.button`
border-radius:4px;
font-size:15px;
display:flex;
align-items:center;
height:56px;
background:#fff;
border:none;
padding:0px 24px;
margin-right:22px;
letter-spacing:1.8px;
cursor:pointer;
&:hover{
 background:rgb(198, 198, 198);
}
`;

const TrialerButton = styled(PlayButton)`
background:rgba(0,0,0,0.3);
color:#fff;
border:1px solid rgb(249, 249, 249);
`;

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    transform: scale(1.05);
  }
`;

const SubTitle = styled.div`
margin-top:2rem;
margin-left:2rem;
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  margin-left:2rem;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;