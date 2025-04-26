import { useState } from "react";

function GameMenu({ onGameStart }) {
  const [selectedGameMode, setSelectedGameMode] = useState("sentences");
  const [selectedTime, setSelectedTime] = useState("60");
  const [selectedCaseSensitive, setSelectedCaseSensitive] = useState("yes");

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl shadow-gray-900 overflow-hidden">
        {/* Header */}
        <div className="bg-blue-700 py-6 px-8">
          <h1 className="text-3xl font-extrabold text-white text-center tracking-wide">
            TYPER
            <span className="text-amber-200 ml-1">!!!</span>
          </h1>
          <p className="text-blue-100 text-center text-sm mt-1">
            Test your typing speed and accuracy
          </p>
        </div>

        {/* Form Content */}
        <div className="p-8 space-y-6">
          {/* Game Mode */}
          <div className="space-y-2">
            <label className="flex items-center text-gray-700 font-bold text-sm">
              <span className="mr-2">🎮</span>
              Game Mode
            </label>
            <div className="relative">
              <select
                value={selectedGameMode}
                onChange={(e) => setSelectedGameMode(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200"
              >
                <option value="sentences">Sentences</option>
                <option value="word">Single Words</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Time Selection */}
          <div className="space-y-2">
            <label className="flex items-center text-gray-700 font-bold text-sm">
              <span className="mr-2">⏱️</span>
              Time Limit
            </label>
            <div className="flex rounded-lg overflow-hidden">
              <button
                className={`flex-1 py-3 text-center transition-all ${selectedTime === "30" ? "bg-blue-500 text-white font-bold" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                onClick={() => setSelectedTime("30")}
              >
                30s
              </button>
              <button
                className={`flex-1 py-3 text-center transition-all ${selectedTime === "60" ? "bg-blue-500 text-white font-bold" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                onClick={() => setSelectedTime("60")}
              >
                60s
              </button>
              <button
                className={`flex-1 py-3 text-center transition-all ${selectedTime === "120" ? "bg-blue-500 text-white font-bold" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                onClick={() => setSelectedTime("120")}
              >
                120s
              </button>
            </div>
          </div>

          {/* Case Sensitive */}
          <div className="space-y-2">
            <label className="flex items-center text-gray-700 font-bold text-sm">
              <span className="mr-2">Aa</span>
              Case Sensitive
            </label>
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                className={`flex-1 py-2 rounded-md transition-all ${selectedCaseSensitive === "no" ? "bg-white shadow-md font-medium text-blue-600" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setSelectedCaseSensitive("no")}
              >
                No
              </button>
              <button
                className={`flex-1 py-2 rounded-md transition-all ${selectedCaseSensitive === "yes" ? "bg-white shadow-md font-medium text-blue-600" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setSelectedCaseSensitive("yes")}
              >
                Yes
              </button>
            </div>
          </div>

          {/* Start Button */}
          <button
            className="w-full py-4 mt-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:-translate-y-1 active:translate-y-0"
            onClick={() =>
              onGameStart(
                selectedGameMode,
                selectedTime,
                selectedCaseSensitive === "yes",
              )
            }
          >
            START GAME
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameMenu;
