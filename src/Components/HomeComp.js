import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Movies from './Movies'
import Viewers from './Viewers'


function HomeComp() {
  return (
    <Container>
     <ImgSlider/>
     <Viewers/>
     <Movies page="home"/>
    </Container>
  )
}

export default HomeComp


export const Container = styled.main`
 overflow-x:hidden;
  min-height: calc(100vh - 70px);
  padding: 0 4vw;
  position: relative;
  &:before {
    background: url("/images/home-background.png") center center / cover no-repeat
      fixed;
      z-index:-100;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
  }
`;