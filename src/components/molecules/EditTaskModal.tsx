import { Flex, Modal } from "@mantine/core";
import EditTodoInputs from "./EditTodoInputs";

interface IEditTaskModal {
  isOpen: boolean;
  onClose(): void;
  item: {
    id: number;
    task: string;
    tag: string;
    checked: boolean;
    image?: string;
  };
}

const EditTaskModal = ({ isOpen, onClose, item }: IEditTaskModal) => {
  return (
    <Modal
      size="lg"
      opened={isOpen}
      onClose={onClose}
      title="Edit Task"
      centered
    >
      <Flex pb={150}>
        <EditTodoInputs item={item} onClose={onClose} />
      </Flex>
    </Modal>
  );
};

export default EditTaskModal;
