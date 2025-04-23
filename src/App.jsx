import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("sentences");
  const [selectedTime, setSelectedTime] = useState("60");

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-emerald-500 w-screen h-screen">
        <div className="flex flex-col gap-1.5 shadow-2xl bg-white p-8">
          <p className="font-bold text-2xl mb-4">Speed typing Game</p>

          <p className="font-bold text-gray-700">Game mode</p>
          <div className="w-60 mx-auto">
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none "
            >
              <option value="sentences">Sentences</option>
              <option value="single words">Single Words</option>
            </select>
          </div>

          <p className="font-bold text-gray-700 mt-4">Select time</p>
          <div className="w-60 mx-auto mb-4">
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none "
            >
              <option value="60">60 seconds</option>
              <option value="30">30 seconds</option>
            </select>
          </div>

          <button class="w-full py-3 px-6 bg-purple-600 text-white rounded-lg font-semibold transition-all duration-200 hover:bg-purple-700 hover:scale-105 active:scale-95">
            Start Game
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
