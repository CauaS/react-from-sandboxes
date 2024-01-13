import React from "react";

function PostalCodeTable({ cep, address, district, city, state }) {
  return (
    <table>
      <thead>
        <tr>
          <th>CEP</th>
          <th>Endereço</th>
          <th>Bairro</th>
          <th>Cidade</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{cep}</td>
          <td>{address}</td>
          <td>{district}</td>
          <td>{city}</td>
          <td>{state}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default PostalCodeTable;
