import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import CityInput from "./CityInput";

const api = axios.create({
  baseUrl:
    "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=4aa1128f6fa7655f7f0ea41dc03cc0a1",
});

const MainContainer = () => {
  const [weather, setWeather] = useState("NO Data");
  const [city, setCity] = useState("Seattle");
  api
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4aa1128f6fa7655f7f0ea41dc03cc0a1`
    )
    .then((res) => {
      setWeather(res.data.weather[0].main);
    });

  return (
    <StyledContainer>
      <h2>Main Container</h2>
      <CityInput setCity={setCity} />
      <p className="city">{city}</p>
      <p>{weather}</p>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin: 2rem 0;
  }
  .city {
    margin: 2rem;
  }
`;

export default MainContainer;
