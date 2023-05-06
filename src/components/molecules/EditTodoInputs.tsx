import { Button, Flex, TextInput, Title } from "@mantine/core";
import ImageUploader from "../atoms/ImageUploader";
import TagSelect from "../atoms/TagSelect";
import { useMediaQuery } from "@mantine/hooks";

interface IAddTodoInputs {
  item?: {
    task: string;
    tag: string;
    checked: boolean;
    image?: string;
  };
  handleEdit(): void;
}

const EditTodoInputs = ({ item, handleEdit }: IAddTodoInputs) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Flex direction="column" gap="md">
      <Title order={3} align="center">
        {"Edit Todo:"}
      </Title>
      <Flex justify="space-between" gap="xs">
        <ImageUploader />
        <TextInput placeholder="New Todo" w="100%" defaultValue={item?.task} />
        <TagSelect selectedTag={item?.tag} />{" "}
        {!isMobile && (
          <Button color="green" size="sm">
            Edit
          </Button>
        )}
      </Flex>
      {isMobile && (
        <Button color="green" size="sm" onClick={handleEdit}>
          Edit
        </Button>
      )}
    </Flex>
  );
};

export default EditTodoInputs;
