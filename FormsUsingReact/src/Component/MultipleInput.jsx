import React, { useState } from "react";

// Define a functional component named MultipleInput
function MultipleInput() {
  // Declare a state variable 'userRegistration' to hold form input values.
  // 'setUserRegistration' is the function to update this state.
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  // Declare a state variable 'records' to hold submitted form data.
  // 'setRecords' is the function to update this state.
  const [records, setRecords] = useState([]);

  // Event handler for input changes
    const handleInput = (e) => {
    const name = e.target.name; // Get the name of the input field
    const value = e.target.value; // Get the value of the input field
    console.log(name, value); // Debug log to see the name and value

    // Update the 'userRegistration' state with new input values
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Create a new record with a unique id
    const newRecord = { ...userRegistration, id: new Date().getTime().toString() };
    // Add the new record to the 'records' state
    setRecords([...records, newRecord]);
    console.log(records); // Debug log to see the records

    // Reset the form input fields
    setUserRegistration({ username: "", email: "", phone: "", password: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            autoComplete="off"
            type="text"
            value={userRegistration.username}
            onChange={handleInput}
            name="username"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            autoComplete="off"
            type="text"
            value={userRegistration.email}
            onChange={handleInput}
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            autoComplete="off"
            type="text"
            value={userRegistration.phone}
            onChange={handleInput}
            name="phone"
            id="phone"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            autoComplete="off"
            type="password"
            value={userRegistration.password}
            onChange={handleInput}
            name="password"
            id="password"
          />
        </div>
        <button type="submit">Registration</button>
      </form>

      <div>
        {records.map((currEle) => {
          return (
            // Display each record inside a div
            <div key={currEle.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
              <p><strong>Username:</strong> {currEle.username}</p>
              <p><strong>Email:</strong> {currEle.email}</p>
              <p><strong>Phone:</strong> {currEle.phone}</p>
              <p><strong>Password:</strong> {currEle.password}</p>
            </div>
          );
        })}
      </div>
      <br />
    </>
  );
}

export default MultipleInput;
