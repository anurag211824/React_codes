import React, { useEffect, useState, useRef } from "react";

function UseRefHook() {
  const [value, setValue] = useState(0);
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });

  const inputElem = useRef();
  const btnClicked = () => {
    console.log(inputElem.current);
    inputElem.current.style.background = "blue";
  };
  return (
    <div>
      <h1>UseRefHook Demonstration</h1>
      <button
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        -1
      </button>
      <p>{value}</p>
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        +
      </button>
      <p>Render Count:{count.current}</p>

      <input type="text" ref={inputElem} />
      <button onClick={btnClicked}>Click Here</button>
    </div>
  );
}

export default UseRefHook;
