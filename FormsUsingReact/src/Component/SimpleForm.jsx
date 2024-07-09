import React, { useState } from 'react'

function SimpleForm() {

//object to hold diff inputs given by diff users
const [userRegistration,setUserRegistration]=useState({
    username:"",
    email:"",
    phone:"",
    password:"",

})
//this function add every input into the userRegustration object at every input chnage in the input fields
const handleInput=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setUserRegistration({...userRegistration,[name]:value})
}
//an object array to hold diff users submission
const [records,setRecords]=useState([])

const handleSubmit=(e)=>{
    e.preventDefault();
    const newRecords={...userRegistration,id: new Date().getTime().toString()}
    setRecords([...records,newRecords])
    console.log(records)
    setUserRegistration({ username: "", email: "", phone: "", password: "" });
}
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
   </>
  )
}

export default SimpleForm