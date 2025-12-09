import React from 'react';
import { Card } from './ui/card';
import { Check, Pencil, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { Input } from './ui/input';

function ToDoItem({ item, toggleComplete, deleteItem, editItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);

  const handleEditSubmit = () => {
    const trimmedText = editText.trim();
    if (trimmedText) {
      editItem(item.id, trimmedText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(item.text);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEditSubmit();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  // View mode
  const viewTemplate = (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <button
          onClick={() => toggleComplete(item.id)}
          className={`shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
            item.completed
              ? 'bg-blue-500 border-blue-500'
              : 'border-gray-300 hover:border-blue-400'
          }`}
        >
          {item.completed && <Check className="h-3 w-3 text-white" />}
        </button>
        <span
          className={`text-sm truncate ${
            item.completed
              ? 'line-through text-gray-400'
              : 'text-gray-700'
          }`}
        >
          {item.text}
        </span>
      </div>
      <div className="flex gap-1 shrink-0">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => setIsEditing(true)}
        >
          <Pencil className="h-3.5 w-3.5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 hover:bg-red-50 hover:text-red-600"
          onClick={() => deleteItem(item.id)}
        >
          <Trash2 className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  );


  const editTemplate = (
    <div className="flex items-center gap-2">
      <Input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        onKeyDown={handleKeyPress}
        autoFocus
        className="flex-1"
      />
      <Button
        size="sm"
        onClick={handleEditSubmit}
        className="shrink-0"
      >
        Save
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={handleCancel}
        className="shrink-0"
      >
        Cancel
      </Button>
    </div>
  );

  return (
    <Card className="p-4 mb-3 hover:shadow-md transition-shadow">
      {isEditing ? editTemplate : viewTemplate}
    </Card>
  );
}

export default ToDoItem;