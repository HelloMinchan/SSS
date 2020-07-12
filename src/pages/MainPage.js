import React from "react";
import styled from "styled-components";

import { Typography } from "@material-ui/core";

import backgroundVedio from "../videos/background.mp4";

function MainPage() {
  return (
    <Container>
      <VideoBackground autoPlay loop>
        <source src={backgroundVedio} type="video/mp4" />
      </VideoBackground>
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
      <Section2></Section2>
      <Section3></Section3>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  background-color: #12342f;
`;

const VideoBackground = styled.video`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  overflow: hidden;
`;

const Section1 = styled.div`
  height: 100vh;
  padding: 5%;
`;
const Section1Left = styled.div`
  height: 100%;
  width: 50%;
`;
const Section1Title = styled.div`
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 6vmax;
  animation-name: fadeOut;
  animation-duration: 1s;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  animation-direction: alternate;
  text-shadow: 0 0 10px #cccccc, 0 0 20px #cccccc, 0 0 30px #e6e6e6,
    0 0 40px #d9d9d9, 0 0 70px #00ccff, 0 0 80px #cccccc;
  @keyframes fadeOut {
    0% {
      opacity: 1;
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
