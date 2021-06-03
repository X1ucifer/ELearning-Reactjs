import React from 'react';

import styled from "styled-components";


const Viewers = (props) => {
    return (
        <Container>
            <Wrap>
                <h2>PROGRAMMING</h2>
                <video autoPlay={true} loop={true} playsInline={true} controls muted>
                    <source src="https://d1hk9wpr28zi3p.cloudfront.net/intro.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <h2>HACKING</h2>
                <video autoPlay={true} loop={true} playsInline={true} controls muted>
                    <source src="https://d1hk9wpr28zi3p.cloudfront.net/intro.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <h2>NETWORKING</h2>
                <video autoPlay={true} loop={true} playsInline={true} controls muted>
                    <source src="https://d1hk9wpr28zi3p.cloudfront.net/intro.mp4" type="video/mp4" />
                </video>
            </Wrap>
            {/* <Wrap>
                <h2>HACKING</h2>
            </Wrap>
            <Wrap>
                <h2>HACKING</h2>
            </Wrap> */}
        </Container>
    );
};

const Container = styled.div`
  margin-top: 30px;
  
  padding: 30px 10% 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 39.25%;
  margin-right: 15%;
  margin-left: 15%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  h2 {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 40%;
    text-align: center;
    font-size: x-large;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color:white;  //rgba(249, 249, 249, 0.8)

    video {
      opacity: 1;
    }
  }
`;

export default Viewers;