import { useState, useRef } from "react";
import {
  getUniqlyRandomSentenceGenerator,
  getUniqlyRandomWordGenerator,
} from "./WordGenerator";
import Countdown from "./Countdown";
import Card from "./Card";

function GameCard({ time, mode, caseSensitive, onFinish }) {
  const generatorRef = useRef(
    mode === "word"
      ? getUniqlyRandomWordGenerator()
      : getUniqlyRandomSentenceGenerator(),
  );

  const [score, setScore] = useState(0);
  const [textValue, setTextValue] = useState("");
  const numberOfErrors = useRef(0);
  const numberOfCharsWritten = useRef(0);
  const numberOfCorrectCharsWritten = useRef(0);

  const [currentRandomText, setCurrentRandomText] = useState(() =>
    generatorRef.current(),
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setTextValue(value);

    const currentCharIndex = value.length - 1;

    const expectedChar = currentRandomText[currentCharIndex];
    const typedChar = value[currentCharIndex];

    const isMatch = caseSensitive
      ? value === currentRandomText
      : value.toLowerCase() === currentRandomText.toLowerCase();

    const isCorrectChar = caseSensitive
      ? expectedChar === typedChar
      : expectedChar?.toLowerCase() === typedChar?.toLowerCase();

    if (isMatch) {
      setScore((prev) => prev + 1);
      setTextValue("");
      setCurrentRandomText(generatorRef.current());
    } else if (typedChar !== undefined) {
      if (isCorrectChar) {
        numberOfCorrectCharsWritten.current += 1;
      } else {
        numberOfErrors.current += 1;
      }
    }

    numberOfCharsWritten.current += 1;
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
                className={`${caseSensitive ? (item != enteredChars[index] ? "text-red-700" : "text-green-700") : item.toLowerCase() != enteredChars[index].toLowerCase() ? "text-red-700" : "text-green-700"} underline`}
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
    <Card>
      <p className="flex flex-row justify-between font-bold text-gray-700">
        <span>Score: {score}</span>
        <Countdown
          time={time}
          onFinish={() => {
            onFinish({
              score: score,
              errors: numberOfErrors.current,
              numberOfCorrectChars: numberOfCorrectCharsWritten.current,
              numberOfChars: numberOfCharsWritten.current,
              time: time,
            });
          }}
        />
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
    </Card>
  );
}

export default GameCard;
