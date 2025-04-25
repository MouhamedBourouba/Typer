function Card({ children }) {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-900 w-screen h-screen px-4 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500">
      <div className="flex flex-col gap-3 shadow-xl shadow-gray-900 bg-gray-100 rounded-xl border-4 border-blue-400 p-8 max-w-2xl w-full relative">
        {/* Retro horizontal lines effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-20 pointer-events-none" />
        
        {/* Retro glowing effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-500 opacity-20 blur-sm pointer-events-none" />
        
        {/* Top retro stripe */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-t-2xl" />
        
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Card;
