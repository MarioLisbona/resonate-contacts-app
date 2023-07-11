"use client";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <Flex w={"100%"} justify={"center"}>
      <Text textStyle={"heading"}>{children}</Text>
    </Flex>
  );
}
