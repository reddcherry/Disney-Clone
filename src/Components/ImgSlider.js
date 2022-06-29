import React from 'react';
import {Fragment} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

function ImgSlider() {
 let settings={
  dots:true,
  infinite:true,
  speed:500,
  slidesToShow:1,
  slidesToScroll:1,
  autoplay:true,
 }


  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badag.jpg" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badging.jpg" />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;
const Carousel = styled(Slider)`
  .slick-list {
    overflow: visible;
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: white;
    }
  }
  li.slick-active button:before {
    color: white;
  }
  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;

  margin-top: 20px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    
    border: 4px solid transparent;
    &:hover {
      border: 2px solid rgba(249, 249, 249, 0.8);
    }
  }
`;