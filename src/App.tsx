import React, { useState, useEffect } from "react";
import CitySearch from "./CitySearch";
import styled from "styled-components";
import WeatherResults from "./WeatherResults";

const StyledApp = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    11deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 91, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  height: 100vh;
  width: 100vw;
  position: absolute;
`;

const Error = styled.h3`
  margin: auto;
  color: white;
  display: block;
  text-align: center;
  margin-top: 20px;
`;

interface WeatherObject {
  id: number;
  main: string;
  icon: string;
  description: string;
}

const DEFAULT_WEATHER: WeatherObject = {
  id: 0,
  main: "",
  icon: "",
  description: "",
};

const API_KEY = "1a52b846b8d6b3bdd0ee90695ddb5afa";

const fetchWeather = async (city: String) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  ).then((res) => res.json());
  return response.weather;
};

function App() {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<WeatherObject>(DEFAULT_WEATHER);
  const [WeatherImage, setWeatherImage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: any) => {
    event.preventDefault();
    setError(null);
    setCity(event.target.value);
    setWeather(DEFAULT_WEATHER);
  };

  const handleClick = async (event: any) => {
    event.preventDefault();
    try {
      const [weather] = await fetchWeather(city);
      setWeather(weather);
    } catch (e) {
      setError(`'${city}' is not a valid city, try 'Nijmegen' or 'Boston'`);
    }
  };

  useEffect(() => {
    if (weather.icon) {
      fetch(`http://openweathermap.org/img/wn/${weather.icon}@2x.png`)
        .then((res) => setWeatherImage(res.url))
        .catch((err) => console.error(err));
    }
  }, [weather]);

  return (
    <StyledApp>
      <CitySearch onChangeHandler={handleChange} onClickHandler={handleClick} />
      {error ? (
        <Error>{error}</Error>
      ) : (
        <WeatherResults
          city={city}
          weather={weather.description}
          type={weather.main}
          icon={WeatherImage}
        />
      )}
    </StyledApp>
  );
}

export default App;
