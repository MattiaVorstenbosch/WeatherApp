import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  margin: auto;
  margin-top: 100px;
  border-radius: 10px;
  padding: 20px;
  background-color: #eee;
`;

const Label = styled.label`
  display: inline-block;
  color: #000;
  margin: auto;
  font-size: 16px;
`;

const Input = styled.input`
  border-radius: 5px;
  display: inline-block;
  padding: 5px;
  height: 20px;
  width: 300px;
  margin: 20px auto;
  font-size: 16px;
  text-align: center;
`;

const SubmitCityBtn = styled.button`
  display: inline-block;
  padding: 10px 5px;
  margin: 10px 5px;
  border-radius: 10px;
  background: #00a9e8;
  color: white;
  font-size: 16px;
  &:hover {
    background-color: #10a2d8;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

interface CitySearchProps {
  onChangeHandler: any;
  onClickHandler: any;
}

const CitySearch: React.FC<CitySearchProps> = ({
  onChangeHandler,
  onClickHandler,
}) => {
  return (
    <Form>
      <Label htmlFor="input">Search for a city to reveal weather</Label>
      <Input
        id="input"
        type="text"
        placeholder="city"
        required
        onChange={onChangeHandler}
      />
      <SubmitCityBtn type="submit" onClick={onClickHandler}>
        Give me the weather!
      </SubmitCityBtn>
    </Form>
  );
};

export default CitySearch;
