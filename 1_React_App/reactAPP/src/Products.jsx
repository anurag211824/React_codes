import React, { useState } from "react";

// Function component to display product details
function Products({ name, data }) {
  // useState hook to manage a boolean state for conditional rendering
  const [isTrue, setIsTrue] = useState(true);

  return (
    <div className="text-white w-full h-screen bg-zinc-800 flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4">Products</h1>
      {/* Displaying props passed from the parent component */}
      <div className="mb-4 text-center">
        <h1 className="text-xl">Name: {name}</h1>
        <h1 className="text-xl">Data Name: {data.name}</h1>
        <h3 className="text-xl">Age: {data.age}</h3>
      </div>
      {/* Conditional rendering based on the state */}
      <h4 className={`${isTrue ? "text-blue-600" : "text-red-600"} text-xl mb-4`}>
        {isTrue ? "Hey" : "Hello"}
      </h4>
      {/* Button to toggle the boolean state */}
      <button onClick={() => setIsTrue(!isTrue)} className="px-4 py-2 bg-yellow-500 rounded-md text-sm">
        Change
      </button>
    </div>
  );
}

export default Products;
