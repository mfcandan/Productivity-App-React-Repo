import { Container } from "@mantine/core";
import Layout from "../layouts/Layout";
import AddTodoInputs from "../molecules/AddTodoInputs";
import AllTodos from "../organisms/AllTodos";

const Home = () => {
  return (
    <Layout>
      <Container size={768} my="lg">
        <AddTodoInputs />
        <AllTodos />
      </Container>
    </Layout>
  );
};

export default Home;
