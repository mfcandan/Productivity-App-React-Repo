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

const AddTodoInputs = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { addTodo, tags } = useTodoStore((state) => state);
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

  const handleAddTodo = () => {
    addTodo({
      ...newTodo,
      id: Math.floor(Math.random() * 1000),
    });
    setNewTodo({
      task: "",
      tag: "",
      image: "",
    });
    setNewImage(null);
  };

  return (
    <Flex direction="column" gap="md" mt="xl">
      <Title order={5} align="center">
        Add New Todo:
      </Title>
      <Flex justify="space-between" gap="xs">
        <FileInput
          accept="image/*"
          onChange={setNewImage}
          placeholder="Image"
          value={newImage}
          icon={<IconUpload size={rem(14)} />}
        />
        <TextInput
          placeholder="New Todo"
          w="100%"
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
          <Button color="green" size="sm" onClick={handleAddTodo}>
            Add
          </Button>
        )}
      </Flex>
      {isMobile && (
        <Button color="green" size="sm" onClick={handleAddTodo}>
          Add
        </Button>
      )}
    </Flex>
  );
};

export default AddTodoInputs;
