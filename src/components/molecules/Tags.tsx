import { Button, Chip, Flex } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
import NewTagModal from "./NewTagModal";

const Tags = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Flex justify="center">
      <NewTagModal isOpen={opened} onClose={close} />
      <Flex wrap="wrap" align="center" justify="center" gap="xs">
        <Chip defaultChecked size="xs">
          All
        </Chip>
        <Chip size="xs">School</Chip>
        <Chip size="xs">Home</Chip>
        <Chip size="xs">Sport</Chip>
        {isMobile && (
          <Button size="xs" radius="xl" onClick={open}>
            <IconPlus width={14} /> New Tag
          </Button>
        )}
      </Flex>
      {!isMobile && (
        <Button size="xs" radius="xl" ml="sm" onClick={open}>
          <IconPlus width={14} /> New Tag
        </Button>
      )}
    </Flex>
  );
};

export default Tags;
