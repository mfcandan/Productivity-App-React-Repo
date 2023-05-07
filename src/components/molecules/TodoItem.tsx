import { Button, Flex } from "@mantine/core";
import { ImageCheckbox } from "./ImageCheckbox";
import { IconDownload, IconEdit, IconTrash } from "@tabler/icons-react";
import EditTaskModal from "./EditTaskModal";
import { useDisclosure } from "@mantine/hooks";
import useTodoStore, { ITodoItem } from "../../store/store";

const TodoItem = ({ item, index }: { item: ITodoItem; index: number }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { deleteTodo } = useTodoStore((state) => state);

  const handleDownload = () => {
    const link: any = document.createElement("a");
    link.href = item?.image;
    link.download = "image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <EditTaskModal isOpen={opened} onClose={close} item={item} />
      <Flex align="center" key={item.task}>
        <ImageCheckbox item={item} index={index} />
        <Flex direction="column" gap={4} ml="xs">
          <Button size="xs" color="gray" variant="outline" onClick={open}>
            <IconEdit width={14} />
          </Button>
          <Button
            size="xs"
            color="red"
            variant="outline"
            onClick={() => deleteTodo(item.id)}
          >
            <IconTrash width={14} />
          </Button>
          <Button
            size="xs"
            variant="outline"
            onClick={() => item?.image && handleDownload()}
            disabled={!item?.image}
          >
            <IconDownload width={14} />
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default TodoItem;
