import { FileInput, rem } from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";

const ImageUploader = () => {
  return <FileInput placeholder="Image" icon={<IconUpload size={rem(14)} />} />;
};

export default ImageUploader;
