import React, { useState } from 'react';

function UseStateObject() {
  const [myObject, setMyObject] = useState({
    myName: "anurag kumar", 
    myAge: 21, 
    degree: "BTECH"
  });

//   const updateDegree = (d) => {
//     setMyObject(prevState => ({
//       ...prevState,
//       degree: d
//     }));
//   };


const updateDegree=(d)=>{
   const newObj={...myObject,degree:d}
    setMyObject(newObj)
}
  return (
    <div>
      <h1>
        My name: {myObject.myName}
        <br />
        My age: {myObject.myAge}
        <br />
        Degree: {myObject.degree}
      </h1>
      <button onClick={() => updateDegree("Mtech")}>Click</button>
    </div>
  );
}

export default UseStateObject;
