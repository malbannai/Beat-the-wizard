import React, { useState } from "react";
import Head from "./components/Head";
import Input from "./components/Input";
import Style from "./styles";

const max = 50;
const randomNumber = Math.round(Math.random() * max);

function App() {
  const numberOfAttepmts = 3;
  const [attepmts, setAttempts] = useState(3);
  return (
    <div style={Style.layout}>
      <Head numberOfAttepmts={numberOfAttepmts} max={max} />
      <Input
        random={randomNumber}
        numberOfAttepmts={numberOfAttepmts}
        attepmts={attepmts}
        setAttempts={setAttempts}
        randomNumber={randomNumber}
      />
    </div>
  );
}

export default App;
