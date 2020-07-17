import React from "react";
import styled from "styled-components";

import { Typography } from "@material-ui/core";

import backgroundVedio from "../videos/background.mp4";

function MainPage() {
  return (
    <Container>
      <Section1>
        <Section1Left>
          <Section1Title>
            <div>SANGMYUNG</div>
            <div>SOFTWARE</div>
            <div>SEMINAR</div>
          </Section1Title>
        </Section1Left>
        <Section1Right></Section1Right>
      </Section1>
      <VideoBackground autoPlay loop={true}>
        <source src={backgroundVedio} type="video/mp4" />
      </VideoBackground>
      <Section2></Section2>
      <Section3></Section3>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const VideoBackground = styled.video`
  position: relative;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  overflow: hidden;
  background-color: white;
`;

const Section1 = styled.div`
  width: 100%;

  position: absolute;
`;
const Section1Left = styled.div`
  height: 100%;
  width: 50%;
  padding: 5%;
`;
const Section1Title = styled.div`
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 6vmax;

  animation-name: fadein;
  animation-duration: 2s;
  animation-delay: 0s;
  /* animation-iteration-count: infinite; */
  animation-timing-function: linear;
  animation-direction: alternate;
  text-shadow: 0 0 10px #cccccc, 0 0 15px #cccccc, 0 0 20px #e6e6e6;
  /* 0 0 23px #d9d9d9, 0 0 25px #d9d9d9, 0 0 30px #cccccc; */
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Section1Right = styled.div`
  height: 100%;
  width: 50%;
`;

const Section2 = styled.div`
  height: 500px;
  background-color: #1dd19f;
`;

const Section3 = styled.div`
  height: 500px;
  background-color: #11a19f;
`;
export default MainPage;
