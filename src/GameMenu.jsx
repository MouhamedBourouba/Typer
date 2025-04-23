import { useState } from "react";

function GameMenu({ onGameStart }) {
  const [selectedGameMode, setSelectedGameMode] = useState("sentences");
  const [selectedTime, setSelectedTime] = useState("60");
  const [selectedCaseSensitive, setSelectedCaseSensitive] = useState("no");

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-amber-600 w-screen h-screen">
        <div className="flex flex-col gap-1.5 shadow-xl shadow-gray-500 bg-whiterounded-md p-8 max-w-2xl w-full bg-white">
          <p className="font-bold text-2xl mb-4">Typer !!!</p>
          <p className="font-bold text-gray-700">Game mode</p>
          <div className="w-full mx-auto">
            <select
              value={selectedGameMode}
              onChange={(e) => setSelectedGameMode(e.target.value)}
              className="w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none "
            >
              <option value="sentences">Sentences</option>
              <option value="word">Single Words</option>
            </select>
          </div>

          <p className="font-bold text-gray-700">Select time</p>
          <div className="w-full mx-auto">
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full ps-2 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none"
            >
              <option value="120">120 seconds</option>
              <option value="60">60 seconds</option>
              <option value="30">30 seconds</option>
            </select>
          </div>

          <p className="font-bold text-gray-700">Case sensitive</p>
          <div className="w-full mx-auto mb-4">
            <select
              value={selectedCaseSensitive}
              onChange={(e) => setSelectedCaseSensitive(e.target.value)}
              className="w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none"
            >
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>

          <button
            class="w-full py-3 px-6 bg-amber-600 text-white rounded-lg font-semibold transition-all duration-200 hover:bg-amber-700 hover:scale-105 active:scale-95"
            onClick={() => onGameStart(selectedGameMode, selectedTime)}
          >
            Start Game
          </button>
        </div>
      </div>
    </>
  );
}

export default GameMenu
