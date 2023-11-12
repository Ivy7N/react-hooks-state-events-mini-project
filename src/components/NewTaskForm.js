import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(text, category);
    setText('');
  };

  return (
    <form onSubmit={handleFormSubmit} className="new-task-form">
      <input
        type="text"
        placeholder="Task details"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
