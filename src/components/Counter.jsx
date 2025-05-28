import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const value =Number(input);

  const handleInc = () => {
    setCount(() => count + 1);

    if (value) {
      setCount(() => count + value);
    }
  };

  const handleDec = () => {
/*
Number(input) safely parses the input string to a number.

!isNaN(value) && input !== "" ensures it's a valid number.

Math.max(0, ...) makes sure count never goes below zero.

prev => gives you the current value of count safely inside setCount.
*/
     if (value) {
   
      setCount((prev) =>Math.max(0,prev - value));
    }else if (count > 0) {
      setCount(() => count - 1);
    }
  };

  const handleReste = () => {
    setCount(0);
    setInput("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <h1 className="text-4xl font-bold text-gray-800">{count}</h1>
      <input
        type="number"
        placeholder="Enter Number..."
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition"
          onClick={handleInc}
        >
          Increment
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition"
          onClick={handleReste}
        >
          Reset
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition"
          onClick={handleDec}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
