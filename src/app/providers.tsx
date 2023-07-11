"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../theme";
import Fonts from "@/fonts";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <Fonts />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
