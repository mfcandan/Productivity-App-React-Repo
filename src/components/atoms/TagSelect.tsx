import { Select } from "@mantine/core";

interface ITagSelect {
  selectedTag?: string;
}

const TagSelect = ({ selectedTag }: ITagSelect) => {
  return (
    <Select
      placeholder="Tags"
      size="sm"
      defaultValue={selectedTag ? selectedTag : ""}
      data={[
        { value: "school", label: "School" },
        { value: "home", label: "Home" },
        { value: "sports", label: "Sports" },
      ]}
    />
  );
};

export default TagSelect;
