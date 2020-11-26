import React, { useState } from "react";
import styled from "styled-components";

const CityInput = ({ setCity }) => {
  const [formInput, setFormInput] = useState("");

  const handleFormSubmit = (e) => {
    setCity(formInput);
    setFormInput("");
    e.preventDefault();
  };

  return (
    <StyledForm>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={formInput}
          onChange={(e) => setFormInput(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </StyledForm>
  );
};

const StyledForm = styled.div`
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      display: inline-block;
      padding: 1rem;
      width: 100%;
      font-size: 1rem;
      font-family: "Quicksand", sans-serif;
    }
    button {
      width: 300px;
      margin: 1rem;
      padding: 1rem;
      font-size: 1rem;
      font-family: "Quicksand", sans-serif;
      letter-spacing: 0.25rem;
      font-weight: bold;
      background-color: #6c63ff;
      color: #fff;
      border-radius: 15px;
      cursor: pointer;
      transition: background-color 0.5s ease;
      &:hover {
        background-color: #fff;
        color: #6c63ff;
      }
    }
  }
`;

export default CityInput;
