import React, { useState } from "react";
import ReactDOM from "react-dom";
import Details from "./Details";

function App() {
  const [view, setView] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setView(!view);
        }}
      >
        Detalhes
      </button>
      {view && (
        <Details
          closed={() => {
            setView(false);
          }}
        />
      )}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
