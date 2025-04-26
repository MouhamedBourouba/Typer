import { useState } from "react";

function GameMenu({ onGameStart }) {
  const [selectedGameMode, setSelectedGameMode] = useState("sentences");
  const [selectedTime, setSelectedTime] = useState("60");
  const [selectedCaseSensitive, setSelectedCaseSensitive] = useState("yes");

  return (
    <div className="flex items-center justify-center min-h-screen p-2 sm:p-4 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500">
      <div className="w-full max-w-md bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl shadow-gray-900 overflow-hidden">
        {/* Header */}
        <div className="bg-blue-700 py-4 sm:py-6 px-4 sm:px-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white text-center tracking-wide">
            TYPER
            <span className="text-amber-200 ml-1">!!!</span>
          </h1>
          <p className="text-blue-100 text-center text-xs sm:text-sm mt-1">
            Test your typing speed and accuracy
          </p>
        </div>

        {/* Form Content */}
        <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <label className="flex items-center text-gray-700 font-bold text-xs sm:text-sm">
              <span className="mr-2">⏱️</span>
              Game Mode
            </label>
            <div className="flex rounded-lg overflow-hidden">
              <button
                className={`flex-1 py-2 sm:py-3 text-sm sm:text-base text-center transition-all ${selectedGameMode === "sentences"
                    ? "bg-blue-500 text-white font-bold"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                onClick={() => setSelectedGameMode("sentences")}
              >
                Sentences
              </button>
              <button
                className={`flex-1 py-2 sm:py-3 text-sm sm:text-base text-center transition-all ${selectedGameMode === "words"
                    ? "bg-blue-500 text-white font-bold"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                onClick={() => setSelectedGameMode("words")}
              >
                Words
              </button>
            </div>
          </div>

          {/* Time Selection */}
          <div className="space-y-2">
            <label className="flex items-center text-gray-700 font-bold text-xs sm:text-sm">
              <span className="mr-2">⏱️</span>
              Time Limit
            </label>
            <div className="flex rounded-lg overflow-hidden">
              <button
                className={`flex-1 py-2 sm:py-3 text-sm sm:text-base text-center transition-all ${selectedTime === "30"
                    ? "bg-blue-500 text-white font-bold"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                onClick={() => setSelectedTime("30")}
              >
                30s
              </button>
              <button
                className={`flex-1 py-2 sm:py-3 text-sm sm:text-base text-center transition-all ${selectedTime === "60"
                    ? "bg-blue-500 text-white font-bold"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                onClick={() => setSelectedTime("60")}
              >
                60s
              </button>
              <button
                className={`flex-1 py-2 sm:py-3 text-sm sm:text-base text-center transition-all ${selectedTime === "120"
                    ? "bg-blue-500 text-white font-bold"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                onClick={() => setSelectedTime("120")}
              >
                120s
              </button>
            </div>
          </div>

          {/* Case Sensitive */}
          <div className="space-y-2">
            <label className="flex items-center text-gray-700 font-bold text-xs sm:text-sm">
              <span className="mr-2">Aa</span>
              Case Sensitive
            </label>
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                className={`flex-1 py-2 text-sm sm:text-base rounded-md transition-all ${selectedCaseSensitive === "no"
                    ? "bg-white shadow-md font-medium text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                  }`}
                onClick={() => setSelectedCaseSensitive("no")}
              >
                No
              </button>
              <button
                className={`flex-1 py-2 text-sm sm:text-base rounded-md transition-all ${selectedCaseSensitive === "yes"
                    ? "bg-white shadow-md font-medium text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                  }`}
                onClick={() => setSelectedCaseSensitive("yes")}
              >
                Yes
              </button>
            </div>
          </div>

          {/* Start Button */}
          <button
            className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-bold text-base sm:text-lg transition-all duration-200 hover:shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:-translate-y-1 active:translate-y-0"
            onClick={() =>
              onGameStart(
                selectedGameMode,
                parseInt(selectedTime),
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
