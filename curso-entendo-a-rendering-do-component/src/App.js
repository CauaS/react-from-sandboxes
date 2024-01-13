import React, { useState, useCallback, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [weather, setWeather] = useState("Ensolarado");

  useEffect(() => {
    console.log("Renderizou");
  }, []);
  /*
  function handleClick() {
    setTimeout(() => {
      window.alert(`O clima é ${weather}`);
    }, 3000);
  }
*/
  const handleClick = useCallback(() => {
    setTimeout(() => {
      window.alert(`O clima é ${weather}`);
    }, 3000);
  }, [weather]);

  return (
    <>
      <h1>O clima está {weather}</h1>
      <button onClick={() => setWeather("Ensolado")}>Ensolarado</button>
      <button onClick={() => setWeather("Chuvoso")}>Chuvoso</button>
      <button onClick={() => setWeather("Numblado")}>Numblado</button>
      <button onClick={handleClick}> Mostra Clima!</button>
    </>
  );
}
