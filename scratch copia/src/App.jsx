import React, { useState } from "react";
import InputField from "./InputField";
import Canvas2 from "./Canvas2";
import "./style.css";

function App() {
  const [stringToShow, setStringToShow] = useState("");
  const [pokeUrl, setPokeUrl] = useState("");

  const handleChange = (e) => {
    setStringToShow(e.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    //useStringToShow(stringToShow)
  };
  return (
    <div className="App">
      <div className="container" id="container">
        <canvas className="canv"></canvas>
        <Canvas2 stringToShow={stringToShow} className="dd" />
      </div>
    </div>
  );
}

export default App;
