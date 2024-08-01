"use client";

import React from "react";
import Button from "./Button";
import { Grid, GridItem, Icon } from "@chakra-ui/react";
import { FiDelete } from "react-icons/fi";
import { TbClearAll } from "react-icons/tb";

const buttons = [
  {
    label: <Icon as={TbClearAll} />,
    variant: "text",
  },
  {
    label: <Icon as={FiDelete} />,
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

export default function Keyboard() {
  function generateId() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

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
          <Button label={label} variant={variant} />
        </GridItem>
      ))}
    </Grid>
  );
}
