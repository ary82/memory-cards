import React from "react";
import "./styles/welcome.scss";

export default function Welcome() {
  return (
    <div className="welcome">
      <h1 className="title">Memory Game</h1>
      <h3 className="how-to">How to Play</h3>
      <p className="description">
        Clicking the same Card twice will end the game. Click all cards once to
        win!
        <div className="modes">
          <button className="easy">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
              alt=""
            />
            <h2>Easy</h2>
          </button>
          <button className="medium">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
              alt=""
            />
            <h2>Medium</h2>
          </button>
          <button className="hard">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
              alt=""
            />
            <h2>Hard</h2>
          </button>
        </div>
      </p>
    </div>
  );
}
