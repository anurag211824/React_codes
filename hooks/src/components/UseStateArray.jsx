import React, { useState } from 'react';
import './UseStateArray.css'; // Make sure to import the CSS file

const UseStateArray = () => {
  const bioData = [
    { id: 1, myName: "anurag kumar", age: 21 },
    { id: 2, myName: "anurag kumar", age: 21 },
    { id: 3, myName: "anurag kumar", age: 21 },
    { id: 4, myName: "anurag kumar", age: 21 },
  ];

  const [myArray, setMyArray] = useState(bioData);

  const clearArray = () => {
    setMyArray([]);
  };

  return (
    <div className="container">
      {myArray.map((currEle) => (
        <div className="box" key={currEle.id}>
          <h1>id: {currEle.id}</h1>
          <h1>Name: {currEle.myName}</h1>
          <h1>Age: {currEle.age}</h1>
        </div>
      ))}
      <button onClick={clearArray}>Clear</button>
    </div>
  );
};

export default UseStateArray;
