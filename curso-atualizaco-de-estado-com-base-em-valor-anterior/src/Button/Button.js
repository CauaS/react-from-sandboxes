import React from "react";

function Button({ title, clicked }) {
  return <button onClick={clicked}>{title}</button>;
}

export default Button;
