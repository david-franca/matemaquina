"use client";

import { Grid, GridItem } from "@chakra-ui/react";

import Button from "./Button";

interface KeyboardProps {
  handleInput: (data: string) => void;
}

export default function Keyboard({ handleInput }: Readonly<KeyboardProps>) {
  function generateId() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  function clearAll() {
    handleInput("clear");
  }

  function clearOne() {
    handleInput("clearOne");
  }

  const buttons = [
    {
      label: "clear",
      variant: "text",
    },
    {
      label: "clearOne",
      variant: "text",
    },
    {
      label: "/",
      variant: "action",
    },
    {
      label: "*",
      variant: "action",
    },
    {
      label: "7",
    },
    {
      label: "8",
    },
    {
      label: "9",
    },
    {
      label: "-",
      variant: "action",
    },
    {
      label: "4",
    },
    {
      label: "5",
    },
    {
      label: "6",
    },
    {
      label: "+",
      variant: "action",
    },
    {
      label: "1",
    },
    {
      label: "2",
    },
    {
      label: "3",
    },
    {
      label: "=",
      variant: "special",
      rowspan: 2,
    },
    {
      label: "0",
      colspan: 2,
    },
    {
      label: ".",
    },
  ];

  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      templateRows="repeat(5, 1fr)"
      h="full"
      w="full"
      alignItems="center"
      justifyItems="center"
      gap={{ base: 2, md: 3 }}
    >
      {buttons.map(({ label, colspan, rowspan, variant }, i) => (
        <GridItem
          key={generateId()}
          colSpan={colspan}
          rowSpan={rowspan}
          w="full"
          h="full"
          rounded="2xl"
        >
          <Button
            label={label}
            variant={variant}
            onClick={() => handleInput(label)}
          />
        </GridItem>
      ))}
    </Grid>
  );
}
