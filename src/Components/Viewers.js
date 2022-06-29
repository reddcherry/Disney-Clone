import React from 'react'
import styled from 'styled-components'


function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" />
      </Wrap>{" "}
      <Wrap>
        <img src="/images/viewers-pixar.png" />
      </Wrap>{" "}
      <Wrap>
        <img src="/images/viewers-marvel.png" />
      </Wrap>{" "}
      <Wrap>
        <img src="/images/viewers-starwars.png" />
      </Wrap>{" "}
      <Wrap>
        <img src="/images/viewers-national.png" />
      </Wrap>
    </Container>
  );
}

export default Viewers

const Container = styled.div`
margin-top:30px;
display:grid;
grid-gap:25px;
grid-template-columns:repeat(5, minmax(0, 1fr));

`
const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  cursor:pointer;
  box-shadow: rgba(0, 0, 0, .69) 0px 26px 30px -10px;
  border-radius: 10px;
  transition: all 250px linear;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;