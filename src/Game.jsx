import { useState, useRef, useEffect } from "react";
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
  const inputRef = useRef(null);
  const numberOfErrors = useRef(0);
  const numberOfCharsWritten = useRef(0);
  const numberOfCorrectCharsWritten = useRef(0);
  const [currentRandomText, setCurrentRandomText] = useState(() =>
    generatorRef.current(),
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, [currentRandomText]);

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
      <div className="font-mono text-xl my-6 max-w-lg mx-auto bg-gray-50 p-4 rounded-lg shadow-inner">
        {characterList.map((item, index) => {
          const isTyped = index < enteredChars.length;
          const isCorrect = caseSensitive 
            ? item === enteredChars[index] 
            : item.toLowerCase() === enteredChars[index]?.toLowerCase();
          
          return (
            <span
              key={index}
              className={`${
                isTyped
                  ? isCorrect
                    ? "text-green-600 bg-green-50"
                    : "text-red-600 bg-red-50"
                  : index === enteredChars.length
                  ? "text-gray-800 bg-amber-100 animate-pulse"
                  : "text-gray-600"
              } ${
                isTyped ? "font-bold" : ""
              } relative`}
            >
              {item}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className="relative">
      <Card className="p-8 shadow-xl rounded-xl bg-white">
        <div className="flex flex-col">
          {/* Header with stats */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="bg-amber-100 p-2 rounded-lg">
                <span className="font-bold text-amber-800">{score}</span>
              </div>
              <span className="text-gray-600 font-medium">Score</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="bg-amber-600 text-white px-3 py-1 rounded-lg font-bold">
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
              </div>
            </div>
          </div>
          
          {/* Mode indicator */}
          <div className="mx-auto mb-2">
            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {mode === "word" ? "Word Mode" : "Sentence Mode"} {caseSensitive ? "• Case Sensitive" : ""}
            </span>
          </div>
          
          {/* Text display */}
          {RenderText()}
          
          {/* Input field */}
          <div className="relative mt-2">
            <input
              ref={inputRef}
              className="w-full p-4 border-2 rounded-lg focus:outline-none transition-all duration-200 bg-white text-gray-800 border-amber-200 focus:border-amber-500 focus:shadow-md font-mono text-lg"
              placeholder="Type here..."
              dir="ltr"
              type="text"
              value={textValue}
              onChange={handleInputChange}
            />
            <div className="absolute right-3 top-4 text-gray-400 text-sm">
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default GameCard;
