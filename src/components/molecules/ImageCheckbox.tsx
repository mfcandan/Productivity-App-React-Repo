import {
  Badge,
  Checkbox,
  Flex,
  Image,
  Text,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import { placeHolderImage } from "../../consts";
import useTodoStore from "../../store/store";

interface ImageCheckboxProps {
  defaultChecked?: boolean;
  onChange?(checked: boolean): void;
  index: number;
  item: {
    id: number;
    task: string;
    tag: string;
    checked: boolean;
    image?: string;
  };
}

export function ImageCheckbox({
  defaultChecked,
  onChange,
  className,
  index,
  item: { id, task, tag, checked, image },
  ...others
}: ImageCheckboxProps &
  Omit<React.ComponentPropsWithoutRef<"button">, keyof ImageCheckboxProps>) {
  const { classes, cx } = useStyles({ checked });
  const { toggleTodo } = useTodoStore((state) => state);

  return (
    <UnstyledButton
      {...others}
      onClick={() => toggleTodo(id)}
      className={cx(classes.button, className)}
    >
      <Text mr="xs">{index + 1 + "."}</Text>
      <Flex direction="column" align="center">
        <Image
          src={image ? image : placeHolderImage}
          alt={task}
          width={60}
          radius="xl"
          onClick={() => alert("Download")}
        />
      </Flex>
      <div className={classes.body}>
        <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mb={5}>
          {task}
        </Text>
        <Badge size="xs" color="blue" variant="light">
          {tag}
        </Badge>
      </div>

      <Checkbox
        checked={checked}
        onChange={() => {}}
        tabIndex={-1}
        styles={{ input: { cursor: "pointer" } }}
      />
    </UnstyledButton>
  );
}

const useStyles = createStyles((theme, { checked }: { checked: boolean }) => ({
  button: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    minHeight: rem(100),
    transition: "background-color 150ms ease, border-color 150ms ease",
    border: `${rem(1)} solid ${
      checked
        ? theme.fn.variant({ variant: "outline", color: theme.primaryColor })
            .border
        : theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[3]
    }`,
    borderRadius: theme.radius.sm,
    padding: theme.spacing.sm,
    backgroundColor: checked
      ? theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .background
      : theme.colorScheme === "dark"
      ? theme.colors.dark[8]
      : theme.white,
  },

  body: {
    flex: 1,
    marginLeft: theme.spacing.md,
  },
}));
