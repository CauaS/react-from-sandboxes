import React from "react";
import "./styles.css";

import Menu from "./Menu";

export default function App() {
  return (
    <>
      <Menu category="textarea" cols={50} />
      <Menu category="button" style={{ width: 100, height: 100 }} />
    </>
  );
}
