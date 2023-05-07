import {
  Button,
  FileInput,
  Flex,
  Select,
  TextInput,
  Title,
  rem,
} from "@mantine/core";
import ImageUploader from "../atoms/ImageUploader";
import TagSelect from "../atoms/TagSelect";
import { useMediaQuery } from "@mantine/hooks";
import useTodoStore from "../../store/store";
import { useEffect, useState } from "react";
import { IconUpload } from "@tabler/icons-react";

interface IAddTodoInputs {
  item?: {
    id: number;
    task: string;
    tag: string;
    checked: boolean;
    image?: string;
  };
  onClose(): void;
}

const EditTodoInputs = ({ item, onClose }: IAddTodoInputs) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { updateTodo } = useTodoStore((state) => state);
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
    item && newTodo && updateTodo(item.id, newTodo);
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
          data={[
            { value: "school", label: "School" },
            { value: "home", label: "Home" },
            { value: "sports", label: "Sports" },
          ]}
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
