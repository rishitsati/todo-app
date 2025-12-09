import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, toggleComplete, deleteItem, editItem }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">
        <p>No tasks yet. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <ToDoItem 
          key={todo.id} 
          item={todo}
          toggleComplete={toggleComplete}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      ))}
    </div>
  );
}

export default ToDoList;