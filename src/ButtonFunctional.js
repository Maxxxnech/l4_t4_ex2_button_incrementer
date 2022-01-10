import React, { useState } from "react";

export default function ButtonFunctional(props) {
  const [counter, setCounter] = useState(0);
  const [entered, setEntered] = useState(false);
  function handleClick(e) {
    setCounter(counter + 1); //counter++ with const wont work!
  }
  function handleMouseEnter() {
    setEntered(true);
  }
  function handleMouseleave() {
    setEntered(false);
  }
  return (
    <button
      className={entered ? "buttonEntered" : undefined}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseleave}
    >
      Нажали {counter} раз
    </button>
  );
}
