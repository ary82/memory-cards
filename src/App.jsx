import CardList from "./CardList.jsx";
import "./styles/main.scss"

function App() {
  return (
    <>
      <h1 className="title">Memory Game</h1>
      <CardList num="5" />
    </>
  );
}

export default App;
