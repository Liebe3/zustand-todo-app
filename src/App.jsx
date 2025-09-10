import "./App.css";
import TodolistPage from "./components/TodolistPage";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <TodolistPage />
    </div>
  );
}

export default App;
