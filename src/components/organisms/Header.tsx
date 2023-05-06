import { Button, Container, Header, Title, createStyles } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import UserSpecCard from "../molecules/UserSpecCard";

export function HeaderNav() {
  const { classes } = useStyles();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Header height={60} mb={120}>
      <Container className={classes.header}>
        {!isMobile && <UserSpecCard username="Fatih" />}
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
        <Button variant="outline" color="dark" size="xs">
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
