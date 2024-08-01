"use client";

import { chakra, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { FaEquals } from "react-icons/fa";

export default function Display() {
  function generateId() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }
  function handleTextContent(value?: string) {
    let text: Array<ReactNode> = ["0"];
    if (!value) {
      return text;
    }
    const arr = value.split("");
    if (arr.length > 0) {
      text = arr.map((value, i) => {
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
    <Flex flexDir="column" gap={{ base: 4, md: 2 }} py={{ base: 20, md: 14 }}>
      <Text alignSelf="flex-end" color="gray.500" fontSize="2xl">
        {handleTextContent("6000/2+3227*2")}
      </Text>
      <Flex justifyContent="space-between" alignItems="center" w="full">
        <Icon as={FaEquals} color="gray.700" fontSize="3xl" />
        <Heading color="gray.700" fontSize="5xl">
          12,454
        </Heading>
      </Flex>
    </Flex>
  );
}
