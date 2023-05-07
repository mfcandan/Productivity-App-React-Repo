import {
  Button,
  FileInput,
  Flex,
  Select,
  TextInput,
  Title,
  rem,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconUpload } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import useTodoStore from "../../store/store";

interface IAddTodoInputs {
  item?: {
    _id: string;
    task: string;
    tag: string;
    completed: boolean;
    image?: string;
  };
  onClose(): void;
}

const EditTodoInputs = ({ item, onClose }: IAddTodoInputs) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { updateTodo, tags } = useTodoStore((state) => state);
  const [newImage, setNewImage] = useState<File | null>(null);
  const [newTodo, setNewTodo] = useState<any>();

  useEffect(() => {
    newImage && handleImageUpload();
  }, [newImage]);

  const handleImageUpload = () => {
    const imageFile = newImage;
    const reader = new FileReader();
    reader.readAsDataURL(imageFile as Blob);
    reader.onload = () => {
      const base64Data = reader.result;
      setNewTodo({ ...newTodo, image: base64Data });
      console.log(base64Data);
    };
  };

  const handleSave = () => {
    item && newTodo && updateTodo(item._id, newTodo);
    setNewTodo({
      task: "",
      tag: "",
      image: "",
    });
    setNewImage(null);
    onClose();
  };

  return (
    <Flex direction="column" gap="md">
      <Title order={3} align="center">
        {"Edit Todo:"}
      </Title>
      <Flex justify="space-between" gap="xs">
        <FileInput
          accept="image/*"
          onChange={setNewImage}
          placeholder="Image"
          defaultValue={item?.image || newTodo?.image}
          value={newImage}
          icon={<IconUpload size={rem(14)} />}
        />
        <TextInput
          placeholder="New Todo"
          w="100%"
          defaultValue={item?.task}
          value={newTodo?.task}
          onChange={(e) =>
            setNewTodo({
              ...newTodo,
              task: e.currentTarget.value,
            })
          }
        />
        <Select
          placeholder="Tags"
          size="sm"
          searchable
          defaultValue={item?.tag}
          value={newTodo?.tag}
          onChange={(e) =>
            setNewTodo({
              ...newTodo,
              tag: e,
            })
          }
          data={
            tags &&
            tags.map((tag) => ({
              value: tag,
              label: tag,
            }))
          }
        />
        {!isMobile && (
          <Button color="blue" size="sm" onClick={handleSave}>
            Save
          </Button>
        )}
      </Flex>
      {isMobile && (
        <Button color="blue" size="sm" onClick={handleSave}>
          Save
        </Button>
      )}
    </Flex>
  );
};

export default EditTodoInputs;
