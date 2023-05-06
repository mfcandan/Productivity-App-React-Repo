import { Flex, Modal } from "@mantine/core";
import EditTodoInputs from "./EditTodoInputs";

interface IEditTaskModal {
  isOpen: boolean;
  onClose(): void;
  item: {
    task: string;
    tag: string;
    checked: boolean;
    image?: string;
  };
}

const EditTaskModal = ({ isOpen, onClose, item }: IEditTaskModal) => {
  const handleEdit = () => {
    console.log("edit");
    onClose()
  };

  return (
    <Modal size="lg" opened={isOpen} onClose={onClose} title="Edit Task" centered>
      <Flex>
        <EditTodoInputs item={item} handleEdit={handleEdit} />
      </Flex>
    </Modal>
  );
};

export default EditTaskModal;
