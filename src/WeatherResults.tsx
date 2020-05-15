import React from "react";
import styled from "styled-components";

interface WeatherResultsProps {
  city: string;
  weather: string;
  type: string;
  icon: string;
}

const StyledResults = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  color: white;
  font-size: 16px;
  margin: auto;
  text-align: center;
`;

const Image = styled.img`
  display: inline-block;
  margin: auto;
`;

const WeatherResults: React.FC<WeatherResultsProps> = ({
  city,
  weather,
  type,
  icon,
}) => {
  return (
    <StyledResults>
      <h3>{city}</h3>
      <Image src={icon} alt={type} />
      <h1>{weather}</h1>
    </StyledResults>
  );
};

export default WeatherResults;
