import React from 'react';

function TaskList({ tasks, selectedCategory, onDelete }) {
  const filteredTasks = selectedCategory === 'All' ? tasks : tasks.filter((task) => task.category === selectedCategory);

  return (
    <ul className="task-list">
      {filteredTasks.map((task, index) => (
        <li key={index}>
          <span className="task-text">{task.text}</span>
          <button onClick={() => onDelete(index)} className="delete-button">
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
