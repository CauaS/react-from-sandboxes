import React, { useRef, useCallback } from "react";
import "./styles.css";

export default function App() {
  const inputName = useRef(null);
  const handleSubmit = useCallback(event => {
    event.preventDefault();

    console.log(inputName);

    window.alert(inputName.current.value);
    inputName.current.value = "";
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name"> Name: </label>
      <input type="text" id="name" ref={inputName} autoComplete="off" />
      <input type="submit" />
    </form>
  );
}
