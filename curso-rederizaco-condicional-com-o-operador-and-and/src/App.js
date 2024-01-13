import React, { useState } from "react";
import "./styles.css";

import Menu from "./Menu";

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}> Show </button>
      {show && <Menu />}
    </>
  );
}
