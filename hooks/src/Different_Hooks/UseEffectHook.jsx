import React, { useState } from "react";
import { useEffect } from "react";

function UseEffectHook() {
  // There are three ways to use useEffect
  // 1 useEffect(callback)
  // without any Dependencies
  // 2 useEffect(callback,[])
  //Empty arr
  //3  useEffect(callback,[])
  //with vareiables in the arr

  const [count, setCount] = useState(0);

  // when we use useSffect hook without any dependencies then it will excute the call back function whenever there is any state change in the component

  // when we use useSffect hook with any dependencies then it will execit the call back function whenever there is any state change in the component

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  });

  return (
    <div>
      <h1>UseEffectHook Demonstration</h1>
      <p>I'have rendered {count} times</p>
    </div>
  );
}

export default UseEffectHook;
