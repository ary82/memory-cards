import CardList from "./CardList.jsx";
import Welcome from "./Welcome.jsx";
import End from "./End.jsx";
import "./styles/main.scss";
import { useEffect, useState } from "react";

function App() {
  // Game States. 0 = welcome, 1 = easy mode, 2 = medium mode, 3 = hard mode
  // .1 = win, .2 = lose
  const [game, setgame] = useState(0);
  // Score States
  const [chosenArray, setchosenArray] = useState([]);

  // Initialize localstorage for max Score
  if (!localStorage.getItem("maxScore")) {
    localStorage.setItem("maxScore", JSON.stringify(0));
  }
  const [maxScore, setmaxScore] = useState(
    JSON.parse(localStorage.getItem("maxScore")),
  );

  // Update Maxscore
  useEffect(() => {
    if (chosenArray.length >= maxScore) {
      setmaxScore(chosenArray.length);
      localStorage.setItem("maxScore", JSON.stringify(chosenArray.length));
    }
    if (chosenArray.length === (game * 5) && game !== 0) {
      setgame(game + 0.1);
    }
  }, [chosenArray.length]);

  // Function for checking if button has already been pressed
  function checkSame(string) {
    chosenArray.includes(string) ? setgame(game + 0.2) : (
      setchosenArray([...chosenArray, string])
    );
  }
  return (
    <>
      {game === 0
        ? (
          <Welcome
            easy={() => setgame(1)}
            medium={() => setgame(2)}
            hard={() => setgame(3)}
          />
        )
        : (
          <>
            {(game - Math.floor(game) <= 0.11 && game - Math.floor(game) > 0)
              ? (
                <End
                  win={true}
                  home={() => {
                    setchosenArray([]);
                    setgame(0);
                  }}
                  restart={() => {
                    setchosenArray([]);
                    setgame(Math.floor(game));
                  }}
                  currentMode={Math.floor(game)}
                />
              )
              : (game - Math.floor(game) <= 0.21 && game - Math.floor(game) > 0)
              ? (
                <End
                  win={false}
                  home={() => {
                    setchosenArray([]);
                    setgame(0);
                  }}
                  restart={() => {
                    setchosenArray([]);
                    setgame(Math.floor(game));
                  }}
                  currentMode={Math.floor(game)}
                />
              )
              : false}
            <h1 className="title">Memory Game</h1>
            <div className="scorelist">
              <h3>Score: {chosenArray.length}</h3>
              <h3>Max Score: {maxScore}</h3>
            </div>
            <CardList num={game * 5} check={(string) => checkSame(string)} />
          </>
        )}
    </>
  );
}

export default App;
