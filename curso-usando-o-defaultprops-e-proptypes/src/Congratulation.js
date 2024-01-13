import React from "react";
import PropTypes from "prop-types";

export default function Congratulation({ name, standing }) {
  return (
    <div>
      <h1>Parabéns {name}!</h1>
      <h2> Você chegou na posição: {standing}</h2>
    </div>
  );
}

//set a default value
Congratulation.defaultProps = {
  name: "Cali",
  standing: "sem posição"
};

//set prop type - look at console log
Congratulation.propTypes = {
  name: PropTypes.string,
  standing: PropTypes.number.isRequired
};
