import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import useTodoStore from "../../store/store";

const Search = () => {
  const { searchText, setSearchText } = useTodoStore((state) => state);

  return (
    <TextInput
      onChange={(e) => setSearchText(e.currentTarget.value)}
      value={searchText}
      icon={<IconSearch size="0.8rem" />}
      placeholder="Search Todo"
    />
  );
};

export default Search;
