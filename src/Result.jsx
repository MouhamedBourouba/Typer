import Card from "./Card";

function ResultCard({ results, onStartAgain }) {
  const accuracy = Math.ceil(
    100 - (results.errors / results.numberOfChars) * 100,
  );
  const wpm = Math.round(
    results.numberOfCorrectChars / 5 / (results.time / 60),
  );

  return (
    <Card className="p-6 max-w-md mx-auto shadow-2xl rounded-2xl bg-white text-gray-800">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-3xl font-extrabold text-red-600 tracking-wide">
          Game Over!
        </h2>

        <div className="w-full grid grid-cols-2 gap-y-3 gap-x-4 text-center text-lg">
          <Stat label="WPM" value={wpm} color="green" />
          <Stat label="Score" value={results.score} color="green" />
          <Stat label="Mistakes" value={results.errors} color="red" />
          <Stat label="Accuracy" value={`${accuracy}%`} color="green" />
        </div>

        <button
          onClick={onStartAgain}
          className="w-full py-3 px-6 bg-amber-600 text-white rounded-xl font-medium transition-transform duration-200 hover:scale-105 active:scale-95 shadow-md"
        >
          Start Again
        </button>
      </div>
    </Card>
  );
}

function Stat({ label, value, color = "gray" }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm font-medium text-gray-500">{label}</span>
      <span className={`text-${color}-700 font-bold`}>{value}</span>
    </div>
  );
}

export default ResultCard;
