import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const Search = () => {
  return (
    <TextInput icon={<IconSearch size="0.8rem" />} placeholder="Search Todo" />
  );
};

export default Search;
