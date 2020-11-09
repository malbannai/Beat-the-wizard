import React, { useState } from "react";
import Style from "../styles";
import GameMessages from "../GameMessages";

function Input(props) {
  const randomNumber = props.random;
  const [input, setInput] = useState(0);
  const [gameMessage, setGameMessage] = useState("Let us PLAY!!!");
  const [hint, setHint] = useState("");
  const Message = GameMessages[Math.floor(Math.random() * GameMessages.length)];

  const handleSubmit = () => {
    if (randomNumber === +input) {
      setGameMessage("You Are Correct");
      setHint("");
    } else {
      if (props.attepmts !== 0) {
        props.setAttempts(props.attepmts - 1);
        setGameMessage(Message);
        if (+input <= randomNumber + 2 && +input >= randomNumber - 2) {
          setHint("I have to admit you are CLOSE");
        } else {
          setHint("You are not even close");
        }
      }
      if (props.attepmts === 0) {
        setGameMessage("You lost, try again if you dear");
        setHint("");
        props.setAttempts(3);
      }
    }
  };

  return (
    <div>
      {/* Input */}
      <input
        style={Style.inputBox}
        type="number"
        placeholder="Enter your number if you dear ..."
        onChange={(event) => setInput(event.target.value)}
      />
      {/* Button */}
      <p style={Style.button} onClick={() => handleSubmit()}>
        Try
      </p>
      <h3 style={Style.text}>Number of attempts left : {props.attepmts}</h3>
      <h3 style={Style.text}>{gameMessage}</h3>
      <h3 style={Style.text}>{hint}</h3>
    </div>
  );
}

export default Input;
