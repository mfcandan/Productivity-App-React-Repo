import create from "zustand";

type User = {
  name: string;
};

export interface ITodoItem {
  id: number;
  task: string;
  tag: string;
  checked: boolean;
  image?: string;
}

type State = {
  todos: ITodoItem[];
  user: User | null;
  searchText: string;
  addTodo: (todo: ITodoItem) => void;
  deleteTodo: (todoID: number) => void;
  updateTodo: (todoID: number, updatedTodo: ITodoItem) => void;
  toggleTodo: (todoID: number) => void;
  setUser: (user: User) => void;
  logout: () => void;
  setSearchText: (searchText: string) => void;
};

const useTodoStore = create<State>((set) => ({
  todos: [
    { id: 1, task: "Sun and sea", tag: "sports", image: "", checked: false },
    { id: 2, task: "Sightseeing", tag: "school", image: "", checked: false },
    { id: 4, task: "Snow", tag: "home", image: "", checked: false },
  ],
  user: null,
  searchText: "",
  addTodo: (todo: ITodoItem) =>
    set((state) => ({
      todos: [...state.todos, { ...todo, checked: false }],
    })),
  deleteTodo: (todoID: number) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== todoID),
    })),
  updateTodo: (todoID, updatedTodo) =>
    set((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === todoID) {
          return { ...todo, ...updatedTodo };
        }
        return todo;
      }),
    })),
  toggleTodo: (todoID: number) =>
    set((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === todoID) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      }),
    })),
  setUser: (user: User) => set(() => ({ user })),
  setSearchText: (searchText: string) => set(() => ({ searchText })),
  logout: () => set(() => ({ user: null })),
}));

export default useTodoStore;
