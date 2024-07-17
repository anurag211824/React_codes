import React, { useState } from "react";

function UseStateHook() {
  // useState for counting clicks
  const [count, setCount] = useState(0);
  const counterFunction = () => {
    setCount(count + 1);
    // this will increment the count by only 1

    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1);
    // this will increase value by 4 when button clicked
  };

  // useState for changing the paragraph content
  const [state, stateChange] = useState("Please click me to change");
  const [check,setCheck]=useState(true)
  const paraGraphChanger = () => {
    if(check){
      stateChange("I am changed as you clicked me");
      setCheck(false)
     
    }
    if(!check){
      stateChange("Please click me to change");
      setCheck(true)
    }
  };

  // useState for changing the car details
  const [car, setCar] = useState({
    brand: "Ferrari",
    model: "Roma",
    year: "2023",
    color: "red",
  });
  const changeBrand = () => {
    setCar((prevCar) => {
      return { ...prevCar, brand: "buggati" };
    });
  };
  const changeColor = () => {
    setCar((prevCar) => {
      return { ...prevCar, color: "blue" };
    });
  };

  return (
    <>
      <h1>UseStateHook Demonstration</h1>

      <p>Click-count: {count}</p>
      <button onClick={counterFunction}>Click</button>

      <p>{state}</p>
      <button onClick={paraGraphChanger}>Click</button>

      <p>Car details:</p>
      <p>Brand: {car.brand}</p>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
      <p>Color: {car.color}</p>
      <button className="btn" onClick={changeColor}>
        Change Car Color
      </button>
      <br />
      <button onClick={changeBrand}>Change Car Brand</button>
    </>
  );
}

export default UseStateHook;
