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
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useTodoStore from "../../store/store";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, user } = useTodoStore((state) => state);
  let navigate = useNavigate();

  useEffect(() => {
    console.log(user);
  }, [user]);

  const getRegister = async () => {
    try {
      const response = await axios.post("http://localhost:8000/auth/register", {
        name,
        email,
        password,
      });

      if (response.data.access_token) {
        const data = response.data;
        localStorage.setItem("access_token", data.access_token);
        setUser(data);
        navigate("/home");
      }
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to fetch access token: ${error}`);
    }
  };

  return (
    <Container size={420} my={40}>
      <Title
        order={1}
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        🧜🏻‍♀️ Welcome to Productivity App! 🌊
      </Title>
      <Title align="center" order={4} mt="md">
        Register to App
      </Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
          label="Name"
          placeholder="Your Name"
          required
        />
        <TextInput
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
          label="Email"
          placeholder="you@mail.com"
          required
          mt="md"
        />
        <PasswordInput
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <Button fullWidth mt="xl" onClick={getRegister}>
          Register
        </Button>
      </Paper>
      <Text color="dimmed" size="sm" align="center" mt="xl">
        Do you have already an account?{" "}
        <Link to="/login">
          <Anchor size="sm" component="button">
            Login
          </Anchor>
        </Link>
      </Text>
    </Container>
  );
};

export default Register;
