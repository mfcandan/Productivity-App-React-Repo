import {
  Anchor,
  Button,
  Container,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTodoStore from "../../store/store";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, user } = useTodoStore((state) => state);
  let navigate = useNavigate();

  useEffect(() => {
    console.log(user);
  }, [user]);

  const getLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8000/auth/login", {
        email,
        password,
      });

      const data = response.data;
      data.user.access_token &&
        localStorage.setItem("access_token", data.user.access_token);
      setUser(data.user);
      navigate("/home");

    } catch (error) {
      console.error(error);
      throw new Error(`Failed to fetch access token: ${error}`);
    }
  };

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        🧜🏻‍♀️ Welcome to Productivity App! 🌊
      </Title>
      <Title align="center" order={4} mt="md">
        Login your Account
      </Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          label="Email"
          placeholder="you@mail.com"
          required
        />
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <Button fullWidth mt="xl" onClick={() => getLogin()}>
          Sign in
        </Button>
      </Paper>
      <Text color="dimmed" size="sm" align="center" mt="xl">
        Do not have an account yet?{" "}
        <Link to="/register">
          <Anchor size="sm" component="button">
            Create account
          </Anchor>
        </Link>
      </Text>
    </Container>
  );
};

export default Login;
