import React from "react";
import Display from "./Display";
import Keyboard from "./Keyboard";
import { Box, Container, Flex } from "@chakra-ui/react";

export default function Body() {
  return (
    <Container
      display="flex"
      bg="gray.50"
      w="full"
      h="100vh"
      backdropFilter="blur(51px)"
      flexDir="column"
      color={["black", "white"]}
      p={4}
    >
      <Display />
      <Keyboard />
    </Container>
  );
}
