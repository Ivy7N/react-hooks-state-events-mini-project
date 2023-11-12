import React, { useState } from 'react';
import { TASKS } from "../data";
import { CATEGORIES } from "../data";
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (text, category) => {
    const newTask = { text, category };
    setTasks([...tasks, newTask]);
  };

  const handleTaskDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task List</h1>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryFilter={handleCategoryFilter}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={tasks} selectedCategory={selectedCategory} onDelete={handleTaskDelete} />
    </div>
  );
}

export default App;
