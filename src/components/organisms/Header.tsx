import { Button, Container, Header, Title, createStyles } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import useTodoStore from "../../store/store";
import UserSpecCard from "../molecules/UserSpecCard";

export function HeaderNav() {
  const { classes } = useStyles();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { logout } = useTodoStore((state) => state);
  let navigate = useNavigate();

  return (
    <Header height={60} mb="xl">
      <Container className={classes.header}>
        {!isMobile && <UserSpecCard username="," />}
        <Title
          order={3}
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          🧜🏻‍♀️ Productivity App 🌊
        </Title>
        <Button
          variant="outline"
          color="dark"
          size="xs"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Log out
        </Button>
      </Container>
    </Header>
  );
}

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
}));
