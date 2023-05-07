import axios from "axios";
import create from "zustand";

type User = {
  name: string;
};

export interface ITodoItem {
  _id: string;
  userId: string;
  task: string;
  tag: string;
  checked: boolean;
  image?: string;
}

type State = {
  todos: ITodoItem[];
  tags: string[];
  selectedTag?: string;
  user: User | null;
  searchText: string;
  getTodos: () => Promise<ITodoItem[]>;
  getTags: () => void;
  addTodo: (todo: ITodoItem) => void;
  deleteTodo: (todoID: string) => void;
  updateTodo: (todoID: string, updatedTodo: ITodoItem) => void;
  toggleTodo: (todoID: string) => void;
  setSelectedTag: (tag: string) => void;
  createTag: (tag: string) => void;
  setUser: (user: User | null) => void;
  logout: () => void;
  setSearchText: (searchText: string) => void;
};

const useTodoStore = create<State>((set) => ({
  todos: [],
  tags: ["all"],
  selectedTag: "all",
  user: null,
  searchText: "",
  getTodos: async () => {
    try {
      const response = await axios.get("http://localhost:8000/todo", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      const data = response.data;
      set(() => ({ todos: data }));
      data && useTodoStore.getState().getTags();

      return data;
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to fetch todos: ${error}`);
    }
  },
  getTags: () => {
    let tempTags: string[] = ["all"];
    useTodoStore.getState().todos.forEach((todo) => {
      if (!tempTags.includes(todo.tag)) {
        tempTags.push(todo.tag);
      }
    });
    set(() => ({ tags: tempTags }));
    console.log(tempTags);
  },
  addTodo: async (todo: ITodoItem) => {
    try {
      const res = await axios.post("http://localhost:8000/todo", todo, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      if (res && res.data) {
        set((state) => ({ todos: [...state.todos, todo] }));
      }
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to add todo: ${error}`);
    }
  },
  deleteTodo: async (todoID: string) => {
    try {
      const res = await axios.delete(`http://localhost:8000/todo/${todoID}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      if (res.status === 200) {
        set((state) => ({
          todos: state.todos.filter((todo) => todo._id !== todoID),
        }));
      }
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to delete todo: ${error}`);
    }
  },
  updateTodo: async (todoID: string, updatedTodo) => {
    try {
      const res = await axios.put(
        `http://localhost:8000/todo/${todoID}`,
        updatedTodo,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      if (res && res.data) {
        set((state) => ({
          todos: state.todos.map((todo) => {
            if (todo._id === todoID) {
              return { ...todo, ...updatedTodo };
            }
            return todo;
          }),
        }));
      }
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to update todo: ${error}`);
    }
  },
  toggleTodo: (todoID: string) =>
    set((state) => ({
      todos: state.todos.map((todo) => {
        if (todo._id === todoID) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      }),
    })),
  setSelectedTag: (tag: string) => set(() => ({ selectedTag: tag })),
  createTag: (tag: string) =>
    set((state) => ({
      tags: [...state.tags, tag],
    })),
  setUser: (user: User | null) => set(() => ({ user })),
  setSearchText: (searchText: string) => set(() => ({ searchText })),
  logout: () => {
    set(() => ({
      user: null,
      todos: [],
      tags: ["all"],
      searchText: "",
      selectedTag: "all",
    }));
    localStorage.removeItem("access_token");
  },
}));

export default useTodoStore;
