import { useState, useRef } from "react";
import {
  getUniqlyRandomSentenceGenerator,
  getUniqlyRandomWordGenerator,
} from "./WordGenerator";
import Countdown from "./Countdown";

function GameCard({ time, mode, onFinish }) {
  const generatorRef = useRef(
    mode === "word"
      ? getUniqlyRandomWordGenerator()
      : getUniqlyRandomSentenceGenerator(),
  );

  console.log(mode);

  const [score, setScore] = useState(0);
  const [textValue, setTextValue] = useState("");
  const [currentRandomText, setCurrentRandomText] = useState(() =>
    generatorRef.current(),
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setTextValue(value);

    if (value.trim() === currentRandomText.trim()) {
      setScore((prev) => prev + 1);
      setTextValue("");
      setCurrentRandomText(generatorRef.current());
    }
  };

  const RenderText = () => {
    let characterList = currentRandomText.split("");
    let enteredChars = textValue.split("");

    return (
      <p className={`font-bold text-xl text-center my-4`}>
        {characterList.map((item, index) => {
          if (index < enteredChars.length) {
            return (
              <span
                className={`${item != enteredChars[index] ? "text-red-700" : "text-green-700"} underline`}
              >
                {item}
              </span>
            );
          } else return <span className="text-gray-800">{item}</span>;
        })}
      </p>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center bg-amber-600 w-screen h-screen px-4">
      <div className="flex flex-col gap-4 shadow-xl shadow-gray-500 bg-white rounded-md p-8 max-w-[560px] w-full">
        <p className="flex flex-row justify-between font-bold text-gray-700">
          <span>Score: {score}</span>
          <Countdown time={time} onFinish={onFinish} />
        </p>

        {RenderText()}

        <input
          className="w-full p-3 border-2 rounded-lg focus:outline-none transition-colors duration-200 bg-white text-gray-800 border-gray-300 focus:border-amber-500"
          placeholder="Type here..."
          dir="ltr"
          type="text"
          value={textValue}
          onChange={handleInputChange}
          autoFocus
        />
      </div>
    </div>
  );
}

export default GameCard
