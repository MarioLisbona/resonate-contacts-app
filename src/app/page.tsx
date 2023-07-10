"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button, Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex direction={"column"} align={"center"}>
      <Text textStyle={"heading"}>This is a heading</Text>
      <Text textStyle={"subheading"}>This is a sub heading</Text>
      <Text textStyle={"context"}>This is context</Text>
      <Text textStyle={"context"}>This is context</Text>
      <Text textStyle={"context"}>This is context</Text>
      <Button variant={"filledSqLargeBtn"}>Test button</Button>
      <Button bg={"brandOrange"} variant={"filledSqBtn"}>
        Test button
      </Button>
      <Button variant={"whiteSqBtn"}>Test button</Button>
      <Button variant={"linkBtn"}>Test button</Button>
    </Flex>
  );
}
