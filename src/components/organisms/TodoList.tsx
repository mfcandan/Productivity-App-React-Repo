import { Flex } from "@mantine/core";
import TodoItem from "../molecules/TodoItem";

const mockdata = [
  { task: "Sun and sea", tag: "sports", image: "", checked: true },
  { task: "Sightseeing", tag: "school", image: "", checked: false },
  { task: "Mountains", tag: "school", image: "", checked: false },
  { task: "Snow", tag: "home", image: "", checked: false },
];

export function TodoList() {
  const items = mockdata.map((item, i) => (
    <TodoItem item={item} index={i} key={item.task} />
  ));
  return (
    <Flex direction="column" gap="md">
      {items}
    </Flex>
  );
}
