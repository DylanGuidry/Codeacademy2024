import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {

  // get the navigate function
  const nevigate = useNavigate()

  const goBack = () => {
    // imperatively redirect back
    nevigate(-1)
  }

  const goForward = () => {
    // imperatively redirect forward
    nevigate(1)
  }

  return (
    <footer>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button>
    </footer>
  );
}
