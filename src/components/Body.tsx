"use client";

import { useCallback, useState } from "react";

import { Center, Container, IconButton, useColorMode } from "@chakra-ui/react";

import Display from "./Display";
import Keyboard from "./Keyboard";
import { evaluate } from "mathjs";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function Calculator() {
  const [expression, setExpression] = useState("0");
  const [result, setResult] = useState("0");
  const { colorMode, toggleColorMode } = useColorMode();

  const evaluateExpression = useCallback(() => {
    if (expression === "") {
      setResult("0");
      return;
    }

    try {
      const evaluatedResult = evaluate(expression);
      setResult(evaluatedResult);
      setExpression(evaluatedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  }, [expression]);

  const handleInput = useCallback(
    (input: string) => {
      if (input === "clear") {
        setExpression("0");
        setResult("0");
      } else if (input === "clearOne") {
        setExpression(expression.slice(0, -1));
      } else if (input === "=") {
        evaluateExpression();
      } else {
        const updatedExpression =
          expression === "0" ? input : `${expression}${input}`;
        setExpression(updatedExpression);
      }
    },
    [evaluateExpression, expression]
  );

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
        color="black"
        _dark={{ color: "white", bg: "gray.900" }}
        p={4}
      >
        <IconButton
          aria-label="Change color mode"
          icon={colorMode === "light" ? <IoSunny /> : <IoMoon />}
          size="thin"
          onClick={toggleColorMode}
        />
        <Display expression={expression} result={result} />
        <Keyboard handleInput={handleInput} />
      </Container>
    </Center>
  );
}
