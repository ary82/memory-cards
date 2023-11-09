import CardList from "./CardList.jsx";
import Welcome from "./Welcome.jsx";
import "./styles/main.scss";
import { useState } from "react";

function App() {
  // Game States. 0 = welcome, 1 = easy mode, 2 = medium mode, 3 = hard mode
  const [game, setgame] = useState(0);
  // Score States
  const [chosenArray, setchosenArray] = useState([]);
  function checkSame(string) {
    chosenArray.includes(string) ? console.log("wrong") : (
      setchosenArray([...chosenArray, string]), console.log("right")
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
            <h1 className="title">Memory Game</h1>
            <h2>Score: {chosenArray.length}</h2>
            <CardList num={game * 5} check={(string) => checkSame(string)} />
          </>
        )}
    </>
  );
}

export default App;
