import * as React from "react";
import { ChakraProvider, Box, VStack, Grid, theme } from "@chakra-ui/react";
import Steps from "./components/Steps";
import Status from "./components/Status";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" background="whiteAlpha.50">
      <Grid minH="100vh" p={3} placeItems="center">
        <VStack spacing={8} w="100%">
          <Box w="75%">
            <Steps current={1} />
            <Status />
          </Box>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
