import React from 'react';
import './App.css';
import Todolist from './component/Todolist';

function App() {
    return (
        <div className="app">
            <header><h1><u>Task Manager</u></h1></header>
            <Todolist />
        </div>
    );
}

export default App;