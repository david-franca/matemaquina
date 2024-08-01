import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  baseStyle: {
    size: "lg",
    variant: "outline",
    border: "2px",
    borderStyle: "solid",
    borderColor: "white",
    color: "blue.300",
    backdropFilter: "blur(6px)",
    fontWeight: "medium",
    bg: "gray.100",
    _hover: {
      bg: "gray.200",
      borderColor: "blue.400",
      color: "blue.400",
    },
    zIndex: 10,
  },
  sizes: {
    full: {
      p: "4",
      rounded: "2xl",
      fontSize: "3xl",
      w: "full",
      h: "full",
    },
  },
  variants: {
    default: {
      bg: "gray.100",
      _hover: {
        bg: "gray.200",
        borderColor: "blue.400",
        color: "blue.400",
      },
    },
    action: {
      bg: "blue.100",
      _hover: {
        bg: "blue.200",
        borderColor: "blue.500",
        color: "blue.500",
      },
    },
    text: {
      bg: "gray.100",
      _hover: {
        bg: "gray.200",
        borderColor: "gray.700",
        color: "gray.700",
      },
      color: "gray.600",
    },
    special: {
      border: "none",
      bg: "blue.400",
      color: "white",
      boxShadow:
        "-3px 4px 11px 0px #B0DFFF inset, -9px 13px 23px 0px rgba(0, 163, 255, 0.65)",
      _hover: { bg: "blue.500", color: "white" },
      zIndex: 1,
    },
  },
  defaultProps: {
    variant: "default",
    size: "full",
  },
});
