import { Text } from "@mantine/core";

interface UserSpecCardProps {
  username: string;
}

const UserSpecCard = ({ username }: UserSpecCardProps) => {
  return (
    <Text size="sm" align="center">
      Welcome{username}
    </Text>
  );
};

export default UserSpecCard;
