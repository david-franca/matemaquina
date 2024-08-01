import { Center, Button as ChakraButton } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface ButtonProps {
  label: ReactNode;
  variant?: string;
}

export default function Button({ label, variant }: Readonly<ButtonProps>) {
  return (
    <Center w="full" h="full">
      <ChakraButton variant={variant}>{label}</ChakraButton>
    </Center>
  );
}
