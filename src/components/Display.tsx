"use client";

import { Flex, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaEquals } from "react-icons/fa";

export default function Display() {
  return (
    <Flex flexDir="column" gap={2} py={20}>
      <Text alignSelf="flex-end" color="#818181" fontSize="2xl">
        6000/2+3227*2
      </Text>
      <Flex justifyContent="space-between" alignItems="center" w="full">
        <Icon as={FaEquals} color="#424242" fontSize="3xl" />
        <Heading color="#424242" fontSize="5xl">
          12,454
        </Heading>
      </Flex>
    </Flex>
  );
}
