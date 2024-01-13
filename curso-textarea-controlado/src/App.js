import React, { useState, useCallback } from "react";
import "./styles.css";

export default function App() {
  const [textArea, setTextArea] = useState("");

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      window.alert(textArea);
    },
    [textArea]
  );

  const handleTextArea = useCallback(event => {
    setTextArea(event.target.value);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows="5"
        cols="50"
        value={textArea}
        onChange={handleTextArea}
        className="textArea"
      />
      <input type="submit" value="Enviar" />
    </form>
  );
}
