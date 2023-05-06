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
import { Link } from "react-router-dom";

const Login = () => {
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
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <Button fullWidth mt="xl">
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
