import { Button, Flex, TextInput, Title } from "@mantine/core";
import ImageUploader from "../atoms/ImageUploader";
import TagSelect from "../atoms/TagSelect";
import { useMediaQuery } from "@mantine/hooks";

const AddTodoInputs = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Flex direction="column" gap="md">
      <Title order={3} align="center">
        New Todo:
      </Title>
      <Flex justify="space-between" gap="xs">
        <ImageUploader />
        <TextInput placeholder="New Todo" w="100%" />
        <TagSelect />{" "}
        {!isMobile && (
          <Button color="green" size="sm">
            Add
          </Button>
        )}
      </Flex>
      {isMobile && (
        <Button color="green" size="sm">
          Add
        </Button>
      )}
    </Flex>
  );
};

export default AddTodoInputs;
