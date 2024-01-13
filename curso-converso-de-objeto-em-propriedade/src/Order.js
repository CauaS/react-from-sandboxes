import React from "react";

export default function Order(props) {
  return (
    <div>
      <p>
        <strong>Food:</strong>
        {props.food}
      </p>
      <p>
        <strong>Flavour:</strong>
        {props.flavour}
      </p>
    </div>
  );
}
