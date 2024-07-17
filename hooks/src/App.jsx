import React from 'react'
import UseStateHook from './Different_Hooks/UseStateHook'
import './App.css';
import UseEffectHook from './Different_Hooks/UseEffectHook';
import UseRefHook from './Different_Hooks/UseRefHook';
import Profile from './Different_Hooks/Profile';
import Footer from './Different_Hooks/Footer';
import Form from './Different_Hooks/form';
import UseStateArray from './components/UseStateArray';
import UseStateObject from './components/UseStateObject';
import UseEffect2 from './Different_Hooks/UseEffect2';

function App() {
  return (
    <div>
      {/* <UseStateHook/>
      <UseEffectHook/>
      <UseRefHook/>
      <Profile></Profile>
      <Footer></Footer> */}
      {/* <UseStateArray/> */}
      {/* <UseStateObject/> */}
      <UseEffect2/>
    </div>
  )
}

export default App