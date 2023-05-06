import { Button, Flex } from "@mantine/core";
import { ImageCheckbox } from "./ImageCheckbox";
import { IconDownload, IconEdit, IconTrash } from "@tabler/icons-react";
import EditTaskModal from "./EditTaskModal";
import { useDisclosure } from "@mantine/hooks";

interface ITodoItem {
  item: {
    task: string;
    tag: string;
    checked: boolean;
    image?: string;
  };
  index: number;
}

const TodoItem = ({ item, index }: ITodoItem) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <EditTaskModal isOpen={opened} onClose={close} item={item} />
      <Flex align="center" key={item.task}>
        <ImageCheckbox item={item} index={index} />
        <Flex direction="column" gap={4} ml="xs">
          <Button size="xs" color="gray" variant="outline" onClick={open}>
            <IconEdit width={14} />
          </Button>
          <Button size="xs" color="red" variant="outline">
            <IconTrash width={14} />
          </Button>
          <Button size="xs" variant="outline">
            <IconDownload width={14} />
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default TodoItem;
