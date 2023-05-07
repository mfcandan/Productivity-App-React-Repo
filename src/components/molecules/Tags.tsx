import { Button, Chip, Flex } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
import NewTagModal from "./NewTagModal";
import useTodoStore from "../../store/store";

const Tags = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { tags, setSelectedTag, selectedTag } = useTodoStore((state) => state);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Flex justify="center">
      <NewTagModal isOpen={opened} onClose={close} />
      <Flex wrap="wrap" align="center" justify="center" gap="xs">
        {tags.map((tag) => (
          <Chip
            key={tag}
            checked={selectedTag === tag}
            onClick={() => setSelectedTag(tag)}
            size="xs"
          >
            {tag.toLocaleUpperCase()}
          </Chip>
        ))}
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
