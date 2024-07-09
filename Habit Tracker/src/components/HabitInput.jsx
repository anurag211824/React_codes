import React, { useState } from 'react';

const HabitInput = ({ addHabit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addHabit(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 mr-2"
        placeholder="New Habit"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Add Habit
      </button>
    </form>
  );
};

export default HabitInput;