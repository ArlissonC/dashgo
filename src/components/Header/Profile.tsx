import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Arlisson Costa</Text>
        <Text color="gray.300">arlisson.fs13@gmail.com</Text>
      </Box>
      <Avatar
        size="md"
        name="Arlisson Costa"
        src="https://avatars.githubusercontent.com/u/85974593?v=4"
      />
    </Flex>
  );
};

export default Profile;
