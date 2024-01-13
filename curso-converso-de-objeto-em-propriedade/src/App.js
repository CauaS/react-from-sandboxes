import React from "react";
import "./styles.css";

import Order from "./Order";

export default function App() {
  const order = {
    food: "pasta",
    flavour: "good"
  };
  return <Order {...order} />;
}
