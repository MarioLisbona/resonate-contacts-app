"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button, Flex, Text } from "@chakra-ui/react";
import SectionContainer from "./components/SectionContainer";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";
import { testContacts } from "@/data/contacts";
import { ContactProps } from "@/data/contacts";
import { useState } from "react";

export default function Home() {
  const [contacts, setContacts] = useState<ContactProps[]>(testContacts);

  return (
    <SectionContainer>
      <Hero />
      <CardGrid contacts={contacts} />
    </SectionContainer>
  );
}
