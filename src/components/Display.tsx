"use client";

import { ReactNode } from "react";
import { FaEquals } from "react-icons/fa";

import { chakra, Flex, Heading, Icon, Text, Tooltip } from "@chakra-ui/react";

interface DisplayProps {
  expression?: string;
  result?: string;
}

export default function Display({
  expression,
  result,
}: Readonly<DisplayProps>) {
  function generateId() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }
  function handleTextContent() {
    let text: Array<ReactNode> = ["0"];
    if (!expression) {
      return text;
    }
    const arr = expression.split("");
    if (arr.length > 0) {
      text = arr.map((value) => {
        if (value.match(/([+*/=-])/g)) {
          return (
            <chakra.span
              key={generateId()}
              color="blue.400"
              fontWeight="medium"
              px={1}
            >
              {value}
            </chakra.span>
          );
        }
        return value;
      });
    }
    return text;
  }

  return (
    <Flex flexDir="column" gap={{ base: 4, md: 2 }} py={{ base: 16, md: 10 }}>
      <Text
        alignSelf="flex-end"
        color="gray.500"
        fontSize="2xl"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
      >
        {handleTextContent()}
      </Text>
      <Flex justifyContent="space-between" alignItems="center" w="full" gap={4}>
        <Icon
          as={FaEquals}
          color="gray.700"
          _dark={{ color: "gray.300" }}
          fontSize="3xl"
        />
        <Tooltip label={result}>
          <Heading
            color="gray.700"
            _dark={{ color: "gray.300" }}
            fontSize="5xl"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {result}
          </Heading>
        </Tooltip>
      </Flex>
    </Flex>
  );
}
