import { Container } from "@mantine/core";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useTodoStore from "../../store/store";
import Layout from "../layouts/Layout";
import AllTodos from "../organisms/AllTodos";

const Home = () => {
  const { user } = useTodoStore((state) => state);
  let navigate = useNavigate();

  useEffect(() => {
    const userAuth = localStorage.getItem("access_token");
    if (!userAuth && !user) {
      navigate("/login");
    }
  }, []);

  return (
    <Layout>
      <Container size={768} my="lg">
        <AllTodos />
      </Container>
    </Layout>
  );
};

export default Home;
