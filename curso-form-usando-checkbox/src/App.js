import React, { useState, useCallback } from "react";
import "./styles.css";

export default function App() {
  const [checkbox, setCheckbox] = useState(false);
  const handleSubmit = useCallback(event => {
    event.preventDefault();
  }, []);
  const handleCheckbox = useCallback(event => {
    setCheckbox(event.target.checked);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="checkbox1"
        type="checkbox"
        defaultChecked={true}
        checked={checkbox}
        onChange={handleCheckbox}
      />
      <label htmlFor="checkbox1">Não sou a Claudia </label>

      <input
        id="checkbox2"
        type="checkbox"
        checked={checkbox}
        onChange={handleCheckbox}
      />
      <label htmlFor="checkbox2">Não sou o Cali </label>

      <input type="submit" />
    </form>
  );
}
