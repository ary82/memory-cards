import CardList from "./CardList.jsx";
import Welcome from "./Welcome.jsx";
import "./styles/main.scss";
import { useState } from "react";

function App() {
  // Game States. 0 = welcome, 1 = easy mode, 2 = medium mode, 3 = hard mode
  const [game, setgame] = useState(0);
  return (
    <>
      {console.log(game)}
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
            <CardList num={game * 5} />
          </>
        )}
    </>
  );
}

export default App;
