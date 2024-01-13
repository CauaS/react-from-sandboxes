import React, { useCallback, useState } from "react";
import "./styles.css";

export default function App() {
  const [code, setCode] = useState("oracle");
  const [options, setOptions] = useState([
    "Java",
    "Oracle",
    "Python",
    "Javacript"
  ]);

  const handleSubmit = useCallback(event => {
    event.preventDefault();
  }, []);

  const handleValue = useCallback(event => {
    setCode(event.target.value);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <select value={code} onChange={handleValue}>
        {options.map(item => (
          <option value={item.toLowerCase()}>{item}</option>
        ))}
      </select>
      <input type="submit" value="Mostar" />
    </form>
  );
}
