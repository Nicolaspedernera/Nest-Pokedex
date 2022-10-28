/* eslint-disable react/no-children-prop */
import type {FC} from "react";

import React, {useState} from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import {MdFileCopy} from "react-icons/md";

import ResponseViewer from "./ResponseViewer";

export const PokemonResponse = () => {
  const url = import.meta.env.VITE_ENDPOINT_URI;
  const [path, setPath] = useState("pokemon/ditto");
  const [request, setRequest] = useState(`${url}${path}`);

  return (
    <Container maxW="container.lg">
      <Box flexDir="column">
        <Text fontSize="4xl" fontWeight="bold" py={5} textAlign="center">
          Try it now!
        </Text>
        <Flex flexDir="row" w="full">
          <InputGroup>
            <InputLeftAddon children={url} />
            <Input roundedRight="none" value={path} onChange={(e) => setPath(e.target.value)} />
          </InputGroup>
          <Tooltip hasArrow label="Copy to clipboard" mb={2} placement="top" rounded="lg">
            <IconButton
              aria-label="Copy to clipboard"
              icon={<MdFileCopy />}
              rounded="none"
              onClick={() => {
                navigator.clipboard.writeText(`${url}${path}`);
              }}
            />
          </Tooltip>
          <Button
            colorScheme={"telegram"}
            px={7}
            roundedLeft="none"
            onClick={() => setRequest(`${url}${path}`)}
          >
            Submit
          </Button>
        </Flex>
        <Flex alignItems="baseline" gap={1}>
          <Text mt={1}>Need a hint? Try</Text>
          <EndpointLink path="pokemon/ditto" onClick={setRequest} />,
          <EndpointLink path="pokemon-species/aegislash" onClick={setRequest} />,
          <EndpointLink path="type/3" onClick={setRequest} />,
          <EndpointLink path="pokemon?limit=50&offset=0" onClick={setRequest} />.
        </Flex>

        <ResponseViewer request={request} />
      </Box>
    </Container>
  );
};

type EndpointLinkProps = {
  path: string;
  onClick: (req: string) => void;
};

const EndpointLink: FC<EndpointLinkProps> = ({path, onClick}) => {
  const url = import.meta.env.VITE_ENDPOINT_URI;

  function handleChangeRequest(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const newPath = (e.target as any).innerText;

    onClick(`${url}${newPath}`);
  }

  return (
    <Button variant="link" onClick={handleChangeRequest}>
      {path}
    </Button>
  );
};
