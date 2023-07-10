"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button, Flex, Text } from "@chakra-ui/react";
import SectionContainer from "./components/SectionContainer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <SectionContainer>
      <Hero />
    </SectionContainer>
  );
}
