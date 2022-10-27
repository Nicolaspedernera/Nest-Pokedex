import {Box, Center, Container, Image, Link, Text} from "@chakra-ui/react";

import pokelogo from "/pokeapi.png";

const Header = () => {
  return (
    <Box>
      <Box bg="blackAlpha.800">
        <Container maxW="container.lg">
          <Center color="white" flexDir="column" p={10}>
            <Image src={pokelogo} />
            <Text fontSize="3xl">The RESTful Pokémon API</Text>
            <Text fontSize="lg">
              Serving over <strong>250,000,000</strong> API calls each month!
            </Text>
          </Center>
        </Container>
      </Box>
      <Center bg="blackAlpha.200" flexDir="column" py={5}>
        <Text fontSize="lg">
          All the Pokémon data you&apos;ll ever need in one place, <br />
          easily accessible through a modern RESTful API.
        </Text>
        <Link color="blue.500" fontSize="xl" py={3}>
          Check out the docs!
        </Link>
      </Center>
    </Box>
  );
};

export default Header;
