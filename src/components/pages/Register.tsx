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

const Register = () => {
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
        <TextInput label="Name" placeholder="Your Name" required />
        <TextInput
          label="Email"
          placeholder="you@mantine.dev"
          required
          mt="md"
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <Button fullWidth mt="xl">
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
