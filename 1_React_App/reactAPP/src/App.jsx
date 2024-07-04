import React, { useState } from "react";
import Products from "./Products";

// Function component for the main application
function App() {
  // useState hook to manage the counter state
  const [counter, setCounter] = useState(0);

  // Function to increment the counter
  function countIncrement() {
    setCounter(counter + 1);
  }

  // Arrow function to decrement the counter
  const countDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      {/* Main heading with some styling */}
      <div className='main text-center py-8 bg-blue-500 text-white'>
        <h1 className='text-4xl font-bold'>My name is Anurag Kumar</h1>
      </div>
      <h2 className='text-center text-2xl my-4'>I am learning React.js</h2>

      {/* Example of using Tailwind CSS for styling */}
      <div className="w-full h-screen bg-zinc-700 italic flex justify-center items-center">
        <div className="w-44 h-30 bg-red-600 rounded-md text-white flex items-center justify-center">
          Anurag
        </div>
      </div>

      {/* Counter component with increment and decrement buttons */}
      <div className="w-full h-screen bg-zinc-900 text-white p-5 flex flex-col items-center justify-center">
        <h1 className='text-6xl mb-4'>{counter}</h1>
        <div className="space-x-4">
          <button onClick={countIncrement} className="px-3 py-2 bg-green-500 rounded-md text-sm">
            +
          </button>
          <button onClick={countDecrement} className="px-3 py-2 bg-red-500 rounded-md text-sm">
            -
          </button>
        </div>
        {/* Passing props to the Products component */}
        <Products name="value" data={{ age: 25, name: "Anurag" }} />
      </div>
      {/* React updates the UI when the state changes */}
    </>
  );
}

export default App;

// JSX is similar to HTML with superpowers
