import { Divider, Flex, Title } from "@mantine/core";
import Search from "../atoms/Search";
import Tags from "../molecules/Tags";
import { TodoList } from "./TodoList";

const AllTodos = () => {
  return (
    <Flex direction="column" gap="md" mt={40}>
      <Title order={3} align="center">
        All Todos:
      </Title>
      <Tags />
      <Search />
      <Divider />
      <TodoList />
    </Flex>
  );
};

export default AllTodos;
