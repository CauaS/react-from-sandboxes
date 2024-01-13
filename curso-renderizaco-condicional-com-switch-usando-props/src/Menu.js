import React from "react";

export default function Menu(props) {
  //com o ...props, cada pros passada pro component se torna um chave,
  //assism, é possível passar várias props, e desestruturar elas por elemento

  switch (props.category) {
    case "input":
      return <input {...props} />;
    case "textarea":
      return <textarea {...props} />;
    case "button":
      return <button {...props} />;
    default:
      return <input {...props} />;
  }
}
