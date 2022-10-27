/* eslint-disable react/no-children-prop */
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
import useSWR from "swr";

import {fetcher} from "../utils/fetcher";

import ResponseViewer from "./ResponseViewer";

export const PokemonResponse = () => {
  // TODO: change url
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/");
  const [path, setPath] = useState("pokemon/ditto");
  const [request, setRequest] = useState(`${url}${path}`);
  const {data, error} = useSWR(`${request}`, fetcher);

  function handleChangeRequest(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const newPath = (e.target as any).innerText;

    setRequest(`${url}${newPath}`);
  }

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
          <Button variant="link" onClick={handleChangeRequest}>
            pokemon/ditto
          </Button>
          ,{" "}
          <Button variant="link" onClick={handleChangeRequest}>
            pokemon-species/aegislash
          </Button>
          ,
          <Button variant="link" onClick={handleChangeRequest}>
            type/3
          </Button>
          ,
          <Button variant="link" onClick={handleChangeRequest}>
            pokemon?limit=50&offset=0
          </Button>
          ,
        </Flex>
        {!data && !error ? (
          <Text fontSize="2xl" h="calc(100vh - 80px)">
            Loading...
          </Text>
        ) : (
          <ResponseViewer response={data} title={request} />
        )}
      </Box>
    </Container>
  );
};
