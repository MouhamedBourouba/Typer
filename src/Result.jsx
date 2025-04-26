import Card from "./Card";

function ResultCard({ results, onStartAgain }) {
  const accuracy = Math.ceil(
    100 - (results.errors / results.numberOfChars) * 100
  );
  const wpm = Math.round(
    results.numberOfCorrectChars / 5 / (results.time / 60)
  );
  const rawWpm = Math.round(
    results.numberOfChars / 5 / (results.time / 60)
  );

  return (
    <Card className="p-8 max-w-md mx-auto shadow-xl rounded-3xl bg-gradient-to-br from-white to-gray-50 text-gray-800">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-red-600 tracking-wide mb-1">
            Game Over!
          </h2>
          <p className="text-gray-500 text-sm">Here's how you performed</p>
        </div>
        
        <div className="w-full grid grid-cols-2 gap-6 text-center">
          <StatCard 
            label="WPM" 
            value={wpm} 
            icon="⚡" 
            bgColor="bg-cyan-50" 
            textColor="text-cyan-600"
            description="Words per minute" 
          />
          <StatCard 
            label="Raw WPM" 
            value={rawWpm} 
            textColor="text-blue-600"
            icon="⚡" 
            bgColor="bg-blue-50" 
            description="Words per minute includes mistakes" 
          />
          <StatCard 
            label="Accuracy" 
            value={`${accuracy}%`} 
            icon="🎯" 
            bgColor="bg-green-50" 
            textColor="text-green-600"
            description="Typing precision" 
          />
          <StatCard 
            label="Score" 
            value={results.score} 
            icon="🏆" 
            bgColor="bg-purple-50" 
            textColor="text-purple-600"
            description="Total points" 
          />
          <StatCard 
            label="Mistakes" 
            value={results.errors} 
            icon="❌" 
            bgColor="bg-red-50" 
            textColor="text-red-600"
            description="Error count" 
          />
        </div>
        
        <div className="w-full mt-2">
          <button
            onClick={onStartAgain}
            className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium text-lg transition-all duration-200 hover:shadow-lg hover:from-blue-600 hover:to-blue-700 active:scale-98 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Play Again
          </button>
        </div>
      </div>
    </Card>
  );
}

function StatCard({ label, value, icon, bgColor, textColor, description }) {
  return (
    <div className={`flex flex-col items-center rounded-xl p-3 ${bgColor} border-blue-300 border-1`}>
      <div className="flex items-center mb-1">
        <span className="mr-1">{icon}</span>
        <span className="text-sm font-medium text-gray-600">{label}</span>
      </div>
      <span className={`text-2xl font-bold ${textColor}`}>{value}</span>
      <span className="text-xs text-gray-500 mt-1">{description}</span>
    </div>
  );
}

export default ResultCard;
