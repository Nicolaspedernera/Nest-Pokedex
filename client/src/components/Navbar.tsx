import {Center, HStack, Image, Text} from "@chakra-ui/react";

import pokeapi from "../../public/pokeapi.png";

const Navbar = () => {
  return (
    <Center bg="red.500">
      <HStack py={2} w="container.lg">
        <Image src={pokeapi} width="100px" />
        <HStack color="white" flex={1} gap={5} justifyContent="end">
          <Text>Home</Text>
          <Text>About</Text>
          <Text>API v2</Text>
          <Text>GraphQL v1beta</Text>
        </HStack>
      </HStack>
    </Center>
  );
};

export default Navbar;
