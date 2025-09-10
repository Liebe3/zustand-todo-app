import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todos: [],
  error: "",
  addTodo: (todoText) =>
    set((state) => {
      if (todoText.trim()) {
        const newTodo = {
          id: Date.now(),
          text: todoText.trim(),
          completed: false,
        };
        return { todos: [...state.todos, newTodo], error: "" };
      } else {
        return {
          error: "Input field cannot be empty",
        };
      }
    }),

  editTodo: (todoId, newText) =>
    set((state) => ({
      todos: state.todos.map((item) =>
        item.id === todoId ? { ...item, text: newText.trim() } : item
      ),
    })),

  deleteTodo: (todoId) =>
    set((state) => ({
      todos: state.todos.filter((item) => item.id !== todoId),
      error: "",
    })),

  clearTodo: () => set(() => ({ todos: [] })),
}));
