import React, { useState } from "react";

const CityInput = ({ setCity }) => {
  const [formInput, setFormInput] = useState("");

  const handleFormSubmit = (e) => {
    setCity(formInput);
    setFormInput("");
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={formInput}
          onChange={(e) => setFormInput(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CityInput;
