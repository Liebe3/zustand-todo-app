import { useState } from "react";
import { useTodoStore } from "../stores/useTodoStore";

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);
  const error = useTodoStore((state) => state.error);

  const handleAdd = () => {
    addTodo(newTodo);
    setNewTodo("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="mb-8">
      <div className="flex gap-3 mb-2">
        <input
          type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new todo..."
          className="flex-1 px-4 py-3 border-2 text-gray-800 dark:text-gray-200  bg-white dark:bg-gray-800  border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:border-blue-400 dark:focus:ring-blue-600 transition-all"
        />
        <button
          onClick={handleAdd}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all font-medium cursor-pointer"
        >
          Add Todo
        </button>
      </div>
      {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
    </div>
  );
};

export default AddTodo;
