import React from "react";
import styled from "styled-components";

function Viewers() {
  const playVideo = (number) => {
    const vid = document.getElementById(number);
    vid.play();
  };

  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" />
        <video
          onMouseEnter={playVideo.bind("", "1")}
          autoplay
          muted
          loop
          id="1"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            height: "100%",
            width: "100%",
          }}
        >
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
          Sorry, your browser doesn't support embedded videos
        </video>
      </Wrap>{" "}
      <Wrap>
        <img src="/images/viewers-pixar.png" />
        <video
          autoplay
          muted
          loop
          id="2"
          onMouseEnter={playVideo.bind("", "2")}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            height: "100%",
            width: "100%",
          }}
        >
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
          Sorry, your browser doesn't support embedded videos
        </video>
      </Wrap>{" "}
      <Wrap>
        <img src="/images/viewers-marvel.png" />
        <video
          autoplay
          muted
          loop
          id="3"
          onMouseEnter={playVideo.bind("", "3")}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            height: "100%",
            width: "100%",
          }}
        >
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
          Sorry, your browser doesn't support embedded videos
        </video>
      </Wrap>{" "}
      <Wrap>
        <img src="/images/viewers-national.png" />
        <video
          autoplay
          muted
          loop
          id="4"
          onMouseEnter={playVideo.bind("", "4")}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            height: "100%",
            width: "100%",
          }}
        >
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
          Sorry, your browser doesn't support embedded videos
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" />
        <video
          autoplay
          muted
          loop
          id="5"
          onMouseEnter={playVideo.bind("", "5")}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            height: "100%",
            width: "100%",
            borderRadius: "10px",
          }}
        >
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
          Sorry, your browser doesn't support embedded videos
        </video>
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Video = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
`;
const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;
const Wrap = styled.div`
  position: relative;
  border: 3px solid rgba(249, 249, 249, 0.1);
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px;
  border-radius: 10px;
  transition: all 250px linear;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  video {
    opacity: 0;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
`;
