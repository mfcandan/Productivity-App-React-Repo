import { Button, Flex, Modal, TextInput } from "@mantine/core";
import { useState } from "react";
import useTodoStore from "../../store/store";

interface INewTagModal {
  isOpen: boolean;
  onClose(): void;
}

const NewTagModal = ({ isOpen, onClose }: INewTagModal) => {
  const { createTag } = useTodoStore((state) => state);
  const [newTag, setNewTag] = useState("");

  const handleAdd = () => {
    createTag(newTag);
    setNewTag("");
    onClose();
  };

  return (
    <Modal opened={isOpen} onClose={onClose} title="Edit Task" centered>
      <Flex p="xl" gap="sm">
        <TextInput
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          placeholder="New Tag Name"
          w="100%"
        />
        <Button color="green" size="sm" onClick={handleAdd}>
          Add
        </Button>
      </Flex>
    </Modal>
  );
};

export default NewTagModal;
