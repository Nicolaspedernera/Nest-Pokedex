import {Center, Container, Text} from "@chakra-ui/react";
import {JsonViewer} from "@textea/json-viewer";

export const RequestAPI = () => {
  return (
    <Container maxW="container.lg">
      <Center flexDir="column" mt={5}>
        <Text fontSize="4xl" fontWeight="bold">
          Try it now!
        </Text>
        <JsonViewer value={{test: "hola"}} />
      </Center>
    </Container>
  );
};
