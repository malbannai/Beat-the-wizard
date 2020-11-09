import React from "react";
import Style from "../styles";

function Head(props) {
  const numberOfAttepmts = props.numberOfAttepmts;
  return (
    <div>
      <img src="wizard.png" style={Style.image} alt="wizard image" />
      <h1 style={Style.text}>Beat The Wizard</h1>
      <h3 style={Style.text}>
        You have {numberOfAttepmts} attempts in this game
      </h3>
      <h3 style={Style.text}>use them wisly</h3>
      <h3 style={Style.text}>The numbers are between 0 and {props.max}</h3>
    </div>
  );
}

export default Head;
