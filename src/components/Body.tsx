import React from "react";
import Display from "./Display";
import Keyboard from "./Keyboard";
import { Box, Center, Container, Flex } from "@chakra-ui/react";

export default function Body() {
  return (
    <Center w="full" h="100vh" bg="blue.100">
      <Container
        display="flex"
        border="1px solid"
        bg="gray.50"
        w={{ base: "full", md: "sm" }}
        h={{ base: "100vh", md: "fit-content" }}
        rounded={{ base: "none", md: "3xl" }}
        backdropFilter="blur(51px)"
        flexDir="column"
        color={["black", "white"]}
        p={4}
      >
        <Display />
        <Keyboard />
      </Container>
    </Center>
  );
}
