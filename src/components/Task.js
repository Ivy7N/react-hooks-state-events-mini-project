import React from 'react';

function Task({ text, category, All }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={All}>All</button>
    </div>
  );
}

export default Task;
