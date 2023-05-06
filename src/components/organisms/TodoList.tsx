import { Flex } from "@mantine/core";
import TodoItem from "../molecules/TodoItem";
import useTodoStore, { ITodoItem } from "../../store/store";
import { useEffect, useState } from "react";

export function TodoList() {
  const { todos, searchText } = useTodoStore((state) => state);
  const [filteredTodos, setFilteredTodos] = useState<ITodoItem[]>(todos);

  useEffect(() => {
    const tempFilteredTodos = todos.filter((item: ITodoItem) => {
      return item.task.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredTodos(tempFilteredTodos);
  }, [searchText, todos]);

  const items = filteredTodos.map((item: ITodoItem, i: number) => (
    <TodoItem item={item as ITodoItem} index={i} key={item.task} />
  ));

  return (
    <Flex direction="column" gap="md">
      {items}
    </Flex>
  );
}
