import React from 'react'
import UseStateHook from './Different_Hooks/UseStateHook'
import './App.css';
import UseEffectHook from './Different_Hooks/UseEffectHook';
import UseRefHook from './Different_Hooks/UseRefHook';
import Profile from './Different_Hooks/Profile';
import Footer from './Different_Hooks/Footer';
import Form from './Different_Hooks/form';

function App() {
  return (
    <div>
      <UseStateHook/>
      <UseEffectHook/>
      <UseRefHook/>
      <Profile></Profile>
      <Footer></Footer>
    </div>
  )
}

export default App