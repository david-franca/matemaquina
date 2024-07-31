import {
  Center,
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface ButtonProps {
  label: ReactNode;
  variant?: string;
}

export default function Button({ label, variant }: Readonly<ButtonProps>) {
  function handleVariant(): ChakraButtonProps {
    switch (variant) {
      case "action":
        return {
          bg: "blue.100",
          _hover: {
            bg: "blue.200",
            borderColor: "blue.500",
            color: "blue.500",
          },
        };
      case "text":
        return {
          bg: "gray.100",
          _hover: {
            bg: "gray.200",
            borderColor: "gray.700",
            color: "gray.700",
          },
          color: "gray.600",
        };
      case "special":
        return {
          border: "none",
          bg: "blue.400",
          color: "white",
          boxShadow:
            "-3px 4px 11px 0px #B0DFFF inset, -9px 13px 23px 0px rgba(0, 163, 255, 0.65)",
          _hover: { bg: "blue.500" },
        };
      default:
        return {
          bg: "gray.100",
          _hover: {
            bg: "gray.200",
            borderColor: "blue.400",
            color: "blue.400",
          },
        };
    }
  }
  return (
    <Center w="full" h="full">
      <ChakraButton
        aria-label="label"
        size="lg"
        variant="outline"
        border="2px"
        borderStyle="solid"
        borderColor="white"
        color="blue.300"
        backdropFilter="blur(6px)"
        rounded="2xl"
        fontSize="3xl"
        fontWeight="medium"
        w="full"
        h="full"
        {...handleVariant()}
      >
        {label}
      </ChakraButton>
    </Center>
  );
}
