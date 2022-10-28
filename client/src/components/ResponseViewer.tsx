import {FC, useState} from "react";
import {Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Text} from "@chakra-ui/react";
import {JsonViewer, JsonViewerTheme} from "@textea/json-viewer";
import {BsChevronDown} from "react-icons/bs";
import useSWR from "swr";

import {fetcher} from "../utils/fetcher";

const errorMessage = {message: "Resource not found"};
const loadingMessage = {message: "Loading resources"};

type Props = {
  request: string;
};

const ResponseViewer: FC<Props> = ({request}) => {
  const {data, error} = useSWR(`${request}`, fetcher);
  const [theme, setTheme] = useState<JsonViewerTheme>("dark");

  return (
    <Box my={5} w="full">
      <Flex alignItems="baseline" flexDir="row">
        <Text flex={1} fontSize="2xl" fontWeight="bold">
          {!data && !error
            ? "Loading..."
            : data
            ? `Resource of ${request.split("v2/")[1]}`
            : `Resource not found`}
        </Text>
        <Menu>
          <MenuButton as={Button} colorScheme="blackAlpha" rightIcon={<BsChevronDown />} size="sm">
            Theme
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setTheme("light")}>Light</MenuItem>
            <MenuItem onClick={() => setTheme("dark")}>Dark</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Box h="calc(100vh - 80px)" my={5} overflowY="scroll">
        <JsonViewer
          defaultInspectDepth={2}
          displayDataTypes={false}
          theme={theme}
          value={!data && !error ? loadingMessage : !data ? errorMessage : data}
        />
      </Box>
    </Box>
  );
};

export default ResponseViewer;
