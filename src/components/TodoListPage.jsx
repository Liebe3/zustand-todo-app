import { useEffect } from "react";
import { FaClipboardList, FaMoon, FaSun } from "react-icons/fa6";
import { useThemeStore } from "../stores/useThemeStore";
import { useTodoStore } from "../stores/useTodoStore";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
const TodolistPage = () => {
  const todos = useTodoStore((state) => state.todos);
  const clearTodo = useTodoStore((state) => state.clearTodo);
  const { theme, toggleTheme } = useThemeStore();
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <div className="w-full max-w-2xl mx-auto p-6 ">
      <div>
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full text-blue-600  bg-gray-200 dark:bg-blue-600 dark:text-gray-200 hover:scale-110 transition cursor-pointer"
        >
          {theme === "light" ? (
            <span>
              {" "}
              <FaSun size={20} />
            </span>
          ) : (
            <span>
              {" "}
              <FaMoon size={20} />
            </span>
          )}
        </button>
      </div>
      <div>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            Zustand Todo List
          </h1>
        </div>

        <AddTodo />

        <div className="space-y-0">
          {todos.length === 0 ? (
            <div className="text-center py-12">
              <div className="mb-4 flex justify-center">
                <FaClipboardList className="text-6xl text-gray-400 dark:text-gray-600 drop-shadow-md hover:text-blue-500 transition" />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Your todo list is empty
              </p>
            </div>
          ) : (
            todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
          )}
        </div>
        {todos.length > 0 && (
          <div className="flex justify-center">
            <button
              onClick={clearTodo}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 dark:hover:bg-red-700 transition cursor-pointer"
            >
              Clear todo
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodolistPage;
