// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export function Providers({ children }: Readonly<PropsWithChildren>) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
