import CardList from "./CardList.jsx";
import Welcome from "./Welcome.jsx";
import Win from "./Win.jsx";
import Lose from "./Lose.jsx";
import "./styles/main.scss";
import { useEffect, useState } from "react";

function App() {
  // Game States. 0 = welcome, 1 = easy mode, 2 = medium mode, 3 = hard mode
  // 4 = won, 5 = lose
  const [game, setgame] = useState(0);
  // Score States
  const [chosenArray, setchosenArray] = useState([]);

  // Initialize localstorage
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
    if (chosenArray.length === (game * 5)) {
      setgame(4);
    }
  }, [chosenArray.length]);

  // Function for checking if button has already been pressed
  function checkSame(string) {
    chosenArray.includes(string) ? setgame(5) : (
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
        : game === 4
        ? <Win />
        : game === 5
        ? <Lose />
        : (
          <>
            <h1 className="title">Memory Game</h1>
            <h3>Score: {chosenArray.length}</h3>
            <h3>Max Score: {maxScore}</h3>
            <CardList num={game * 5} check={(string) => checkSame(string)} />
          </>
        )}
    </>
  );
}

export default App;
