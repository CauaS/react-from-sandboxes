import React, { useState, useCallback } from "react";
import "./styles.css";

export default function App() {
  const [size, setSize] = useState("large");

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      window.alert(size);
    },
    [size]
  );

  const handleRadio = useCallback(event => {
    setSize(event.target.value);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        checked={size === "small"}
        type="radio"
        value="small"
        id="rd-small"
        onChange={handleRadio}
      />
      <label htmlFor="rd-small">Small </label>
      <br />
      <input
        checked={size === "medium"}
        type="radio"
        value="medium"
        id="rd-mid"
        onChange={handleRadio}
      />
      <label htmlFor="rd-mid">Mid </label>
      <br />
      <input
        checked={size === "large"}
        type="radio"
        value="large"
        id="rd-large"
        onChange={handleRadio}
      />
      <label htmlFor="rd-large">Large </label>
      <br />
      <input type="submit" />
    </form>
  );
}
