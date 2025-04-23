import { useState, useRef } from "react";
import GameMenu from "./GameMenu";
import GameCard from "./Game";
import ResultCard from "./Result";

function App() {
  const [gameOptions, setGameOptions] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const gameResults = useRef();

  if (gameOptions.length) {
    return (
      <GameCard
        time={gameOptions[1]}
        mode={gameOptions[0]}
        caseSensitive={gameOptions[2]}
        onFinish={(result) => {
          setGameOptions([]);
          setIsGameOver(true);
          gameResults.current = result;
        }}
      />
    );
  } else if (isGameOver) {
    return <ResultCard results={gameResults.current} onStartAgain={() => {setIsGameOver(false)}}/>;
  } else {
    return (
      <GameMenu
        onGameStart={(mode, time, caseSensitive) => {
          setGameOptions([mode, time, caseSensitive]);
        }}
      />
    );
  }
}

export default App;
