import React from "react";
import styled from "styled-components";

import rainSVG from "../assets/rain.svg";
import cloudSVG from "../assets/cloud.svg";
import sunSVG from "../assets/sun.svg";

const WeatherCard = ({ weather }) => {
  let weatherSVG = null;
  switch (weather) {
    case "Clouds":
      weatherSVG = cloudSVG;
      break;
    case "Rain":
      weatherSVG = rainSVG;
      break;
    case "Clear":
      weatherSVG = sunSVG;
      break;
    default:
      weatherSVG = null;
  }

  return (
    <StyledCard>
      <img alt="undraw weather" src={weatherSVG}></img>
      {console.log(weather)}
    </StyledCard>
  );
};

const StyledCard = styled.div`
  height: 500px;
  width: 480px;
  margin: 2rem 0rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #75c5ff;
  border-radius: 70px;
  img {
    z-index: 1;
    overflow: hidden;
  }
`;

export default WeatherCard;
