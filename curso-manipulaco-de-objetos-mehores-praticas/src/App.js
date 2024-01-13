import React, { useState, useCallback } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState({
    name: "John",
    address: {
      street: "First Street",
      number: "12"
    },
    distance: "15"
  });

  const handleCreate = useCallback(() => {
    let newKey = { ...data };
    newKey.city = "London";
    setData(newKey);
  }, [data, setData]);

  const handleDelete = useCallback(() => {
    let newKey = { ...data };
    delete newKey.distance;
    setData(newKey);
  }, [data, setData]);

  const handleUpdate = useCallback(() => {
    let newKey = { ...data };
    newKey.name = { ...data.name };
    newKey.name = "Cali";
    setData(newKey);
  }, [data, setData]);

  return (
    <>
      {data.name && <span>Hello! {data.name}, welcome back!</span>}
      <br />
      {data.address.street && (
        <span>
          Address: {data.address.street}, {data.address.number}
        </span>
      )}{" "}
      <br />
      {data.distance && (
        <span>Distance from here: {data.distance}km.</span>
      )}{" "}
      <br />
      {data.city && <span>You are living in: {data.city}.</span>} <br />
      <button onClick={handleCreate}>Add</button>
      <br />
      <button onClick={handleDelete}>Delete</button>
      <br />
      <button onClick={handleUpdate}>Update</button>
    </>
  );
}
