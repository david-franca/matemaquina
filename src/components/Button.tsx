import { Center, Button as ChakraButton, Icon } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { FiDelete } from "react-icons/fi";
import { TbClearAll } from "react-icons/tb";

interface ButtonProps {
  label: ReactNode;
  variant?: string;
  onClick?: () => void;
}

export default function Button({
  label,
  variant,
  onClick,
}: Readonly<ButtonProps>) {
  const handleLabelOrIcon = () => {
    if (label === "clear") {
      return <Icon as={TbClearAll} />;
    }
    if (label === "clearOne") {
      return <Icon as={FiDelete} />;
    }

    return label;
  };
  return (
    <Center w="full" h="full">
      <ChakraButton variant={variant} onClick={onClick}>
        {handleLabelOrIcon()}
      </ChakraButton>
    </Center>
  );
}
