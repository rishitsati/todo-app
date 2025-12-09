import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import AddItemForm from './components/AddItemForm'; 
import { Card } from './components/ui/card';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Finish React assignment', completed: false },
    { id: 3, text: 'Go for a run', completed: true },
  ]);

  const addItem = (text) => {
    const newItem = {
      id: Date.now(), 
      text: text,
      completed: false,
    };
    setTodos((prevTodos) => [newItem, ...prevTodos]);
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
  };

  const deleteItem = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

const editItem = (id, newText) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
                if (todo.id === id) {
          return { ...todo, text: newText };
        }
        return todo;
      });
    });
  };

  const completedCount = todos.filter(t => t.completed).length;
  const totalCount = todos.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Header />
        
        <Card className="p-6 shadow-lg">
          <AddItemForm onAddItem={addItem} />
          
          <div className="mb-4 flex justify-between items-center text-sm text-gray-600">
            <span>{totalCount} {totalCount === 1 ? 'task' : 'tasks'}</span>
            <span>{completedCount} completed</span>
          </div>

          <ToDoList
            todos={todos}
            toggleComplete={toggleComplete}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        </Card>
      </div>
    </div>
  );
}



export default App;