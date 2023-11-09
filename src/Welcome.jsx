import React from "react";
import "./styles/welcome.scss";

export default function Welcome({ easy, medium, hard }) {
  return (
    <div className="welcome">
      <h1 className="title">Memory Game</h1>
      <div className="modes">
        <button className="easy" onClick={() => easy()}>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
            alt=""
          />
          <h2>Easy</h2>
        </button>
        <button className="medium" onClick={() => medium()}>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
            alt=""
          />
          <h2>Medium</h2>
        </button>
        <button className="hard" onClick={() => hard()}>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
            alt=""
          />
          <h2>Hard</h2>
        </button>
      </div>
      <h3 className="how-to">How to Play</h3>
      <p className="description">
        Clicking the same Card twice will end the game. Click all cards once to
        win. Select a mode and Test your Memory!
      </p>
    </div>
  );
}
