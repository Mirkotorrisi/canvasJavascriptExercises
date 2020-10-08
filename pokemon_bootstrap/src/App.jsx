import React, { useState } from "react";
import InputField from "./components/InputField";
import ImgField from "./components/ImgField";
import Header from "./components/Header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
const [pokeName, setPokeName] = useState("");
const [pokeUrl, setPokeUrl] = useState("");

const handleChange =(e) =>{
  setPokeName(e.target.value)
}
const handleSubmit = (evt) => {
    evt.preventDefault();
    usePokename(pokeName)
  };
async function usePokename(pokenameToSend) {
  try {
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokenameToSend}`
    ).then((data) => data.json());
    //const res = await fetch(result.forms[0].url).then((data2) => data2.json());
    setPokeUrl(result.sprites.front_default);
  } catch (err) {}
}
  return (
    <div className="App">
      <Header/>
        <Container fluid className="bg-primary justify-content-center">
          <Row className="bg-danger justify-content-center">
          <ImgField pokeurl={pokeUrl}/>
          </Row>
          <Row className="justify-content-center">
          <InputField onSubmit={(e) =>handleSubmit(e)}  onChange ={(e) =>handleChange(e)}/>
          </Row>
        </Container>
    </div>
  );
}

export default App;
