import React, { useReducer, useCallback, useState, useEffect } from "react";
import "./styles.css";

import counterReducer from "./state/counter/reducer";
//import { DECREMENT, INCREMENT } from "./state/counter/types";
import * as counterActions from "./state/counter/actions";

export default function App() {
  const [counter, counterDipatch] = useReducer(
    counterReducer,
    0,
    (defaultState) => {
      //o  defaultState no inicio é o segundo parâmetro, no caso 0

      // a const LocalData receber um json convertido da chave count
      const LocalData = JSON.parse(localStorage.getItem("count"));

      // se o localData existir, retorna como defaultState o LocalData senão retorna o estato anterior
      return LocalData !== null ? LocalData : defaultState;
    }
  );
  useEffect(() => {
    //sempre que o counterMudar, a chave count é atualizada no localStorage
    //para salvar lo localStore é usado o Json.stringify
    localStorage.setItem("count", JSON.stringify(counter));
  }, [counter]);

  const [number, setNumber] = useState(0);

  const handleIncrease = useCallback(() => {
    counterDipatch(counterActions.increment(number));
  }, [counterDipatch, number]);

  const handleDecrease = useCallback(() => {
    counterDipatch(counterActions.decrement(number));
    //counterDipatch({ type: DECREMENT });
  }, [counterDipatch, number]);

  const handleNumber = useCallback((event) => {
    setNumber(event.target.value);
  }, []);

  const handleEnd = useCallback(() => {
    localStorage.removeItem("count");
    location.reload();
  }, []);

  return (
    <>
      <h1>Counting: {counter}</h1>
      <input type="number" value={number} onChange={handleNumber} />
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleEnd}> End</button>
    </>
  );
}
