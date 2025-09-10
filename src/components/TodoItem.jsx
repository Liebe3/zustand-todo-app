import { useState } from "react";
import { useTodoStore } from "../stores/useTodoStore";

const TodoItem = ({ todo }) => {
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const editTodo = useTodoStore((state) => state.editTodo);

  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState("");
  const [error, setError] = useState("");

  const handleEdit = () => {
    setNewText(todo.text);
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!newText.trim()) {
      setError("Input field must not be empty");
      return;
    }

    editTodo(todo.id, newText.trim());
    setIsEditing(false);
    setError("");
  };

  const handleCancel = () => {
    setNewText("");
    setIsEditing(false);
    setError("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  return (
    <div className="p-4 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 dark:focus-within:border-blue-400 dark:focus-within:ring-blue-600 transition-all mb-3">
      {isEditing ? (
        <div className="space-y-3">
          {/* Input field with error message */}
          <div className="relative">
            <input
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              onKeyDown={handleKeyPress}
              className="w-full px-3 py-2 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 dark:focus:border-blue-400 dark:focus:ring-blue-600 placeholder-gray-400 dark:placeholder-gray-500 transition-all"
              autoFocus
              placeholder="Enter todo text..."
            />
            {error && (
              <p className="mt-2 text-sm text-red-500 font-medium">{error}</p>
            )}
          </div>
          
          {/* Action buttons */}
          <div className="flex gap-2 justify-end">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition-all text-sm font-medium"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all text-sm font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between gap-3">
          <span className="flex-1 text-left text-gray-800 dark:text-gray-200 transition-all break-words">
            {todo.text}
          </span>
          
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={handleEdit}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-sm font-medium"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition-all text-sm font-medium"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;