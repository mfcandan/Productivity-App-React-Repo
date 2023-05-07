import { Divider, Flex } from "@mantine/core";
import Search from "../atoms/Search";
import AddTodoInputs from "../molecules/AddTodoInputs";
import Tags from "../molecules/Tags";
import { TodoList } from "./TodoList";

const AllTodos = () => {
  return (
    <Flex direction="column" gap="md" mt={40}>
      <Tags />
      <Search />
      <Divider />
      <AddTodoInputs />
      <TodoList />
    </Flex>
  );
};

export default AllTodos;
