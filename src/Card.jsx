function Card({ children }) {
  return (
    <div className="flex flex-col items-center justify-center bg-amber-600 w-screen h-screen px-4">
      <div className="flex flex-col gap-1.5 shadow-xl shadow-gray-500 bg-whiterounded-md p-8 max-w-2xl w-full bg-white">
        {children}
      </div>
    </div>
  );
}

export default Card;
