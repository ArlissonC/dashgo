import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

interface Props {
  showProfileData?: boolean;
}

const Profile = ({ showProfileData = true }: Props) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Arlisson Costa</Text>
          <Text color="gray.300">arlisson.fs13@gmail.com</Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Arlisson Costa"
        src="https://avatars.githubusercontent.com/u/85974593?v=4"
      />
    </Flex>
  );
};

export default Profile;
