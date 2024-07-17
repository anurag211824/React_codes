import React, { useState } from "react";
import { useEffect } from "react";

function UseEffectHook() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div>
      <h1>UseEffectHook Demonstration</h1>
      <p>I'have rendered {count} times</p>
    </div>
  );
}

export default UseEffectHook;
