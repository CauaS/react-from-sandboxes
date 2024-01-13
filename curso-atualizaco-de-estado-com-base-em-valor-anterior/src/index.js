import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import Button from "./Button/Button";
import Square from "./Square/Square";

function App() {
  const [visibility, setVisibility] = useState(true);
  const handleClick = useCallback(() => {
    setVisibility(prev => {
      return !prev;
    });
  }, [setVisibility]);
  return (
    <div>
      <Button title="Mostrar/Esconder" clicked={handleClick} />
      <Square show={visibility} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
